import prologue
import site_comps
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import strformat, sequtils, strutils, json
import mynimlib/[icecream, nimwind2, nimtinydb]


type contact = object 
    email:   string
    address: string
    city:    string
    state:   string
    country: string
    zipcode: string

################
## Components ##
################

proc Chapter(chapter_number:int, num_sections:int) : string = 
  var sections = newSeq[string]()
  proc link(section_num:int) : string = anostyle("#", fmt"Section {section_num + 1}", """ style = 'opacity:.5; ' """)
  for i in 0..<num_sections:
    sections.add( 
                    ddiv(
                          #fmt"""id = "chapter-{chapter_number}-section-{i}" """, 
                          fmt"""id = "section-{i}" """, 
                          link(i) 
                        )
                  )

  nwc.col(
    fmt"""id = "chapter-{chapter_number}" """,
    text("large",fmt"Chapter {chapter_number + 1}")&
    
    nwc.col(
      fmt"""id = "chapter-{chapter_number}-sections" """,
      sections.join()
    )
  )

proc edit_chapters_section(body:string) : string = 
  nw.col(
    body,
    head = """ id = 'edit-chapters-section' """,
    extra_class = "hidden"
  )



# ____
# proc edit_chapter
# /edit/chapter/{chapter in}/section/{seciton_nun}/walletAdder

 
proc red_card_s():seq[string] = 
    bg"#D02F3A"      / 
    round"20px"      /
    itemposh"center" /
    itemposv"center" /
    4.pad            

proc red_card():string = 
    ddiv(
      class : @["grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#D02F3A] p-[5vh] rounded-[2vh]"],
      name  : "red-card",
      body  : p(id: "get-nfts-loader", body:"Getting Your NFTS...", class: "text-center" / tcolor"white").mk(),
      id    : "red-card"
    ).mk()


################
## Routes     ##
################

proc contribute_page*(ctx: Context) {.async gcsafe.} =
#   resp base fmt"""
# <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#D02F3A] p-[5vh] rounded-[2vh]">
#     <!-- Card 1 -->
#     {nftCard()}

#     <!-- Card 2 -->
#     {nftCard()}

#     <!-- Card 3 -->
#     {nftCard()}
#     <!-- ... Add more cards as required ... -->

#     {nftCard()}

#     {nftCard()}

#     {nftCard()}
# </div>
#   """

  resp base(
    top_nav() & 
    postNavCol(contact_form() & site_comps.triple_card()&
        red_card()&
        """
        <script type="module" src="/static/js/contribute_page_fe.js"></script>
        """
    )
    
  )

proc contact_form_submit*(ctx: Context) {.async.} =
    ic "Incoming Post request"
    let nft_holder_addy = ctx.getPathParamsOption("nft_holder_addy")
    if nft_holder_addy.isNone():
        await ctx.respond(Http400, "Missing nft_holder_addy")

    ic "nft_holder_addy: " & nft_holder_addy.get

    ic $(ctx.request)
    let email   = ctx.getFormParamsOption("email")
    let address = ctx.getFormParamsOption("address")
    let city    = ctx.getFormParamsOption("city")   
    let state   = ctx.getFormParamsOption("state")  
    let country = ctx.getFormParamsOption("country")
    let zipcode = ctx.getFormParamsOption("zipcode")

    if email.isNone() or address.isNone() or city.isNone() or state.isNone() or country.isNone() or zipcode.isNone():
        await ctx.respond(Http400, "Missing form params")
    
    let contact_info = contact(
        email:   email.get,
        address: address.get,
        city:    city.get,
        state:   state.get,
        country: country.get,
        zipcode: zipcode.get
    )

    ic "contact_info: " & $(contact_info)

    let contact_db = newTinyDB("/root/db.json","contact_db")
    let insert_req = contact_db.insert(%contact_info)
    if not insert_req.ok:
        icr insert_req.err 
        await ctx.respond(Http500, "Failed to insert contact info into db \n" & insert_req.err)
    
    ic "Successfully inserted contact info into db with the doc_id of : " & $(insert_req.doc_id.get)
    await ctx.respond(Http200, "Successfully inserted contact info into db")



####################
## Route Handlers ##
####################

let contribute_route*          = pattern("/contribute", contribute_page, @[HttpGet])
let contact_form_submit_route* = pattern("/contribute/contact-form/{nft_holder_addy}", contact_form_submit, @[HttpPost])
