import prologue
import site_comps
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import strformat, sequtils, strutils
import mynimlib/icecream

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


################
## Routes     ##
################

proc contribute_page*(ctx: Context) {.async.} =
  resp base(
    top_nav()&
    postNavCol(
      red_card(
            text(
                  """
                  color = white
                  smaller
                  """
              ,
                  """
                  Select the chapter you wish to contribute to!
                  """
            )&
            text(
                  """
                  color = white
                  smallest
                  """
              ,
                  """
                  Make sure you are connected with the wallet that owns the nft for the chapter you've selected!
                  """
            )&

        connect_wallet_btn()&
        edit_chapters_section(
          Chapter(0, 2)&
          Chapter(1, 2)
        )
      )
    )
  )

proc contribute_verify_contact_form_page*(ctx: Context) {.async.} =
  ic "Incoming Post request"

  ic $(ctx.request)
  ic $(ctx.request.postParams)

  resp jsonResponse(%*{"show_form":true})

####################
## Route Handlers ##
####################

let contribute_route* = pattern("/contribute", contribute_page, @[HttpGet])
let contribute_verify_contact_form_route* = pattern("/contribute/nft-holder-address", contribute_verify_contact_form_page, @[HttpPost])
