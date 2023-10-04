import strutils, strformat, tables, sequtils
import dom
import jsre
import std/jsfetch
import std/[asyncjs, jsconsole, jsformdata, jsheaders]
from std/httpcore import HttpMethod
from std/jsffi import JsObject
from std/sugar import `=>`
import json
import jsony
import asyncjs
from std/strutils import contains
import asyncjs
import mynimlib/nimwind as nw
import mynimlib/nimalpine as na
import mynimlib/nimsvgicons

import std/enumerate

let prompt: cstring = """
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

proc await[T](f: Future[T]): T {.importjs: "await #", used.}

func log[T](thing:T) {.importjs: """console.log(#)""".}

proc prompt_cgpt(api_key, prompt: cstring): Future[jsfetch.Response] {. async importjs: 
    # Example: await prompt_cgpt("Bearer 123", "Hello, I am a robot")
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

let cgpt_resp      = await prompt_cgpt("Bearer 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", prompt)
let cgpt_resp_json{. exportc: "cgpt_resp_json".} = await cgpt_resp.json()

var resp_text{. exportc: "resp_text".} = "".cstring
{.emit: 
"""
resp_text = cgpt_resp_json.choices[0].message.content
console.log(resp_text)
"""
.}

type 
  scenario  = object
    title   : string
    content : string

let resp_text_string = $resp_text
let scenarios: seq[scenario] = resp_text_string.fromJson(seq[scenario])

proc Template*(content:string): Node =
    let p = document.createElement("template")
    p.innerHTML = content
    let node = p.content.cloneNode(true)
    return node

echo scenarios

let ghost_writer_row_mobile = document.getElementById("ghost-writer-row-mobile")
log ghost_writer_row_mobile

proc ghost_writer_tab_mobile*(title:string, content:string, tab_name:string):string = 
  let xdd = na.xdd()
  proc text(text:string):string= fmt"""<p {xdd.btn} >{text}</p>"""
  proc Content(content:string):string= fmt"""<p{xdd.item_to_drop} >{content}</p>"""
  
  nw.col(
    text(title)&chevron_down("red", "25px")&Content(content),
    bgColor = "#FFFFFF",
    p="p-3",
    head=fmt"""
{xdd.container} 
style='border-radius:10px; cursor:pointer;' 
@click.prevent="activeTab = '{tab_name}'" 
:class="activeTab === '{tab_name}' ? 'bg-[#816AFE] text-[white]' : ''" 
:id="activeTab === '{tab_name}' ? 'selected-scenario' : ''" 

""",
    itemposh="c",
    itemposv="c",
    #gap=2,
    w = "full",
    extra_class = "text-slate-700"

  )

let spinner = document.getElementById("spinner")
spinner.style.display = "none"

for ii, scenario in enumerate(scenarios):
  ghost_writer_row_mobile.appendChild(
    Template(
              ghost_writer_tab_mobile(scenario.title, scenario.content, "s" & $ii )
            )
  )

let selected_scenario = document.getElementById("selected-scenario")
let next_scenario_btn{.exportc:"next_scenario_btn".} = document.getElementById("next-scenario-btn")

proc nextBtnClicked(): Future[void] {. async exportc:"nextBtnClicked" .}= 
  let title = document.querySelector("#selected-scenario p:first-child")
  let content = document.querySelector("#selected-scenario p:last-child")

  echo title.innerHTML
  echo content.innerHTML
  let prompt_2 = buildPrompt2($(title.innerHTML) & "\n" & $(content.innerHTML))
  echo prompt_2

  let cgpt_resp_2      = await prompt_cgpt("Bearer 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", prompt_2)

  let cgpt_resp_json_2{. exportc: "cgpt_resp_json_2".} = await cgpt_resp_2.json()

  var resp_text_2{. exportc: "resp_text_2".} = "".cstring
  {.emit: 
  """
  resp_text_2 = cgpt_resp_json_2.choices[0].message.content
  console.log(resp_text_2)
  """
  .} 
         

{.emit: 
"""
next_scenario_btn.addEventListener("click", nextBtnClicked)
"""
.}
#next_scenario_btn.addEventListener("click", nextBtnClicked)


# next_scenario_btn.addEventListener("click", proc (e: Event) =

#   # let cgpt_resp_json{. exportc: "cgpt_resp_json".} = await cgpt_resp.json()

#   # var resp_text{. exportc: "resp_text".} = "".cstring
#   # {.emit: 
#   # """
#   # resp_text = cgpt_resp_json.choices[0].message.content
#   # console.log(resp_text)
#   # """
#   # .} 
        
# )

#log cgpt_resp_json.choices[0].message.content

# #let raw_resp {. exportc: "raw_resp".} = await my_fetch("/test", "POST")
# let raw_resp = await my_fetch("/test", "POST")

# echo await raw_resp.text()


# let raw_resp2 = await my_fetch("/test", "POST")


# proc blob(resp:Response): Future[JsObject] {. importjs: """#.blob()""" .}

# let b = await raw_resp2.blob()

# echo typeof(b)

# log b

# #log await raw_resp2.blob()

# # # proc await[T](obj:T) : JsObject {. importjs: """await #""" .}



# # log await raw_resp.text()
# # {. emit: """
# # console.log(await raw_resp.blob())
# # """ .}

# # proc content(): JsonNode {. importjs: """await raw_resp.text()""" .}

# # echo content()
# #let content = {. importjs: """await raw_resp.json()""" .}





