when not defined(js):
  import prologue
  import comps
  import mynimlib/[prologutils, nimOpenai]
  import nimtinydb
  import icecream/src/icecream
  import db/db



import strformat, sequtils, strutils
import mynimlib/nimwind as nw
import mynimlib/nimalpine as na
import consts
import mynimlib/nimsvgicons
import karax / [karaxdsl, vdom, vstyles, kbase]
import handles
import jsony
import dekao
import comms
import safenim

################
## Components ##
################

proc premise(): string = ""
  # proc premise_audio_btn():string = ""

proc nft_card(): string =
  proc boldText(body: string): string =
    fmt"<p class='text-bold'>{body}</p>"
  proc smallText(body: string): string =
    fmt"<p class=''>{body}</p>"
  proc regularText(body: string): string =
    fmt"<p class=''>{body}</p>"

  proc nft_img_mobile(): string =
    """
      <div class="bg-[#D9D9D9]" style="width:full; height:250px">
      </div>
      """

  proc nft_img_desktop(): string =
    """
      <div class="bg-[#D9D9D9]" style="width:250px; height:250px"></div>
      """

  proc text_section_mobile(): string =
    nw.col(
        nw.row(
          boldText("Loss")
      #smallText("Details")
    ) &
        nw.col(
          nw.row(boldText("Section 1.1: ")&regularText(
              "Gaia's perspective - ")) &
          regularText("Aliquam efficros. Morbi lorem nisl, ultricies i")
      ),
      #p="p-4",
      gap = 2
    )

  proc text_section_desktop(): string =
    nw.col(
        nw.row(
          boldText("Loss")
      #smallText("Details")
    ) &
        nw.col(
          nw.row(boldText("Section 1.1: ")&regularText(
              "Gaia's perspective - ")) &
          regularText("Aliquam efficros. Morbi lorem nisl, ultricies i")
      ),
      #p="p-4",
      gap = 2,
      itemposv = "around"
    )




  # Desktop / Tablet
  nw.col(
        nw.row(nft_img_desktop()&text_section_desktop(), bgColor = "#81162099",
            p = "p-4", gap = 4, head = "style='border-radius:10px; '"),
        name = "NFT Card Desktop",
        whenAbove = (650, @["flex"]),
        p = "p-[4vw]",
        extra_class = "hidden",
        head = "style='border-radius:10px; '") &

  # Mobile
  nw.col(
        nw.col(nft_img_mobile()&text_section_mobile(), bgColor = "#81162099",
            p = "p-4", gap = 4, head = "style='border-radius:10px; '"),
        name = "NFT Card mobile",
        whenAbove = (650, @["hidden"]),
        p = "p-[4vw]",
        head = "style='border-radius:10px; '")

proc comiczone(): string =
  nw.row("""<p class="text-5xl">Comic Zone </p>""", itemposh = "c",
      whenAbove = (650, @["hidden"])) &
  nw.row("""<p class="text-8xl">Comic Zone </p>""", itemposh = "c",
      extra_class = "hidden", whenAbove = (650, @["flex"]))

proc tell_ur_story(): string =
  nw.row("""<p class="text-2xl p-le">Tell Your Story...</p>""", itemposh = "c",
      whenAbove = (650, @["hidden"])) &
  nw.row("""<p class="text-4xl">Tell Your Story...</p>""", itemposh = "start",
      p = "pl-20", extra_class = "hidden", whenAbove = (650, @["flex"]))

proc page_header(): string =
  nw.col(comiczone()&tell_ur_story(), gap = 4)

proc purple_card(body: string, name = ""): string =
  nw.col(
    nw.row(body, itemposh = "c", itemposv = "c"),
    bgColor = "#816AFE99",
    p = "p-4",
    gap = 4,
    head = "style='border-radius:10px; '",
    name = name
  )

proc spinner(): string =
  fmt"""

  <div role="status" id="{$cgpt_spinner}">
      <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>
  
  """

proc ghost_writer_tab*(title: string): string =
  proc text(text: string): string = fmt"""<p class="text-slate-700">{text}</p>"""

  nw.col(
    text(title)&chevron_down("red", "25px"),
    bgColor = "#FFFFFF",
    p = "p-4",
    head = "style='border-radius:10px; '",
    itemposh = "c",
    itemposv = "c",
    gap = 4
  )

proc ghost_writer_tab_mobile*(title: string): string =
  proc text(text: string): string = fmt"""<p class="text-slate-700">{text}</p>"""

  nw.col(
    text(title)&chevron_down("red", "25px"),
    bgColor = "#FFFFFF",
    p = "p-3",
    head = "style='border-radius:10px; '",
    itemposh = "c",
    itemposv = "c",
    #gap=2,
    w = "full"
  )

proc ghost_writer_card(): string =
  purple_card(
    # Mobile
    nw.col(
      spinner(), #ghost_writer_tab_mobile("Gaia's Perspective")&ghost_writer_tab_mobile("Gaia's Perspective")&ghost_writer_tab_mobile("Gaia's Perspective"),
      gap = 4,
      name = "mobile",
      whenAbove = (650, @["hidden"]),
      w = "full",
      head = """" id='ghost-writer-row-mobile' x-data="{ activeTab: '' }" """

      ) &
    nw.row(
      ghost_writer_tab("Gaia's Perspective")&ghost_writer_tab(
          "Gaia's Perspective")&ghost_writer_tab("Gaia's Perspective"),
      gap = 4,
      name = "Desktop/tablet",
      whenAbove = (650, @["flex"]),
      extra_class = "hidden"


      ),
      name = "ghost writer card"
  )

proc ghost_writer_card(scenarios: seq[string]): string =
  let bg_color = "#816AFE99"
  fmt"""
    <!-- Ghost Writer Card --> 
    <div 
      class="bg-[{bg_color}] p-4 gap-4 w-full flex flex-col "
      style='border-radius:10px;'
      __xdata__
      >
      {scenarios.join("\n")}
    </div> 
    """.multiReplace(@[("__xdata__", """ x-data="{ activeTab: '' }" """)])

proc gen_scenario_btn(): string =
  fmt"""
  <button id="{$gen_first_scenario_btn}">
    Generate Scenario's with ChatGPT
  </button>
  """

proc scenario_section(purple_cards: string): string =
  fmt"""
  <div id="{$scenario_section}" class="flex flex-col gap-4">
  __purple_cards__
  </div>
  """.multiReplace(@[("__purple_cards__", purple_cards)])

proc gen_second_scenario_btn*(): string =
  fmt"""
  <button id="{$second_scenario_btn}" class="px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out">
    Generate 3 more scenarios with ChatGPT
  </button>
  """

proc spinner*(id: string): string =
  fmt"""

  <div role="status" id="{id}">
      <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>
  
  """

proc ghost_writer_tab*(
                        title: string,
                        content: string,
                        tab_name: string,
                        scenario_num: int,
                        id: string = ""
                      ): string =
  let xdd = na.xdd()
  proc text(text: string): string = fmt"""<p {xdd.btn} >{text}</p>"""
  proc Content(content: string): string = fmt"""<p{xdd.item_to_drop} >{content}</p>"""

  proc buildAlpineStuff(id: string): string =
    if id == "":
      fmt"""
      @click.prevent="activeTab = '{tab_name}'" 
      :class="activeTab === '{tab_name}' ? 'bg-[#816AFE] text-[white]' : ''" 
      :id="activeTab === '{tab_name}' ? 'selected-scenario-{scenario_num}' : ''" 
      """
    else:
      ""

  nw.col(
    text(title)&chevron_down("red", "25px")&Content(content),
    bgColor = if id == "": "#FFFFFF" else: "#816AFE",
    p = "p-3",
    head =
    fmt"""
        id = '{id}'
        {xdd.container} 
        style='border-radius:10px; cursor:pointer;' 
      """,
    itemposh = "c",
    itemposv = "c",
    w = "full",
    extra_class = if id == "": "text-slate-700" else: """text-[white] """

  )

proc ghost_writer_card*(scenarios: seq[string], id: string): string =
  let bg_color = "#816AFE99"
  fmt"""
    <!-- Ghost Writer Card --> 
    <div
        id    = "{id}" 
        class = "bg-[{bg_color}] p-4 gap-4 w-full flex flex-col "
        style = 'border-radius:10px;'
        __xdata__
    >
      {scenarios.join("\n")}
    </div> 
    """.multiReplace(@[("__xdata__", """ x-data="{ activeTab: '' }" """)])

proc ghost_writer_tab2*(
                          title: string,
                          content: string,
                          tab_name: string,
                          scenario_num: int,
                          idd: string = "",
                          left = false
                      ): string =
  proc get_item_pos(): string =
    if left:
      ""
    else:
      "items-center"

  proc put_in_p_tag(text: string): string = 
    let add_period = if text.endsWith("."): "" else: "."
    fmt"""<p> {text}{add_period} </p>"""

  proc format_content(content: string): string =
    content.split(". ").mapIt(it.put_in_p_tag).join("\n")
  
  fmt"""    
    <div 
      id     = "{idd}" 
      class  = "gap-4 flex flex-col justify-center {get_item_pos()} p-3 w-full 
                bg-white rounded-lg shadow-md cursor-pointer text-gray-700 hover:bg-purple-200 
                transition duration-300 ease-in-out" 
      
      x-data = "{{ showDropdown: false }}"
      @click = "showDropdown = !showDropdown" 
    >

      <div class="flex justify-between w-full items-center">
        <p class="font-semibold text-xl">{title}</p>
        <svg :class="{{'transform rotate-180': showDropdown}}" class="fill-current  transition-transform duration-300" width="25px" height="25px" viewBox="0 0 24 24">
          <path d="M12,17.414 3.293,8.707 4.707,7.293 12,14.586 19.293,7.293 20.707,8.707"></path>
        </svg>
      </div>

      
      <div x-show="showDropdown" class="p-4 text-md mt-2 flex flex-col gap-6" >{content.format_content()}</div>
    
    </div>
    """


template ppostNavCol*(incoming_class:string, body:untyped): VNode =
    buildHtml(tdiv(class=incoming_class)):
      body


proc generate_scenario_btn*(text:string, ec = "") : string = render:
  button:
    class ec & " px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"
    say   text


proc issue(nft_num:int) : string = render:
  let issue_num = case nft_num:
    of 0..6   : 1
    of 7..13  : 2
    of 14..20 : 3
    of 21..27 : 4
    of 28..34 : 5
    of 35..41 : 6
    of 42..48 : 7
    else: 0

  tdiv:
      class "bg-[#A83939aa] text-white rounded-lg p-4 flex flex-col gap-4"
      tdiv:
        class "flex items-center justify-between mb-3"
        h2: 
          class "text-lg font-semibold"
          say fmt"Issue {issue_num}"
        say consts.issues[issue_num-1].title
      for sentence in consts.issues[issue_num-1].body.split(".").mapIt(it.strip).filterIt(it != ""):
        p:
          say sentence & "."

proc nft_finished_notif : string = render :
    tdiv:
        class """text-xl flex flex-col gap-4 text-center cursor-pointer p-4 mb-4 text-sm text-green-800 rounded-lg 
        bg-green-50 dark:bg-gray-800 dark:text-green-400"""

        tdiv:
          say "Great Job!"

        tdiv:
          say "Your contribution to the story is in! "

        tdiv:
          say "Join the Community Chat Room"



################
## Routes     ##
################

when not defined(js):
  template catch_server_err(db_tx: untyped, err_msg: string, body: untyped)  : untyped =
      if not db_tx.ok:
          icr err_msg
          icr db_tx.err
          await ctx.respond(Http500, err_msg)
          body


  proc upsert_scenario_1(contrib : contribution) : tuple[ok:bool, err:string, doc_id:Option[int]] = 
      ContribDB().upsert(
          %contrib,
          (Where("wallet_addy") == %contrib.wallet_addy ) &
          (Where("nft_index")   == %contrib.nft_index   )
      )

  proc upsert_scenario_2 (contrib : contribution) : tuple[ok:bool, err:string, doc_id:Option[int]] = 
      ContribDB().upsert(
                          %*{
                              "scenario_2_complete": true,
                              "scenario_2": %contrib.scenario_2
                          },
                          (Where("wallet_addy") == %contrib.wallet_addy ) &
                          (Where("nft_index")   == %contrib.nft_index   )
                      )
  proc upsert_scenario_full(contrib : contribution) : tuple[ok:bool, err:string, doc_id:Option[int]] = 
      ContribDB().upsert(
                          %*{
                              "scenario_full_complete": true,
                              "scenario_full"         : %contrib.scenario_full
                          },
                          (Where("wallet_addy") == %contrib.wallet_addy ) &
                          (Where("nft_index")   == %contrib.nft_index   )
                      )
  
  proc upsert_scenario_full(nft_index : int, wallet_addy, scenario_full : string) : tuple[ok:bool, err:string, doc_id:Option[int]] = 
      ContribDB().upsert(
                          %*{
                              "scenario_full_complete": true,
                              "scenario_full"         : %scenario(title: fmt"Part {nft_index + 1}", body : scenario_full )
                          },
                          (Where("wallet_addy") == %wallet_addy ) &
                          (Where("nft_index")   == %nft_index   )
                      )

  template check_prev_contrib_complete(nft_num:int, body: untyped) : untyped = 
    let prev_contrib = ContribDB().get( contribution,
            (Where("nft_index") == %(nft_num - 1))
          )
    
    prev_contrib.catch_server_err("prev_contrib is not ok"):
      body
    
    if prev_contrib.val.isNone:
      icr "The contribution before this must be complete, before you can contribute to this one"
      
      let url = "/contribute"
      resp errFlash(url, consts.flash_token_name,
          "The contribution before this must be complete, before you can contribute to this one",
          consts.jwt_secret)
      
      body

    if not prev_contrib.val.get.item.scenario_full_complete:
      icr "Previous contribution was found, but not complete"
      
      let url = "/contribute"
      resp errFlash(url, consts.flash_token_name,
          "The contribution before this must be complete, before you can contribute to this one", consts.jwt_secret)
      
      body
    
  proc put_in_p_tag*(text: string): string = fmt"""<p> {text} </p>"""

  # proc cgpt_selection*(ctx: Context) {.async.} =

  #   case ctx.request.reqMethod:
  #     of HttpPost:
  #       case ctx.request.contentType:
  #         of "application/json":
  #           icb "cgpt_selection post flow"

  #           let msg = ctx.getPostMsg(comms.postMsg)
            
  #           icb msg

  #           case msg.kind:
  #               of cgpt_selection:
                    
  #                   icb msg.contrib
                    
  #                   if msg.contrib.scenario_1_complete:
  #                       ic msg.contrib.scenario_1
                        
  #                       let upsert_req = msg.contrib.upsert_scenario_1()
  #                       upsert_req.catch_server_err("Error upserting scenario 1"):
  #                         return
                        
  #                       await ctx.respond(Http200,"")
  #                       return
                    
  #                   if msg.contrib.scenario_2_complete:
                        
  #                       let upsert_req = msg.contrib.upsert_scenario_2()
  #                       upsert_req.catch_server_err("Error upserting scenario 2"):
  #                         return
                        
  #                       await ctx.respond(Http200,"")
  #                       return
                    
  #                   if msg.contrib.scenario_full_complete:
                        
  #                       let upsert_req = msg.contrib.upsert_scenario_full()
  #                       upsert_req.catch_server_err("Error upserting full scenario"):
  #                         return
                        
  #                       await ctx.respond(Http200,"")
  #                       return
                    
  #                   icr "No scenario complete flag was set", "We should never get here"
  #                   await ctx.respond(Http500, "Internal Server Error - Upsert Failed")
  #                   return

                    
  #               of prompt_cgpt: 
  #                   let prompt = msg.prompt.prompt
  #                   ic prompt
  #                   {.cast(gcsafe).}:
  #                       let resp = waitFor nimopenai.text_prompt(consts.open_ai_key, gpt_4.name, prompt)
                    
  #                   resp.catch_server_err("Internal Server Error - OpenAI Request Failed"):
  #                     return
                    
  #                   let cgpt_resp_msg = resp.val.get.getMsg
                    
  #                   ic cgpt_resp_msg
                    
  #                   await ctx.respond(Http200, cgpt_resp_msg)
  #         else:
  #           await ctx.respond(Http415, "Unsupported Media Type")
  #     else:discard

  template catch_db_err(db_tx: untyped, err_msg: string, body: untyped)  : untyped =
      if not db_tx.ok:
          icr err_msg
          icr db_tx.err
          await ctx.respond(Http500, err_msg)
          body

  proc cgpt_page*(ctx: Context) {.async.} =
      let wallet_addy                = ctx.getPathParams("wallet_addy")
      let nft_num                    = ctx.getPathParams("nft_num")
      let (chapter_num, section_num) = nft_num.parseInt.get_chap_sec_num() 
      
      icb wallet_addy ,
        nft_num      ,
        chapter_num  ,
        section_num  

      let this_contrib = ContribDB().get(
              contribution,
              (Where("wallet_addy") == %wallet_addy     ) &
              (Where("nft_index")   == %nft_num.parseInt)
            )
      this_contrib.catch_db_err("get_contrib is not ok"): 
          return
        
      onPost:
          ic "Incoming Post Request to cgpt_page"
          let msg = ctx.getPostMsg(comms.postMsg)
          
          icb msg

          case msg.kind:
              of err: discard
              # of get_prev_info: 
                


              #   let msg = SendPrevInfo(prev_info)
                
              #   resp jsonResponse %msg
              
              of set_contribution:                      
                  if msg.contrib.scenario_1_complete:
                      ic "Scenario 1 is complete"
                      
                      let upsert_req = msg.contrib.upsert_scenario_1()
                      upsert_req.catch_server_err("Error upserting scenario 1"):
                        return
                      
                      await ctx.respond(Http200,"")
                      return
                  
                  if msg.contrib.scenario_2_complete:
                      ic "Scenario 2 is complete"
                      
                      let upsert_req = msg.contrib.upsert_scenario_2()
                      upsert_req.catch_server_err("Error upserting scenario 2"):
                        return
                      
                      await ctx.respond(Http200,"")
                      return
                  
                  if msg.contrib.scenario_full_complete:
                      ic "Full Scenario is complete"
                      
                      let upsert_req = msg.contrib.upsert_scenario_full()
                      upsert_req.catch_server_err("Error upserting full scenario"):
                        return
                      
                      await ctx.respond(Http200,"")
                      return
                  
                  icr "No scenario complete flag was set", "We should never get here"
                  await ctx.respond(Http500, "Internal Server Error - Upsert Failed: No scenario complete flag was set")
                  return

                  
              of prompt_cgpt: 
                  ic "Incoming prompt_cgpt request"
                  ic msg.scenario_num
                  
                  let prev_story = ContribDB().get_prev_story()
                  
                  var 
                    scenario_1, scenario_2: scenario #= this_contrib.val.get.item.scenario_1
                  
                  if this_contrib.val.isSome:
                    scenario_1 = this_contrib.val.get.item.scenario_1
                    scenario_2 = this_contrib.val.get.item.scenario_2
                
                  icb prev_story, scenario_1, scenario_2

                  let prompt       = consts.buildPrompt(
                      chapter_num  = chapter_num                , 
                      section_num  = section_num                , 
                      scenario_num = msg.scenario_num           ,
                      
                      selection_1  = if scenario_1.title != "": scenario_1.title & " " & scenario_1.body else: "" ,
                      selection_2  = if scenario_2.title != "": scenario_2.title & " " & scenario_2.body else: "" ,
                      previously_generated_story = prev_story.val.get
                  )

                  if not prompt.ok:
                      icr prompt.err
                      resp jsonResponse %ServerErr("Prompt Generation Failed :" & prompt.err)
                                          
                  ic prompt.val.get
                    
                  icb "Sending prompt to OpenAI..."
                  {.cast(gcsafe).}:
                      let resp = waitFor nimopenai.text_prompt(consts.open_ai_key, gpt_4.name, prompt.val.get)
                  
                  if not resp.ok:
                      icr resp.err
                      resp jsonResponse %ServerErr("OpenAI Request Failed :" & resp.err)

                  ic "OpenAI Request Successful"

                  let cgpt_resp_msg = resp.val.get.getMsg                      
                  icb cgpt_resp_msg

                  if msg.scenario_num < 3:
          
                      let scenarios = cgpt_resp_msg.asObj(seq[comms.scenario])
                      if not scenarios.ok:
                          icr scenarios.err
                          resp jsonResponse %ServerErr("Error parsing OpenAI response: " & scenarios.err)
                      
                      ic "OpenAI Response Parsed Successfully"

                      resp jsonResponse %SendScenarios(scenarios.val.get)
                  
                  else:
                      let upsert_req = upsert_scenario_full(nft_num.parseInt, wallet_addy, cgpt_resp_msg)
                      if not upsert_req.ok:
                          icr upsert_req.err
                          resp jsonResponse %ServerErr("Error upserting full scenario: " & upsert_req.err)
                          return
                      
                      ic "Successfully upserted full scenario"

                      # Send the full story to the client
                      resp jsonResponse %SendScenarioFull(cgpt_resp_msg)
    
      onGet:

          # If we are working on any NFT other than the first one
          # Check if the previous contribution is complete
          # And if not, redirect the user BACK to the contribute page
          if nft_num.parseInt > 0:
            nft_num.parseInt.check_prev_contrib_complete: return

          let nft_path = fmt"/static/img/nfts/{chapter_num}.png"
          
          icb "cgpt set contriib flow", nft_path

          let get_contrib = ContribDB().get(
                  contribution,
                  (Where("wallet_addy") == %wallet_addy     ) &
                  (Where("nft_index")   == %nft_num.parseInt)
                )
          
          get_contrib.catch_db_err("get_contrib is not ok"): 
              return

          ic get_contrib

          let unfinished_notif = 
            buildHtml tdiv(class = "p-4 mb-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"):
              span(class = "font-medium"):
                vdom.text "Finish your story!"
              vdom.text " The rest of the story can't be compelete without you..."

          let status_notif =
            if get_contrib.val.isSome:
                  if get_contrib.val.get.item.scenario_full_complete:
                      nft_finished_notif().verbatim
                  else:
                      unfinished_notif
              else:
                unfinished_notif

          let body = ppostNavCol("container mx-auto p-4 text-white"):
            h1(class = "text-4xl font-bold mb-6"):
              vdom.text "COMIC ZONE"
            tdiv(class = "flex flex-wrap -mx-2 justify-center"):
              # Left Column
              tdiv(class = "w-full md:w-1/2 px-2 mb-4"):
                issue(nft_num.parseInt).verbatim

                tdiv(class = "mt-4"):
                  # Placeholder for NFT image
                  tdiv(class = "bg-gray-500 h-64 rounded-lg flex items-center justify-center"):
                    img(src = nft_path, alt = "NFT Image", class = "w-full h-full object-cover")


              # Right Column
              tdiv(class = "md:max-w-sm w-full md:w-1/2 px-2 mb-4"):
                tdiv(class = "bg-[#B2B2B5EE] ring-8 ring-black text-black rounded-lg p-4"):
                  h2(class = "text-4xl text-center font-semibold mb-2"):
                    vdom.text "Gaia"
                  p(class="text-xl"):
                    vdom.text "A mid-twenties woman"
                  ul(class = "text-lg flex flex-col gap-2  ml-4 mt-2"):
                    block:
                      let texts = @[
                        "Strong minded curious",
                        "confused",
                        "Determined",
                        "Broken Hearted",

                      ]
                      for text in texts:
                        li:
                          vdom.text text
                  # Add more traits here
                  tdiv(class = "mt-4"):
                    h3(class = "text-2xl font-semibold text-center text-[#8773F5]"):
                      vdom.text "The Unknown:"
                    ul(class = "text-lg list-disc ml-4 mt-2 flex flex-col gap-6"):
                      let texts = @[
                        "Why was Gaia chosen to save humanity?",
                        "Who are these people she encounters along the way?",
                        "Does she ever find peace in her mothers death?",
                        "Can humanity reunite with their ancestral history and thrive again",
                      ]
                      for text in texts:
                        li:
                          vdom.text text

              # Notify the user if their section is complete or not
              status_notif

              # Scenario Section
              tdiv(id = $scenario_section, class = "flex flex-col gap-4 w-full items-center"):
                # If Scenario 1 is not complete
                if get_contrib.val.isNone or get_contrib.val.get.item.scenario_1_complete == false:
                  # Ghost Writer Card 1
                  tdiv(id = $ghost_writer_card_1,
                      class = "md:max-w-4xl bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
                      x-data = "{ activeTab: '' }")#:
                    # button(id = fmt"{$gen_first_scenario_btn}",
                    #     class = "px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"):
                    #   vdom.text "Generate Scenario's with ChatGPT"
                
                else:
                  # If Scenario 1 is complete
                  if get_contrib.val.get.item.scenario_1_complete:
                    # Ghost Writer Card 2
                    tdiv(id = $ghost_writer_card_1,
                        class = "bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
                        x-data = "{ activeTab: '' }"):
                      # Build Ghost Writer Tab for Scenario 1
                      ghost_writer_tab2(
                        get_contrib.val.get.item.scenario_1.title,
                        get_contrib.val.get.item.scenario_1.body,
                        "scenario_1",
                        1,
                        $selected_scenario_1
                      ).verbatim
                      # if not get_contrib.val.get.item.scenario_2_complete:
                      #   button(id = fmt"{$second_scenario_btn}",
                      #       class = "px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"):
                      #     vdom.text "Generate 3 more scenarios with ChatGPT"

                  # If Scenario 2 is complete
                  if get_contrib.val.get.item.scenario_2_complete:
                    # Ghost Writer Card
                    tdiv(id = $ghost_writer_card_2,
                        class = "bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
                        x-data = "{ activeTab: '' }"):
                      # Build Ghost Writer Tab for Scenario 1
                      ghost_writer_tab2(
                        get_contrib.val.get.item.scenario_2.title,
                        get_contrib.val.get.item.scenario_2.body,
                        "scenario_2",
                        2,
                        $selected_scenario_2
                      ).verbatim
                      # if not get_contrib.val.get.item.scenario_full_complete:
                      #   button(id = fmt"{$cgpt_final_submit_btn}",
                      #       class = "px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"):
                      #     vdom.text "Send your final selections to our Story AI"

                  # If Final Scenario is complete
                  if get_contrib.val.get.item.scenario_full_complete:
                    # Ghost Writer Card
                    tdiv(id = $ghost_writer_card_3,
                        class = "bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
                        x-data = "{ activeTab: '' }"):
                      # Build Ghost Writer Tab for Scenario 1
                      ghost_writer_tab2(
                        get_contrib.val.get.item.scenario_full.title,
                        get_contrib.val.get.item.scenario_full.body.replace("\n\n",
                            "\n").split("\n").mapIt(it.put_in_p_tag).join("\n"),
                        "scenario_full",
                        3,
                        $selected_scenario_full,
                        left = true
                      ).verbatim

          let top_nav = top_nav_2()
          let bbody = render:
            bbase:
                say """
                    <script type="module" src="/static/js/cgpt_page_fe.js "></script>
                    """
                say "<!-- Top Nav -->"
                say top_nav
                say $body
          
          resp prologutils.htmlResponse bbody
      



      # case ctx.request.reqMethod:
        
      #     of HttpPost:
      #         ic "Incoming Post Request to cgpt_page"
      #         let msg = ctx.getPostMsg(comms.postMsg)
              
      #         icb msg

      #         case msg.kind:
      #             of err: discard
      #             # of get_prev_info: 
                    


      #             #   let msg = SendPrevInfo(prev_info)
                    
      #             #   resp jsonResponse %msg
                  
      #             of set_contribution:                      
      #                 if msg.contrib.scenario_1_complete:
      #                     ic "Scenario 1 is complete"
                          
      #                     let upsert_req = msg.contrib.upsert_scenario_1()
      #                     upsert_req.catch_server_err("Error upserting scenario 1"):
      #                       return
                          
      #                     await ctx.respond(Http200,"")
      #                     return
                      
      #                 if msg.contrib.scenario_2_complete:
      #                     ic "Scenario 2 is complete"
                          
      #                     let upsert_req = msg.contrib.upsert_scenario_2()
      #                     upsert_req.catch_server_err("Error upserting scenario 2"):
      #                       return
                          
      #                     await ctx.respond(Http200,"")
      #                     return
                      
      #                 if msg.contrib.scenario_full_complete:
      #                     ic "Full Scenario is complete"
                          
      #                     let upsert_req = msg.contrib.upsert_scenario_full()
      #                     upsert_req.catch_server_err("Error upserting full scenario"):
      #                       return
                          
      #                     await ctx.respond(Http200,"")
      #                     return
                      
      #                 icr "No scenario complete flag was set", "We should never get here"
      #                 await ctx.respond(Http500, "Internal Server Error - Upsert Failed: No scenario complete flag was set")
      #                 return

                      
      #             of prompt_cgpt: 
      #                 ic "Incoming prompt_cgpt request"
      #                 ic msg.scenario_num
                      
      #                 let prev_story = ContribDB().get_prev_story()
                      
      #                 var 
      #                   scenario_1, scenario_2: scenario #= this_contrib.val.get.item.scenario_1
                      
      #                 if this_contrib.val.isSome:
      #                   scenario_1 = this_contrib.val.get.item.scenario_1
      #                   scenario_2 = this_contrib.val.get.item.scenario_2
                    
      #                 icb prev_story, scenario_1, scenario_2

      #                 let prompt       = consts.buildPrompt(
      #                     chapter_num  = chapter_num                , 
      #                     section_num  = section_num                , 
      #                     scenario_num = msg.scenario_num           ,
                          
      #                     selection_1  = if scenario_1.title != "": scenario_1.title & " " & scenario_1.body else: "" ,
      #                     selection_2  = if scenario_2.title != "": scenario_2.title & " " & scenario_2.body else: "" ,
      #                     previously_generated_story = prev_story.val.get
      #                 )

      #                 if not prompt.ok:
      #                     icr prompt.err
      #                     resp jsonResponse %ServerErr("Prompt Generation Failed :" & prompt.err)
                                              
      #                 ic prompt.val.get
                        
      #                 icb "Sending prompt to OpenAI..."
      #                 {.cast(gcsafe).}:
      #                     let resp = waitFor nimopenai.text_prompt(consts.open_ai_key, gpt_4.name, prompt.val.get)
                      
      #                 if not resp.ok:
      #                     icr resp.err
      #                     resp jsonResponse %ServerErr("OpenAI Request Failed :" & resp.err)

      #                 ic "OpenAI Request Successful"

      #                 let cgpt_resp_msg = resp.val.get.getMsg                      
      #                 icb cgpt_resp_msg

      #                 if msg.scenario_num < 3:
              
      #                     let scenarios = cgpt_resp_msg.asObj(seq[comms.scenario])
      #                     if not scenarios.ok:
      #                         icr scenarios.err
      #                         resp jsonResponse %ServerErr("Error parsing OpenAI response: " & scenarios.err)
                          
      #                     ic "OpenAI Response Parsed Successfully"

      #                     resp jsonResponse %SendScenarios(scenarios.val.get)
                      
      #                 else:
      #                     let upsert_req = upsert_scenario_full(nft_num.parseInt, wallet_addy, cgpt_resp_msg)
      #                     if not upsert_req.ok:
      #                         icr upsert_req.err
      #                         resp jsonResponse %ServerErr("Error upserting full scenario: " & upsert_req.err)
      #                         return
                          
      #                     ic "Successfully upserted full scenario"

      #                     # Send the full story to the client
      #                     resp jsonResponse %SendScenarioFull(cgpt_resp_msg)
        
      #     of HttpGet:

      #         # If we are working on any NFT other than the first one
      #         # Check if the previous contribution is complete
      #         # And if not, redirect the user BACK to the contribute page
      #         if nft_num.parseInt > 0:
      #           nft_num.parseInt.check_prev_contrib_complete: return

      #         let nft_path = fmt"/static/img/nfts/{chapter_num}.png"
              
      #         icb "cgpt set contriib flow", nft_path

      #         let get_contrib = ContribDB().get(
      #                 contribution,
      #                 (Where("wallet_addy") == %wallet_addy     ) &
      #                 (Where("nft_index")   == %nft_num.parseInt)
      #               )
              
      #         get_contrib.catch_db_err("get_contrib is not ok"): 
      #             return

      #         ic get_contrib




      #         let unfinished_notif = 
      #           buildHtml tdiv(class = "p-4 mb-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"):
      #             span(class = "font-medium"):
      #               vdom.text "Finish your story!"
      #             vdom.text " The rest of the story can't be compelete without you..."

      #         let status_notif =
      #           if get_contrib.val.isSome:
      #                 if get_contrib.val.get.item.scenario_full_complete:
      #                     nft_finished_notif().verbatim
      #                 else:
      #                     unfinished_notif
      #             else:
      #               unfinished_notif

      #         let body = ppostNavCol("container mx-auto p-4 text-white"):
      #           h1(class = "text-4xl font-bold mb-6"):
      #             vdom.text "COMIC ZONE"
      #           tdiv(class = "flex flex-wrap -mx-2 justify-center"):
      #             # Left Column
      #             tdiv(class = "w-full md:w-1/2 px-2 mb-4"):
      #               issue(nft_num.parseInt).verbatim

      #               tdiv(class = "mt-4"):
      #                 # Placeholder for NFT image
      #                 tdiv(class = "bg-gray-500 h-64 rounded-lg flex items-center justify-center"):
      #                   img(src = nft_path, alt = "NFT Image", class = "w-full h-full object-cover")


      #             # Right Column
      #             tdiv(class = "md:max-w-sm w-full md:w-1/2 px-2 mb-4"):
      #               tdiv(class = "bg-[#B2B2B5EE] ring-8 ring-black text-black rounded-lg p-4"):
      #                 h2(class = "text-4xl text-center font-semibold mb-2"):
      #                   vdom.text "Gaia"
      #                 p(class="text-xl"):
      #                   vdom.text "A mid-twenties woman"
      #                 ul(class = "text-lg flex flex-col gap-2  ml-4 mt-2"):
      #                   block:
      #                     let texts = @[
      #                       "Strong minded curious",
      #                       "confused",
      #                       "Determined",
      #                       "Broken Hearted",

      #                     ]
      #                     for text in texts:
      #                       li:
      #                         vdom.text text
      #                 # Add more traits here
      #                 tdiv(class = "mt-4"):
      #                   h3(class = "text-2xl font-semibold text-center text-[#8773F5]"):
      #                     vdom.text "The Unknown:"
      #                   ul(class = "text-lg list-disc ml-4 mt-2 flex flex-col gap-6"):
      #                     let texts = @[
      #                       "Why was Gaia chosen to save humanity?",
      #                       "Who are these people she encounters along the way?",
      #                       "Does she ever find peace in her mothers death?",
      #                       "Can humanity reunite with their ancestral history and thrive again",
      #                     ]
      #                     for text in texts:
      #                       li:
      #                         vdom.text text

      #             # Notify the user if their section is complete or not
      #             status_notif

      #             # Scenario Section
      #             tdiv(id = $scenario_section, class = "flex flex-col gap-4 w-full items-center"):
      #               # If Scenario 1 is not complete
      #               if get_contrib.val.isNone or get_contrib.val.get.item.scenario_1_complete == false:
      #                 # Ghost Writer Card 1
      #                 tdiv(id = $ghost_writer_card_1,
      #                     class = "md:max-w-4xl bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
      #                     x-data = "{ activeTab: '' }")#:
      #                   # button(id = fmt"{$gen_first_scenario_btn}",
      #                   #     class = "px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"):
      #                   #   vdom.text "Generate Scenario's with ChatGPT"
                    
      #               else:
      #                 # If Scenario 1 is complete
      #                 if get_contrib.val.get.item.scenario_1_complete:
      #                   # Ghost Writer Card 2
      #                   tdiv(id = $ghost_writer_card_1,
      #                       class = "bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
      #                       x-data = "{ activeTab: '' }"):
      #                     # Build Ghost Writer Tab for Scenario 1
      #                     ghost_writer_tab2(
      #                       get_contrib.val.get.item.scenario_1.title,
      #                       get_contrib.val.get.item.scenario_1.body,
      #                       "scenario_1",
      #                       1,
      #                       $selected_scenario_1
      #                     ).verbatim
      #                     # if not get_contrib.val.get.item.scenario_2_complete:
      #                     #   button(id = fmt"{$second_scenario_btn}",
      #                     #       class = "px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"):
      #                     #     vdom.text "Generate 3 more scenarios with ChatGPT"

      #                 # If Scenario 2 is complete
      #                 if get_contrib.val.get.item.scenario_2_complete:
      #                   # Ghost Writer Card
      #                   tdiv(id = $ghost_writer_card_2,
      #                       class = "bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
      #                       x-data = "{ activeTab: '' }"):
      #                     # Build Ghost Writer Tab for Scenario 1
      #                     ghost_writer_tab2(
      #                       get_contrib.val.get.item.scenario_2.title,
      #                       get_contrib.val.get.item.scenario_2.body,
      #                       "scenario_2",
      #                       2,
      #                       $selected_scenario_2
      #                     ).verbatim
      #                     # if not get_contrib.val.get.item.scenario_full_complete:
      #                     #   button(id = fmt"{$cgpt_final_submit_btn}",
      #                     #       class = "px-4 py-2 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"):
      #                     #     vdom.text "Send your final selections to our Story AI"

      #                 # If Final Scenario is complete
      #                 if get_contrib.val.get.item.scenario_full_complete:
      #                   # Ghost Writer Card
      #                   tdiv(id = $ghost_writer_card_3,
      #                       class = "bg-[#816AFE99] p-4 gap-4 w-full flex flex-col rounded-[10px]",
      #                       x-data = "{ activeTab: '' }"):
      #                     # Build Ghost Writer Tab for Scenario 1
      #                     ghost_writer_tab2(
      #                       get_contrib.val.get.item.scenario_full.title,
      #                       get_contrib.val.get.item.scenario_full.body.replace("\n\n",
      #                           "\n").split("\n").mapIt(it.put_in_p_tag).join("\n"),
      #                       "scenario_full",
      #                       3,
      #                       $selected_scenario_full,
      #                       left = true
      #                     ).verbatim

      #         let top_nav = top_nav_2()
      #         let bbody = render:
      #           bbase:
      #               say """
      #                   <script type="module" src="/static/js/cgpt_page_fe.js "></script>
      #                   """
      #               say "<!-- Top Nav -->"
      #               say top_nav
      #               say $body
              
      #         resp prologutils.htmlResponse bbody
          
      #     else: discard




  ####################
  ## Route Handlers ##
  ####################

  let cgpt_route*           = pattern("/chat/{wallet_addy}/{nft_num}" , cgpt_page      , @[Httpget, HttpPost] )
  #let cgpt_selection_route* = pattern("/chat/selection"               , cgpt_selection , @[ HttpPost] )
