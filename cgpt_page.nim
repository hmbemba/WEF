when not defined(js):
  import prologue
  import site_comps
  import mynimlib/icecream

import strformat, sequtils, strutils
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import mynimlib/nimalpine as na
import consts
import mynimlib/nimsvgicons

################
## Components ##
################

proc premise():string = ""
  # proc premise_audio_btn():string = ""

proc nft_card():string = 
    proc boldText(body:string):string = 
        fmt"<p class='text-bold'>{body}</p>"
    proc smallText(body:string):string = 
        fmt"<p class=''>{body}</p>"
    proc regularText(body:string):string = 
        fmt"<p class=''>{body}</p>"
    
    proc nft_img_mobile():string = 
      """
      <div class="bg-[#D9D9D9]" style="width:full; height:250px">
      </div>
      """

    proc nft_img_desktop():string = 
      """
      <div class="bg-[#D9D9D9]" style="width:250px; height:250px"></div>
      """
    
    proc text_section_mobile():string = 
      nw.col(
          nw.row(
            boldText("Loss")
            #smallText("Details")
          )&
          nw.col(
            nw.row(boldText("Section 1.1: ")&regularText("Gaia's perspective - "))&
            regularText("Aliquam efficros. Morbi lorem nisl, ultricies i")
          ),
          #p="p-4",
          gap=2
      )

    proc text_section_desktop():string = 
      nw.col(
          nw.row(
            boldText("Loss")
            #smallText("Details")
          )&
          nw.col(
            nw.row(boldText("Section 1.1: ")&regularText("Gaia's perspective - "))&
            regularText("Aliquam efficros. Morbi lorem nisl, ultricies i")
          ),
          #p="p-4",
          gap=2,
          itemposv="around"
      )




    # Desktop / Tablet
    nw.col(
          nw.row(nft_img_desktop()&text_section_desktop(), bgColor="#81162099",p="p-4",gap=4,head="style='border-radius:10px; '"),
          name="NFT Card Desktop",
          whenAbove=(650, @["flex"]), 
          p="p-[4vw]",
          extra_class ="hidden",
          head="style='border-radius:10px; '")&

    # Mobile
    nw.col(
          nw.col(nft_img_mobile()&text_section_mobile(), bgColor="#81162099",p="p-4",gap=4,head="style='border-radius:10px; '"),
          name="NFT Card mobile",
          whenAbove=(650, @["hidden"]), 
          p="p-[4vw]",
          head="style='border-radius:10px; '")

proc comiczone():string = 
  nw.row("""<p class="text-5xl">Comic Zone </p>""",itemposh="c", whenAbove=(650, @["hidden"]))&
  nw.row("""<p class="text-8xl">Comic Zone </p>""",itemposh="c", extra_class="hidden", whenAbove=(650, @["flex"]))

proc tell_ur_story():string = 
  nw.row("""<p class="text-2xl p-le">Tell Your Story...</p>""",itemposh="c", whenAbove=(650, @["hidden"]))&
  nw.row("""<p class="text-4xl">Tell Your Story...</p>""",itemposh="start", p="pl-20", extra_class="hidden", whenAbove=(650, @["flex"]))

proc page_header():string = 
  nw.col(comiczone()&tell_ur_story(), gap=4)

proc purple_card(body:string, name=""): string = 
  nw.col(
    nw.row(body, itemposh="c", itemposv="c"),
    bgColor="#816AFE99",
    p="p-4",
    gap=4,
    head="style='border-radius:10px; '",
    name=name
  )

proc spinner():string = 
  fmt"""

  <div role="status" id="{consts.cgpt_spinner_id}">
      <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>
  
  """

proc ghost_writer_tab*(title:string):string = 
  proc text(text:string):string= fmt"""<p class="text-slate-700">{text}</p>"""
  
  nw.col(
    text(title)&chevron_down("red", "25px"),
    bgColor = "#FFFFFF",
    p="p-4",
    head="style='border-radius:10px; '",
    itemposh="c",
    itemposv="c",
    gap=4
  )

proc ghost_writer_tab_mobile*(title:string):string = 
  proc text(text:string):string= fmt"""<p class="text-slate-700">{text}</p>"""
  
  nw.col(
    text(title)&chevron_down("red", "25px"),
    bgColor = "#FFFFFF",
    p="p-3",
    head="style='border-radius:10px; '",
    itemposh="c",
    itemposv="c",
    #gap=2,
    w = "full"
  )

proc ghost_writer_card():string = 
    purple_card(
      # Mobile
      nw.col(
        spinner(),#ghost_writer_tab_mobile("Gaia's Perspective")&ghost_writer_tab_mobile("Gaia's Perspective")&ghost_writer_tab_mobile("Gaia's Perspective"),
        gap=4,
        name = "mobile",
        whenAbove=(650, @["hidden"]),
        w="full",
        head = """" id='ghost-writer-row-mobile' x-data="{ activeTab: '' }" """
        
        )&
      nw.row(
        ghost_writer_tab("Gaia's Perspective")&ghost_writer_tab("Gaia's Perspective")&ghost_writer_tab("Gaia's Perspective"),
        gap=4,
        name = "Desktop/tablet",
        whenAbove=(650, @["flex"]),
        extra_class="hidden"
        
        
        ),
        name = "ghost writer card"
    )

proc ghost_writer_card(scenarios:seq[string]):string = 
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

proc gen_scenario_btn():string = 
  fmt"""
  <button id="{consts.gen_scenario_btn_id}">
    Generate Scenario's with ChatGPT
  </button>
  """

proc scenario_section(purple_cards:string): string = 
  """
  <div id="scenario-section" class="flex flex-col gap-4">
  __purple_cards__
  </div>
  """.multiReplace(@[("__purple_cards__", purple_cards)])

proc gen_second_scenario_btn*():string = 
  fmt"""
  <button id="{consts.gen_second_scenario_btn_id}">
    Generate 3 more scenarios with ChatGPT
  </button>
  """

proc spinner*(id:string):string = 
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
                        title:string, 
                        content:string, 
                        tab_name:string, 
                        scenario_num:int,
                        id:string = ""
                      ):string = 
  let xdd = na.xdd()
  proc text(text:string):string= fmt"""<p {xdd.btn} >{text}</p>"""
  proc Content(content:string):string= fmt"""<p{xdd.item_to_drop} >{content}</p>"""
  
  proc buildAlpineStuff(id:string):string = 
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
    p       = "p-3",
    head    =
      fmt"""
        id = '{id}'
        {xdd.container} 
        style='border-radius:10px; cursor:pointer;' 
      """,
    itemposh = "c",
    itemposv = "c",
    w        = "full",
    extra_class = if id == "": "text-slate-700" else: """text-[white] """ 

  )

proc ghost_writer_card*(scenarios:seq[string], id:string):string = 
    let bg_color = "#816AFE99"
    fmt"""
    <!-- Ghost Writer Card --> 
    <div
      id="{id}" 
      class="bg-[{bg_color}] p-4 gap-4 w-full flex flex-col "
      style='border-radius:10px;'
      __xdata__
      >
      {scenarios.join("\n")}
    </div> 
    """.multiReplace(@[("__xdata__", """ x-data="{ activeTab: '' }" """)])

when not defined(js):
  ################
  ## Routes     ##
  ################

  proc cgpt_page*(ctx: Context) {.async.} =
    resp htmlResponse base(
      top_nav()&

      scenario_section(
        ghost_writer_card(@[gen_scenario_btn()])
      )&
      # page_header()&
      # nft_card()&
      # ghost_writer_card()&
      # nw.btn("Select Next Scenario", head="id='next-scenario-btn' ")&
      """
      <script type="module" src="/static/js/cgpt_page_fe.js "></script>
      """
    )


  ####################
  ## Route Handlers ##
  ####################

  let cgpt_route* = pattern("/cgpt", cgpt_page, @[HttpGet])
  #let contribute_verify_contact_form_route* = pattern("/contribute/nft-holder-address", contribute_verify_contact_form_page, @[HttpPost])
