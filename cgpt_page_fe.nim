import mynimlib/[nimjs, unifetch]
import std/jsfetch
import std/[asyncjs, jsconsole, jsformdata, jsheaders]
import strutils, strformat, tables, sequtils
import dom
import consts
import std/enumerate
import jsony, json
from std/httpcore import HttpMethod
from std/jsffi import JsObject
from std/sugar import `=>`
import cgpt_page
import handles
import std/jsfetch
import icecream/src/icecream
import comms
import safenim


{. emit: """
import {createWeb3Modal, chains, projectId, wagmiConfig, getAccount} from "./cw_modal/dist/cw-modal.js";
""" .}

var connect_wallet_addy  {. exportc:"connect_wallet_addy" .}: cstring = ""
var is_connected {. exportc:"is_connected" .}: bool = false

{. emit: """
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })

// Subscribe to state changes to get account info after connection
modal.subscribeState(newState => {
  if (newState.open) {
    const account = getAccount();
    if (account.address !== undefined){
      connect_wallet_addy = account.address
      console.log("connect_wallet_addy:", connect_wallet_addy);
      is_connected = true
    }else{
      console.log("account.address is undefined");
      is_connected = false
    }
  }
});

const account = getAccount();
if (account.address !== undefined){
    connect_wallet_addy = account.address
    console.log("connect_wallet_addy:", connect_wallet_addy);
    is_connected = true
}else{
    console.log("account.address is undefined");
    is_connected = false
}


""" .}

let current_url = window.location.href
# http://localhost:7778/chat/0xF6427...52/0
let url_parts   = current_url.split("/")
let wallet_addy = url_parts[^2]
let nft_index   = url_parts[^1]
ic "The wallet_addy is "  , wallet_addy
ic "The nft_index is   "  , nft_index

let (chapter_num, section_num) = consts.get_chap_sec_num nft_index.toInt

template errIfEmpty*(s:cstring, msg: cstring) =
    if s.len == 0:
        return err[cstring](msg)


# proc prompt_cgpt(prompt: cstring): Future[jsfetch.Response]  = 
#   unifetch.postJson(current_url,
#     %postMsg(kind:prompt_cgpt,prompt: $prompt)
#   )

proc hide_unselected_options(section:Element, selected_id:string) = 
  for child in section.queryAll(":scope > div").get:
    if child.id != selected_id:
      child.hide()
  # for child in section.queryAll(":scope > button").get:
  #   if child.id != selected_id:
  #     child.hide()

proc get_response_text(response:Response): Future[cstring] {. async .} = 
    let resp_json{. exportc: "resp_json".} = await response.json()

    var resp_text{. exportc: "resp_text".} = "".cstring

    {.emit: "resp_text = resp_json.choices[0].message.content".}

    return resp_text

proc get_selected_scenario_in_db(wallet_addy:cstring, nft_index:int): Future[Response] {.async.}= 
    get(
        url  = fmt"/chat/selection?wallet_addy={$wallet_addy}&nft_index={nft_index}"
    )

proc upsert_to_db(contrib:contribution): Future[Response] {.async.} = 
    unifetch.postJson(current_url,
      %postMsg(kind:set_contribution, contrib:contrib)
    )

proc add_ghost_writer_tab_selected_functionality(
                                                    tab    : Element , 
                                                    id     : string
                                                  ) =
  tab.click( 
    proc (e: Event) =
      # The parent will be a ghost writer card
      let parent = tab.parentElement
      
      # Remove the purple bg color
      # Remove the id
      # Change the color of the text to slategray
      # For all non selected tabs
      for kid in parent.querySelectorAll("div"):
        kid.style.backgroundColor = ""
        kid.id                    = ""
        for p in kid.queryAll("p").get():
          p.style.color = "slategray"
        
      # Add the purple bg color
      # Add the id
      # Change the color of the text to white
      # For the selected tab
      tab.style.backgroundColor = "#816AFE"
      tab.style.color           = "white"
      tab.id = id
      
      for p in tab.queryAll("p").get():
        p.style.color = "white"
  )

proc add_tab_clicked_functionality(el:Element, id:string) = 
    for kid in el.querySelectorAll("div"):
        kid.add_ghost_writer_tab_selected_functionality(id)

template show_err_if_no_selected_scenario(ghost_writer_card:Element, selected_scenario:Option[Element]) = 
    if selected_scenario.isNone:
        icr "No scenario selected"
        ghost_writer_card.addElement("<p id='no-scenario-err' class='text-red-500'>No scenario selected</p>")
        return
    
    let no_scenario_err = gebi("no-scenario-err")
    
    # If error is showing then remove it
    if no_scenario_err.isSome:
      no_scenario_err.get.remove()

proc to_text(selected_scenario: Element) : tuple[title, body: cstring] = 
    let title = selected_scenario.querySelector("p:first-child").innerHTML
    let all_p_tags = selected_scenario.queryAll_strict("p")

    var body : cstring
    for idx in 1..all_p_tags.high:
      var text_body = all_p_tags[idx].innerHTML.strip()
      if not text_body.endsWith("."):
        text_body &= ". "
      body.add " " & text_body 
    
    return (title, body)

template waitForCGPT(gen_scenario_btn, ghost_writer_card: Element, body:untyped) : untyped = 
    gen_scenario_btn.remove()
    ghost_writer_card.addElement(cgpt_page.spinner($cgpt_spinner))
    body
    cgpt_spinner.el_strict.remove()

template catch_err(cgpt_resp:jsfetch.Response, ghost_writer_card:Element)  = 
    if not cgpt_resp.ok:
        console.log("Request Failed", await cgpt_resp.json())
        ghost_writer_card.addElement("<p id='no-scenario-err' class='text-red-500'>Something went wrong! Try refreshing the page</p>")
        return

proc populate_scenarios(ghost_writer_card:Element, scenarios: seq[scenario], scenario_id: string) = 
    for ii, scenario in enumerate(scenarios):
      ghost_writer_card
        .addElement(
                      cgpt_page.ghost_writer_tab2(scenario.title, scenario.body, "s" & $ii, 1 )
                )
    ghost_writer_card.add_tab_clicked_functionality(scenario_id)

proc get_scenarios(cgpt_resp:jsfetch.Response) : Future[seq[scenario]] {.async.} = 
    let resp_text = await cgpt_resp.text()
    ic resp_text
    let resp_text_string         = $resp_text
    return resp_text_string.fromJson(seq[scenario])

# proc build_final_prompt : cstring = 
  
#     let scenario_1 = scenario(title: $selected_scenario_1.el_strict.to_text.title, body: $selected_scenario_1.el_strict.to_text.body )
#     let scenario_2 = scenario(title: $selected_scenario_2.el_strict.to_text.title, body: $selected_scenario_2.el_strict.to_text.body )
#     return buildPrompt3(scenario_1, scenario_2)

proc final_scenario_btn_click(e: Event) {.async.} =
    ic "Final Scenario Button Clicked"
    
    ghost_writer_card_2.el_strict.show_err_if_no_selected_scenario(selected_scenario_2.el)
    ghost_writer_card_2.el_strict.hide_unselected_options($selected_scenario_2)

    let 
      (selected_scenario_title, selected_scenario_body) = selected_scenario_2.el_strict.to_text()

    let upsert_req = await unifetch.postJson(current_url, %SetContrib( contribution(
      wallet_addy          : $wallet_addy,
      scenario_2           : scenario(title: $selected_scenario_title, body: $selected_scenario_body),
      nft_index            : nft_index.toInt,
      scenario_2_complete  : true
    
    )))

    if not upsert_req.ok:
        let error = await upsert_req.text()
        group("Error from upsert_req"):
          icr error
        return
    
    scenario_section.el_strict.addElement(ghost_writer_card(@[], $ghost_writer_card_3))
    let ghost_writer_card_3   = ghost_writer_card_3.el_strict

    let cgpt_final_submit_btn = 
      ghost_writer_card_2.el_strict.query_strict(".final_scenario_btn")
    
    waitForCGPT(cgpt_final_submit_btn, ghost_writer_card_3):
      let postMsg = await unifetch.post( current_url, %PromptCGPT(3) ).asObj(comms.postMsg)

    if not postMsg.ok:
      group("Error from postMsg"):
        icr postMsg.err
      return

    ic postMsg

    let final_playwright = postMsg.val.get.scenarios[0].body

    ghost_writer_card_3
      .addElement(ghost_writer_tab2("Final Playwright", final_playwright, "final_playwright", 3 ))


proc second_scenario_btn_click(e: Event) {.async.} =
    ic "Second Scenario Button Clicked"
    
    ghost_writer_card_1.el_strict.show_err_if_no_selected_scenario(selected_scenario_1.el)    
    ghost_writer_card_1.el_strict.hide_unselected_options($selected_scenario_1)
    

    let 
      (first_selected_scenario_title, first_selected_scenario_body) = selected_scenario_1.el_strict.to_text()
    
    let upsert_req = await unifetch.postJson(current_url, %SetContrib( contribution(
            wallet_addy          : $wallet_addy,
            scenario_1           : scenario(title: $first_selected_scenario_title, body: $first_selected_scenario_body),
            nft_index            : nft_index.toInt,
            scenario_1_complete  : true
          
    )))
      
    if not upsert_req.ok:
        let error = await upsert_req.text()
        group("Error from upsert_req"):
          icr error
        return

    scenario_section.el_strict.addElement(ghost_writer_card(@[], $ghost_writer_card_2))
    let ghost_writer_card_2 = ghost_writer_card_2.el_strict

    # This will be deleted when the user clicks it
    let gen_second_scenario_btn = 
      ghost_writer_card_1.el_strict.query_strict(".gen_second_scenario_btn")
    
    waitForCGPT(gen_second_scenario_btn, ghost_writer_card_2):
      let postMsg = await unifetch.post( current_url, %PromptCGPT(2) ).asObj(comms.postMsg)

    if not postMsg.ok:
      group("Error from postMsg"):
        icr postMsg.err
      return

    ic postMsg

    let scenarios: seq[scenario] = postMsg.val.get.scenarios

    ic scenarios

    ghost_writer_card_2.populate_scenarios(scenarios, $selected_scenario_2)

    let final_scenario_btn: Element = 
      ghost_writer_card_2.addElementGet(generate_scenario_btn("Send your final selections to our Story AI", "final_scenario_btn"))           
    
    final_scenario_btn.click final_scenario_btn_click 

proc first_scenario_btn_click(e: Event) {.async.} =
    ic "First Scenario Button Clicked"

    let gen_first_scenario_btn = query_strict(".gen_first_scenario_btn")

    ic chapter_num
    ic section_num
  
    waitForCGPT(gen_first_scenario_btn, ghost_writer_card_1.el_strict):
      let postMsg = await unifetch.post( current_url, %PromptCGPT(1) ).asObj(comms.postMsg)

    if not postMsg.ok:
      group("Error from postMsg"):
        icr postMsg.err
      return

    ic postMsg

    let scenarios: seq[scenario] = postMsg.val.get.scenarios

    ic scenarios

    ghost_writer_card_1.el_strict.populate_scenarios(scenarios, $selected_scenario_1)


    let second_scenario_btn = 
      ghost_writer_card_1.el_strict.
        addElementGet(generate_scenario_btn("Generate 3 More Scenarios with ChatGPT", "gen_second_scenario_btn"))           
    
    second_scenario_btn.click second_scenario_btn_click


if selected_scenario_1.el.isSome: 
    ic "User has completed scenario 1"
    
    if selected_scenario_2.el.isSome:
        ic "User has completed scenario 2"
        if selected_scenario_full.el.isSome:
            ic "User has completed final playwright"
        else:
            ic "User has not completed final playwright"

            let final_scenario_btn: Element = 
              ghost_writer_card_2.el_strict.addElementGet(generate_scenario_btn("Send your final selections to our Story AI", "final_scenario_btn"))           
            
            final_scenario_btn.click final_scenario_btn_click 

    else:
        
        ic "User has not completed scenario 2"
        let second_scenario_btn = 
          ghost_writer_card_1.el_strict.
            addElementGet(generate_scenario_btn("Generate 3 More Scenarios with ChatGPT", "gen_second_scenario_btn"))           
        second_scenario_btn.click( second_scenario_btn_click)

else:
    ic "No Contributions found"

    let gen_first_scenario_btn = 
        ghost_writer_card_1.el_strict.
          addElementGet(generate_scenario_btn("Generate Scenario's with ChatGPT", ec="gen_first_scenario_btn"))
    
    gen_first_scenario_btn.click first_scenario_btn_click