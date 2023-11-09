import mynimlib/nimjs
import std/jsfetch
import std/[asyncjs, jsconsole, jsformdata, jsheaders]
import strutils, strformat, tables, sequtils
import dom
import consts
import std/enumerate
import jsony
from std/httpcore import HttpMethod
from std/jsffi import JsObject
from std/sugar import `=>`
import cgpt_page


type 
  scenario   = object
    title    : string
    content  : string
    selected : bool
    number   : int 


let gen_scenario_btn    = gebi_strict(consts.gen_scenario_btn_id)
let ghost_writer_card_1 = gen_scenario_btn.parentElement

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
        "title": "hehe",
        "content": ".."
      },
      {
        "title": "...",
        "content": ".."
      },
      {
        "title": "...",
        "content": ".."
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
      "content": ".."
    },
    {
      "title": "...",
      "content": ".."
    },
    {
      "title": "...",
      "content": ".."
    }

  ]
  """.multiReplace(@[
    ("__user_selection__", $selection)
  ])

# Example: await prompt_cgpt("Bearer 123", "Hello, I am a robot")
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
  for child in section.queryAll("div"):#children:
    if child.id != selected_id:
      child.hide()

proc get_response_text(response:Response): Future[cstring] {. async .} = 
    let resp_json{. exportc: "resp_json".} = await response.json()

    var resp_text{. exportc: "resp_text".} = "".cstring

    {.emit: "resp_text = resp_json.choices[0].message.content".}

    return resp_text

proc add_to_local_storage(scenario:scenario) = #, scenario_number, )#index:int) =     
  window.localStorage.setItem(
    fmt"scenario_{scenario.number}" ,#& $index, 
    """{"title"    : "__title__", "content"  : "__content__", "selected" :  __selected__ }""".multiReplace(@[
      ("__title__", scenario.title),
      ("__content__", scenario.content),
      ("__selected__", $scenario.selected)
    ]))

proc selected_scenario_in_local_storage(scenario_number:int) : Option[scenario] = 
  let scenario_json = window.localStorage.getItem(fmt"scenario_" & $scenario_number)
  if scenario_json != nil:
    let scenario_json_text = $scenario_json
    echo scenario_json_text
    let scenario = scenario_json_text.fromJson(scenario)
    return some(scenario)
  return none(scenario)

proc add_ghost_writer_tab_selected_functionality(
                                                    tab    : Element , 
                                                    id     : string
                                                  ) =
  tab.click( 
    proc (e: Event) =
      let parent = tab.parentElement
      console.log( parent)
      
      for kid in parent.querySelectorAll("div"):
        console.log( kid)
        #kid.rmClass(@["bg-[#816AFE]", "text-[white]"])
        kid.style.backgroundColor = ""
        kid.style.color           = "slategray"
        kid.id  = ""
      
      #tab.addClass(@["bg-[#816AFE]", "text-[white]"])
      tab.style.backgroundColor = "#816AFE"
      tab.style.color           = "white"
      tab.id = id
  )

proc add_tab_clicked_functionality(el:Element, id:string) = 
    for kid in el.querySelectorAll("div"):
        console.log( kid)
        kid.add_ghost_writer_tab_selected_functionality(id)

proc second_scenario_btn_click(e: Event) {.async.}=
    let selected_scenario = gebi("selected-scenario-1")
    
    # If no scenario is selected then show error
    if selected_scenario.isNone:
        console.log("No scenario selected")
        ghost_writer_card_1.addElement("<p id='no-scenario-err' class='text-red-500'>No scenario selected</p>")
    else:
        
        let no_scenario_err = gebi("no-scenario-err")
        # If error is showing then remove it
        if no_scenario_err.isSome:
          no_scenario_err.get.remove()
        
        ghost_writer_card_1.hide_unselected_options("selected-scenario-1")

        let first_selected_scenario_title   = document.querySelector("#selected-scenario-1 p:first-child").innerHTML
        let first_selected_scenario_content = document.querySelector("#selected-scenario-1 p:last-child" ).innerHTML
        
        scenario(
          title    : $first_selected_scenario_title  , 
          content  : $first_selected_scenario_content, 
          selected : true,
          number   : 1
          ).add_to_local_storage #(scenario_number = 1, ii)
        
        let prompt_2                        = buildPrompt2(
                                                            $first_selected_scenario_title & "\n" & 
                                                            $first_selected_scenario_content
                                                            )
        #echo prompt_2

        # This is the top level section that contains all the ghost writer cards
        # scenario-section
        #   ghost-writer-card-1
        #   ghost-writer-card-2
        let scenario_section = gebi_strict("scenario-section")
        
        # Add a new ghost writer card to the scenario section with an id of "ghost-writer-card-2"
        scenario_section.addElement(ghost_writer_card(@[spinner(consts.cgpt_spinner_id)], "ghost-writer-card-2"))

        let ghost_writer_card_2 = gebi_strict("ghost-writer-card-2")
        let spinner             = gebi_strict(consts.cgpt_spinner_id)

        let cgpt_resp_2         = await prompt_cgpt("Bearer " & consts.open_ai_key, prompt_2)
        
        spinner.remove()

        if not cgpt_resp_2.ok:
            console.log("Request Failed", await cgpt_resp_2.json())
            ghost_writer_card_2.addElement("<p id='no-scenario-err' class='text-red-500'>Something went wrong! Try refreshing the page</p>")
        else:
            let resp_text_2                = await cgpt_resp_2.get_response_text()
            console.log(resp_text_2)
            let resp_2_text_string         = $resp_text_2
            let scenarios_2: seq[scenario] = resp_2_text_string.fromJson(seq[scenario])

            for ii, scenario in enumerate(scenarios_2):
              ghost_writer_card_2
                .addElement(ghost_writer_tab(scenario.title, scenario.content, "s" & $ii, 2 ))
            
            ghost_writer_card_2.add_tab_clicked_functionality("selected-scenario-2")

            
            ghost_writer_card_2.addElement(
              """
              <button id='cgpt-final-submit-btn'>
                Send your final selections to our Story AI
              </button>
              """

            )
            let final_submit_btn = gebi_strict("cgpt-final-submit-btn")
            final_submit_btn.click( 
              proc (e: Event) =
                ghost_writer_card_2.hide_unselected_options("selected-scenario-2")
            )


let selected_scenario_1  = selected_scenario_in_local_storage(1)
if selected_scenario_1.isSome:
    gen_scenario_btn.hide()
    ghost_writer_card_1
      .addElement(
                    ghost_writer_tab(
                                      selected_scenario_1.get.title, 
                                      selected_scenario_1.get.content, 
                                      "s", 
                                      1,
                                      id = "selected-scenario-1" 
                                      
                                      )
              )
    ghost_writer_card_1.addElement(gen_second_scenario_btn())
    let gen_second_scenario_btn = gebi_strict(consts.gen_second_scenario_btn_id)
    
    gen_second_scenario_btn.click( second_scenario_btn_click)
else:
    gen_scenario_btn.click( 
      proc (e: Event) {.async.}=
        

        # Hide the "Generate Scenario" button
        # And show the spinner
        gen_scenario_btn.hide()
        ghost_writer_card_1.addElement(spinner(consts.cgpt_spinner_id))

        let spinner = gebi_strict(consts.cgpt_spinner_id)

        let cgpt_resp = await prompt_cgpt("Bearer " & consts.open_ai_key, buildPrompt1())
        
        spinner.remove()
        
        if not cgpt_resp.ok:
            console.log("Request Failed", await cgpt_resp.json())
            ghost_writer_card_1.addElement("<p id='no-scenario-err' class='text-red-500'>Something went wrong! Try refreshing the page</p>")
        else:
            let resp_text = await cgpt_resp.get_response_text()
            console.log(resp_text)

            let resp_text_string         = $resp_text
            let scenarios: seq[scenario] = resp_text_string.fromJson(seq[scenario])

            for ii, scenario in enumerate(scenarios):
              ghost_writer_card_1
                .addElement(
                              ghost_writer_tab(scenario.title, scenario.content, "s" & $ii, 1 )
                        )
            ghost_writer_card_1.add_tab_clicked_functionality("selected-scenario-1")
            
        
            ghost_writer_card_1.addElement(gen_second_scenario_btn())
            let gen_second_scenario_btn = gebi_strict(consts.gen_second_scenario_btn_id)
            
            gen_second_scenario_btn.click( second_scenario_btn_click)

    )






