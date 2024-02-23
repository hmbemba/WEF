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


let current_url = window.location.href
# http://localhost:7778/chat/0xF6427...52/0
let url_parts   = current_url.split("/")
let wallet_addy = url_parts[^2]
let nft_index   = url_parts[^1]
ic "The wallet_addy is " & $wallet_addy
ic "The nft_index is "   & $nft_index



proc buildPrompt1():cstring = """
    You are story telling AI
    Here is the premise of a story I want to tell

    In a future where technology has turned against humanity, plunging society into chaos, a young woman named Gaia embarks on a transformative journey that blends the mysticism of nature with the remnants of advanced technology. The story follows Gaia as she discovers a hidden power long forgotten by her people.

    Set in a world where civilization has regressed to a simpler, country-style existence, yet still relies on remnants of advanced technology, Gaia struggles to find her place. Tragically, her mother's unexpected death leaves her feeling lost and desperate, yearning for an escape from her pain. In an impulsive act, she ventures into the wilderness, hoping to find solace and perhaps even join her mother in death.

    As Gaia aimlessly wanders through the vast woods, the weight of her grief becomes almost unbearable. Exhausted and on the brink of despair, she seeks refuge beneath a majestic tree perched on the edge of a towering cliff overlooking the endless ocean. There, amidst her tears, she catches a glimpse of something extraordinary—a plant she recognizes from her storybooks, believed to be deadly poisonous. Its radiant red petals adorned with enchanting white circles atop a bulbous stalk captivate her in a moment of profound desperation.

    Driven by a deep longing to reconnect with her mother's memory and with nothing left to lose, Gaia consumes the forbidden plant. Anticipating her impending demise, she stares out at the horizon, bracing herself for what she believes will be her final moments. However, instead of death's cold embrace, Gaia experiences a remarkable transformation. The world around her erupts in an explosion of vibrant colors, her senses heightened to an unimaginable degree. As her heart races with newfound intensity, she questions whether this is death or something altogether unexpected.

    Now blessed with heightened perception and a mysterious connection to the psychedelic plant's power, Gaia embarks on a quest to uncover the truth behind this lost knowledge and rediscover her purpose. Along the way, she encounters a diverse cast of characters—an eclectic group of individuals with their own unique talents, scars, and aspirations. Together, they navigate a treacherous landscape, where advanced technology clashes with the raw forces of nature and humanity teeters on the edge of oblivion.

    "WIDE FEELS" is an enthralling comic book series that combines elements of dystopian sci-fi, mystical exploration, and the power of personal transformation. As Gaia unravels the secrets of the psychedelic plant medicine, she discovers not only her own inner strength but also the potential for humanity's redemption in a world that has turned its back on its own creations.

    Here is the over arching conflict of the story
    As Gaia discovers her newfound ability to perceive the world in extraordinary ways through the consumption of the psychedelic plant, she becomes aware of the profound healing potential it possesses. However, the society she inhabits has long forgotten this knowledge, gripped by despair and the fear of their impending extinction. With the global population reduced to a mere 3 billion and dwindling rapidly, hope is a scarce commodity.

    As Gaia delves deeper into her exploration of the plant's powers, she realizes that its healing properties could hold the key to revitalizing humanity and restoring their lost connection to nature. The conflict arises as she faces the daunting task of reawakening this forgotten knowledge within her society. She must confront the prevailing skepticism, fear, and resistance that permeate the hearts and minds of those around her.

    The desperate remnants of humanity, clinging to their country-style existence amid the remnants of advanced technology, view the plant with suspicion and ignorance. Powerful factions, driven by a desire to maintain control and order in a chaotic world, seek to suppress any potential threats to their dominance, including the rediscovery of the plant's medicinal abilities.

    Gaia finds herself torn between her newfound purpose and the overwhelming opposition she encounters. She must navigate treacherous alliances, evade capture, and gather a group of like-minded individuals who share her vision of healing and restoration. Together, they form an underground movement, working in secrecy to protect the plant's knowledge and bring hope back to their desolate world.

    The conflict intensifies as Gaia and her allies face off against formidable adversaries, including those who seek to exploit the plant's power for their own selfish gain. They must overcome their own doubts and limitations while staying one step ahead of those who would silence them. Along the way, they uncover the dark secrets behind the loss of knowledge and the true origins of the technology that turned against humanity.

    Through their daring actions and unwavering determination, Gaia and her companions become beacons of hope in a world gripped by despair. Their quest to restore the healing powers of the psychedelic plant medicine becomes a race against time, as they strive to revitalize a dying world and awaken the dormant potential within humanity.

    In this conflict-ridden landscape, where the forces of oppression and ignorance collide with the resilience and courage of a small group, "WIDE FEELS" explores themes of redemption, self-discovery, and the transformative power of reconnecting with nature. It is a tale of hope, resistance, and the triumph of the human spirit in the face of seemingly insurmountable odds

    Using this issue create THREE different scenarios for chapter 1.1.
    Make sure to return excatly three scenarios

    Issue 1: "Awakening"
    The story begins with Gaia mourning the loss of her mother, feeling lost and desperate. She runs away into the woods, seeking solace but ends up getting lost.
    Exhausted and emotionally drained, she finds herself near a cliff overlooking the ocean. Resting under a large tree, she notices a beautiful but supposedly poisonous plant. Driven by despair and longing for her mother, she consumes it, expecting death.
    To her surprise, instead of dying,Gaia experiences a vivid awakening. Colors intensify, and her senses become heightened, leading her to question whether this is death or something entirely different.

    format your response as a json array repsonse that looks like this

    [
      {
        "title": "...",
        "body": ".."
      },
      {
        "title": "...",
        "body": ".."
      },
      {
        "title": "...",
        "body": ".."
      }

    ]
"""
proc buildPrompt2(selection:cstring): cstring = 
  """
  You are story telling AI
  Here is the premise of a story I want to tell

  In a future where technology has turned against humanity, plunging society into chaos, a young woman named Gaia embarks on a transformative journey that blends the mysticism of nature with the remnants of advanced technology. The story follows Gaia as she discovers a hidden power long forgotten by her people.

  Set in a world where civilization has regressed to a simpler, country-style existence, yet still relies on remnants of advanced technology, Gaia struggles to find her place. Tragically, her mother's unexpected death leaves her feeling lost and desperate, yearning for an escape from her pain. In an impulsive act, she ventures into the wilderness, hoping to find solace and perhaps even join her mother in death.

  As Gaia aimlessly wanders through the vast woods, the weight of her grief becomes almost unbearable. Exhausted and on the brink of despair, she seeks refuge beneath a majestic tree perched on the edge of a towering cliff overlooking the endless ocean. There, amidst her tears, she catches a glimpse of something extraordinary—a plant she recognizes from her storybooks, believed to be deadly poisonous. Its radiant red petals adorned with enchanting white circles atop a bulbous stalk captivate her in a moment of profound desperation.

  Driven by a deep longing to reconnect with her mother's memory and with nothing left to lose, Gaia consumes the forbidden plant. Anticipating her impending demise, she stares out at the horizon, bracing herself for what she believes will be her final moments. However, instead of death's cold embrace, Gaia experiences a remarkable transformation. The world around her erupts in an explosion of vibrant colors, her senses heightened to an unimaginable degree. As her heart races with newfound intensity, she questions whether this is death or something altogether unexpected.

  Now blessed with heightened perception and a mysterious connection to the psychedelic plant's power, Gaia embarks on a quest to uncover the truth behind this lost knowledge and rediscover her purpose. Along the way, she encounters a diverse cast of characters—an eclectic group of individuals with their own unique talents, scars, and aspirations. Together, they navigate a treacherous landscape, where advanced technology clashes with the raw forces of nature and humanity teeters on the edge of oblivion.

  "WIDE FEELS" is an enthralling comic book series that combines elements of dystopian sci-fi, mystical exploration, and the power of personal transformation. As Gaia unravels the secrets of the psychedelic plant medicine, she discovers not only her own inner strength but also the potential for humanity's redemption in a world that has turned its back on its own creations.

  Here is the over arching conflict of the story
  As Gaia discovers her newfound ability to perceive the world in extraordinary ways through the consumption of the psychedelic plant, she becomes aware of the profound healing potential it possesses. However, the society she inhabits has long forgotten this knowledge, gripped by despair and the fear of their impending extinction. With the global population reduced to a mere 3 billion and dwindling rapidly, hope is a scarce commodity.

  As Gaia delves deeper into her exploration of the plant's powers, she realizes that its healing properties could hold the key to revitalizing humanity and restoring their lost connection to nature. The conflict arises as she faces the daunting task of reawakening this forgotten knowledge within her society. She must confront the prevailing skepticism, fear, and resistance that permeate the hearts and minds of those around her.

  The desperate remnants of humanity, clinging to their country-style existence amid the remnants of advanced technology, view the plant with suspicion and ignorance. Powerful factions, driven by a desire to maintain control and order in a chaotic world, seek to suppress any potential threats to their dominance, including the rediscovery of the plant's medicinal abilities.

  Gaia finds herself torn between her newfound purpose and the overwhelming opposition she encounters. She must navigate treacherous alliances, evade capture, and gather a group of like-minded individuals who share her vision of healing and restoration. Together, they form an underground movement, working in secrecy to protect the plant's knowledge and bring hope back to their desolate world.

  The conflict intensifies as Gaia and her allies face off against formidable adversaries, including those who seek to exploit the plant's power for their own selfish gain. They must overcome their own doubts and limitations while staying one step ahead of those who would silence them. Along the way, they uncover the dark secrets behind the loss of knowledge and the true origins of the technology that turned against humanity.

  Through their daring actions and unwavering determination, Gaia and her companions become beacons of hope in a world gripped by despair. Their quest to restore the healing powers of the psychedelic plant medicine becomes a race against time, as they strive to revitalize a dying world and awaken the dormant potential within humanity.

  In this conflict-ridden landscape, where the forces of oppression and ignorance collide with the resilience and courage of a small group, "WIDE FEELS" explores themes of redemption, self-discovery, and the transformative power of reconnecting with nature. It is a tale of hope, resistance, and the triumph of the human spirit in the face of seemingly insurmountable odds

  This is the first scenario the user has chosen

  __user_selection__
  
  create THREE different scenarios for chapter 1.1 for the user to choose from
  make sure the scenarios you generate are based off of the premise and previous scenario
  Make sure to return excatly three scenarios

  format your response as a json array repsonse that looks like this

  [
    {
      "title": "hehe",
      "body": ".."
    },
    {
      "title": "...",
      "body": ".."
    },
    {
      "title": "...",
      "body": ".."
    }

  ]
  """.multiReplace(@[
    ("__user_selection__", $selection)
  ])

proc buildPrompt3(selection_1:scenario, selection_2:scenario): cstring = 
  """
  You are story telling AI
  Here is the premise of a story I want to tell

  In a future where technology has turned against humanity, plunging society into chaos, a young woman named Gaia embarks on a transformative journey that blends the mysticism of nature with the remnants of advanced technology. The story follows Gaia as she discovers a hidden power long forgotten by her people.

  Set in a world where civilization has regressed to a simpler, country-style existence, yet still relies on remnants of advanced technology, Gaia struggles to find her place. Tragically, her mother's unexpected death leaves her feeling lost and desperate, yearning for an escape from her pain. In an impulsive act, she ventures into the wilderness, hoping to find solace and perhaps even join her mother in death.

  As Gaia aimlessly wanders through the vast woods, the weight of her grief becomes almost unbearable. Exhausted and on the brink of despair, she seeks refuge beneath a majestic tree perched on the edge of a towering cliff overlooking the endless ocean. There, amidst her tears, she catches a glimpse of something extraordinary—a plant she recognizes from her storybooks, believed to be deadly poisonous. Its radiant red petals adorned with enchanting white circles atop a bulbous stalk captivate her in a moment of profound desperation.

  Driven by a deep longing to reconnect with her mother's memory and with nothing left to lose, Gaia consumes the forbidden plant. Anticipating her impending demise, she stares out at the horizon, bracing herself for what she believes will be her final moments. However, instead of death's cold embrace, Gaia experiences a remarkable transformation. The world around her erupts in an explosion of vibrant colors, her senses heightened to an unimaginable degree. As her heart races with newfound intensity, she questions whether this is death or something altogether unexpected.

  Now blessed with heightened perception and a mysterious connection to the psychedelic plant's power, Gaia embarks on a quest to uncover the truth behind this lost knowledge and rediscover her purpose. Along the way, she encounters a diverse cast of characters—an eclectic group of individuals with their own unique talents, scars, and aspirations. Together, they navigate a treacherous landscape, where advanced technology clashes with the raw forces of nature and humanity teeters on the edge of oblivion.

  "WIDE FEELS" is an enthralling comic book series that combines elements of dystopian sci-fi, mystical exploration, and the power of personal transformation. As Gaia unravels the secrets of the psychedelic plant medicine, she discovers not only her own inner strength but also the potential for humanity's redemption in a world that has turned its back on its own creations.

  Here is the over arching conflict of the story
  As Gaia discovers her newfound ability to perceive the world in extraordinary ways through the consumption of the psychedelic plant, she becomes aware of the profound healing potential it possesses. However, the society she inhabits has long forgotten this knowledge, gripped by despair and the fear of their impending extinction. With the global population reduced to a mere 3 billion and dwindling rapidly, hope is a scarce commodity.

  As Gaia delves deeper into her exploration of the plant's powers, she realizes that its healing properties could hold the key to revitalizing humanity and restoring their lost connection to nature. The conflict arises as she faces the daunting task of reawakening this forgotten knowledge within her society. She must confront the prevailing skepticism, fear, and resistance that permeate the hearts and minds of those around her.

  The desperate remnants of humanity, clinging to their country-style existence amid the remnants of advanced technology, view the plant with suspicion and ignorance. Powerful factions, driven by a desire to maintain control and order in a chaotic world, seek to suppress any potential threats to their dominance, including the rediscovery of the plant's medicinal abilities.

  Gaia finds herself torn between her newfound purpose and the overwhelming opposition she encounters. She must navigate treacherous alliances, evade capture, and gather a group of like-minded individuals who share her vision of healing and restoration. Together, they form an underground movement, working in secrecy to protect the plant's knowledge and bring hope back to their desolate world.

  The conflict intensifies as Gaia and her allies face off against formidable adversaries, including those who seek to exploit the plant's power for their own selfish gain. They must overcome their own doubts and limitations while staying one step ahead of those who would silence them. Along the way, they uncover the dark secrets behind the loss of knowledge and the true origins of the technology that turned against humanity.

  Through their daring actions and unwavering determination, Gaia and her companions become beacons of hope in a world gripped by despair. Their quest to restore the healing powers of the psychedelic plant medicine becomes a race against time, as they strive to revitalize a dying world and awaken the dormant potential within humanity.

  In this conflict-ridden landscape, where the forces of oppression and ignorance collide with the resilience and courage of a small group, "WIDE FEELS" explores themes of redemption, self-discovery, and the transformative power of reconnecting with nature. It is a tale of hope, resistance, and the triumph of the human spirit in the face of seemingly insurmountable odds

  The user has chosen two scenarios (below) to create the first part of a multipart story.
  using the 2 scenarios below and the premise write the first part of this story.
  Your answer should be 300-350 words in the form of comic book style text complete with dialog

  s1

  s2
  """.multiReplace(@[
    ("s1", $selection_1.title & "\n" & $selection_1.body),
    ("s2", $selection_2.title & "\n" & $selection_2.body)
  ])

proc prompt_cgpt(api_key, prompt: cstring): Future[jsfetch.Response] {. async importjs: 
    """
      fetch(
              "https://api.openai.com/v1/chat/completions", 
              {
                  method: 'POST',
                  headers: {
                      'Accept'        : 'application/json',
                      'Content-Type'  : 'application/json',
                      'Authorization' : # 
                  },
                  body: JSON.stringify(
                                      {
                                          "model": "gpt-3.5-turbo-16k",
                                          "temperature": 0.2,
                                          "messages": [{"role": "user", "content": #}],
                                      }
                                  )
              }
          )
    """
    .} 

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

proc upsert_to_db(c:contribution | JsonNode): Future[Response] {.async.} = 
    post(
        url  = "/chat/selection",
        body = %c,
        incoming_headers = @[("Content-Type", "application/json")]
    )

proc add_ghost_writer_tab_selected_functionality(
                                                    tab    : Element , 
                                                    id     : string
                                                  ) =
  tab.click( 
    proc (e: Event) =
      let parent = tab.parentElement
      
      for kid in parent.querySelectorAll("div"):
        kid.style.backgroundColor = ""
        kid.style.color           = "slategray"
        kid.id  = ""
        kid.queryAll("p").get()[0].style.color = "slategray"
        
      tab.style.backgroundColor = "#816AFE"
      tab.style.color           = "white"
      tab.id = id
      tab.queryAll("p").get()[0].style.color = "white"
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
    let body  = selected_scenario.querySelector("p:last-child" ).innerHTML
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
    let resp_text = await cgpt_resp.get_response_text()
    ic resp_text
    let resp_text_string         = $resp_text
    return resp_text_string.fromJson(seq[scenario])


proc build_final_prompt : cstring = 
    let scenario_1 = scenario(title: $selected_scenario_1.el_strict.querySelector("p:first-child").innerHTML, body: $selected_scenario_1.el_strict.querySelector("p:last-child").innerHTML)
    let scenario_2 = scenario(title: $selected_scenario_2.el_strict.querySelector("p:first-child").innerHTML, body: $selected_scenario_2.el_strict.querySelector("p:last-child").innerHTML)
    return buildPrompt3(scenario_1, scenario_2)

proc final_scenario_btn_click(e: Event) {.async.} =
    ic "Final Scenario Button Clicked"
    ghost_writer_card_2.el_strict.show_err_if_no_selected_scenario(selected_scenario_2.el)
    ghost_writer_card_2.el_strict.hide_unselected_options($selected_scenario_2)

    let 
      (selected_scenario_title, selected_scenario_body) = selected_scenario_2.el_strict.to_text()

    let upsert_req = await upsert_to_db(%*{
      "wallet_addy"          : $wallet_addy,
      "scenario_2"           : %scenario(title: $selected_scenario_title, body: $selected_scenario_body),
      "nft_index"            : %(nft_index.toInt),
      "scenario_2_complete"  : true,
      })
    
    let prompt_3 = build_final_prompt()
    ic prompt_3
    
    scenario_section.el_strict.addElement(ghost_writer_card(@[], $ghost_writer_card_3))
    let ghost_writer_card_3   = ghost_writer_card_3.el_strict

    let cgpt_final_submit_btn = 
      ghost_writer_card_2.el_strict.query_strict(".final_scenario_btn")
    
    waitForCGPT(cgpt_final_submit_btn, ghost_writer_card_3):
      let cgpt_resp_3 = await prompt_cgpt("Bearer " & consts.open_ai_key, prompt_3)
    
    cgpt_resp_3.catch_err(ghost_writer_card_3)
    
    let resp_text_3                = await cgpt_resp_3.get_response_text()
    let resp_3_text_string         = $resp_text_3

    ghost_writer_card_3
      .addElement(ghost_writer_tab2("Final Playwright", resp_3_text_string, "final_playwright", 3 ))

    block:
      let upsert_req = await upsert_to_db(%*{
        "wallet_addy"             : $wallet_addy,
        "scenario_full"           : %scenario(title: "Final Playwright", body: resp_3_text_string),
        "nft_index"               : %(nft_index.toInt),
        "scenario_full_complete"  : true,
        })

proc second_scenario_btn_click(e: Event) {.async.} =
    ic "Second Scenario Button Clicked"
    
    ghost_writer_card_1.el_strict.show_err_if_no_selected_scenario(selected_scenario_1.el)    
    ghost_writer_card_1.el_strict.hide_unselected_options($selected_scenario_1)
    

    let 
      (first_selected_scenario_title, first_selected_scenario_body) = selected_scenario_1.el_strict.to_text()
    

    let upsert_req = 
        await contribution(
            wallet_addy          : $wallet_addy,
            scenario_1           : scenario(title: $first_selected_scenario_title, body: $first_selected_scenario_body),
            nft_index            : nft_index.toInt,
            scenario_1_complete  : true
          ).upsert_to_db 
      
    if not upsert_req.ok:
        icr "something bad happend"
        return
    let prompt_2 = buildPrompt2(
                $first_selected_scenario_title & "\n" & 
                $first_selected_scenario_body
                )

    ic prompt_2

    
    scenario_section.el_strict.addElement(ghost_writer_card(@[], $ghost_writer_card_2))
    let ghost_writer_card_2 = ghost_writer_card_2.el_strict

    # This will be delted when the user clicks it
    let gen_second_scenario_btn = 
      ghost_writer_card_1.el_strict.query_strict(".gen_second_scenario_btn")
    
    waitForCGPT(gen_second_scenario_btn, ghost_writer_card_2):
      let cgpt_resp_2         = await prompt_cgpt("Bearer " & consts.open_ai_key, prompt_2)
    
    cgpt_resp_2.catch_err(ghost_writer_card_2)

    let scenarios: seq[scenario] = await cgpt_resp_2.get_scenarios()

    ghost_writer_card_2.populate_scenarios(scenarios, $selected_scenario_2)

    let final_scenario_btn: Element = 
      ghost_writer_card_2.addElementGet(generate_scenario_btn("Send your final selections to our Story AI", "final_scenario_btn"))           
    
    final_scenario_btn.click final_scenario_btn_click 

proc first_scenario_btn_click(e: Event) {.async.} =
    ic "First Scenario Button Clicked"
    
    let gen_first_scenario_btn = 
      ghost_writer_card_1.el_strict.query_strict(".gen_first_scenario_btn")

    waitForCGPT(gen_first_scenario_btn, ghost_writer_card_1.el_strict):
      let cgpt_resp = await prompt_cgpt("Bearer " & consts.open_ai_key, buildPrompt1())

    cgpt_resp.catch_err(ghost_writer_card_1.el_strict)

    let scenarios: seq[scenario] = await cgpt_resp.get_scenarios()

    ghost_writer_card_1.el_strict.populate_scenarios(scenarios, $selected_scenario_1)


    let second_scenario_btn = 
      ghost_writer_card_1.el_strict.
        addElementGet(generate_scenario_btn("Generate 3 More Scenarios with ChatGPT", "gen_second_scenario_btn"))           
    second_scenario_btn.click( second_scenario_btn_click)


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
    ghost_writer_card_1.el_strict.addElement(generate_scenario_btn("Generate Scenario's with ChatGPT", "gen_first_scenario_btn"))
    let gen_first_scenario_btn = ghost_writer_card_1.el_strict.query_strict(".gen_first_scenario_btn")
    gen_first_scenario_btn.click first_scenario_btn_click