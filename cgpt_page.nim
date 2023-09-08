import prologue
import site_comps
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import strformat, sequtils, strutils
import mynimlib/icecream

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
    
    # Desktop / Tablet
    nw.row(
            """<div style = "width:500px ; height: 500px ; background-color: grey></div>"""&

            nw.col(
                nw.col(
                    boldText("Loss")&
                    smallText("Details")
                )&
                regularText("Gaia's perspective - ")&
                regularText("Aliquam efficitur semper libero, in eleifend orci facilisis vel. Maecenas in pellentesque massa, ut accumsan eros. Morbi lorem nisl, ultricies i")
                #itemposv = "c"
            ),

            round     = "10px"          ,
            p         = "py-[2vw] px-[4vw]" ,
            itemposh  = 3            ,
            itemposv  = 4            ,
            bgColor   = "#EFECEBef"   ,
            whenBelow = (750, @["hidden"]),
            name      = "NFT Card dekstop / tablet"

        )#&

    # Mobile
    # nw.col(
    #         nw.col(
    #             """
    #             <img 
    #                 src="/static/img/BFE4182D-B784-4D86-851F-31E230476773.PNG" 

    #                 style="  
    #                 width: 100%;
    #                 height: auto;
    #                 border-top-left-radius: 10px;     
    #                 border-top-right-radius: 10px;     
    #                 border-bottom-left-radius: 0;
    #                 border-bottom-right-radius: 0; 
    #             "
    #             >
    #             """,
    #             itemposv = "c"
    #         )&
    #         nw.row(

    #             nw.col(                    
    #                     ddiv(
    #                         """
    #                             style=" 
    #                             cursor: pointer;
    #                             background-color: black;
    #                             padding: 1vh;
    #                             border-radius: 10%;
    #                             display: block;
    #                             "
    #                         """,
    #                         """
    #                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="20vw" height="20vw" style="display: block; margin:auto;">
    #                                 <path d="M5.5,4 L18.5,12 L5.5,20 L5.5,4 Z" />
    #                             </svg> 
    #                         """
    #                     ), 
    #                     head="""id="play-card-info-play-btn"""",
    #                     itemposv = "c"
    #                 )&
    #             nw.col(                    
    #                 """<p style = "font-size: 8vw; font-weight:bold;"> WIDE EYE FEELS </p>"""&
    #                 """<p style = "font-size: 3vw; font-weight:bold;"> Brenna </p>""", 
    #                 head = """id="play-card-info-text"style=" width: 100%;" """,
    #                 itemposv = "c"
                    
                
    #             ),
    #             gap = "2vw",
    #             w = "full",
    #             itemposh = "between",
    #             p = "p-4",
    #             name = "play card mobile info"

    #         ),

    #         round = "10px"          ,
    #         #p = "py-[2vw] px-[4vw]" ,
    #         itemposh = "c"            ,
    #         itemposv = "c"            ,
    #         bgColor = "#EFECEBef"   ,
    #         extra_class = "hidden",
    #         whenBelow = (750, @["flex"]),
    #         name = "play card Mobile",
    #         gap = "4vh"

    #     )

# proc
# proc cgpt_section():string = ""
# proc title():string = ""
# proc subtitle() :string = ""

################
## Routes     ##
################

proc cgpt_page*(ctx: Context) {.async.} =
  resp base(
    top_nav()&
    postNavCol(
      nft_card()
    )
  )


####################
## Route Handlers ##
####################

let cgpt_route* = pattern("/cgpt", cgpt_page, @[HttpGet])
#let contribute_verify_contact_form_route* = pattern("/contribute/nft-holder-address", contribute_verify_contact_form_page, @[HttpPost])
