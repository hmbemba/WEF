import mynimlib/nimwebc   as nwc
import consts   
import strformat, strutils
import mynimlib/nimwind as nw


proc content_col_styles*():string = 
    """
        round
        colItemPosition = 1
        border-radius = "10px"
        padding = 0
        gap = 3vh
        style="  
        flex: 3;
        "
    """

proc top_nav*(): string = 
    nav(
        """
            padding="1vh 10vh 1vh 10vh" itemPosH=between bgColor="#00000099" itemPosV="ctr" sticky
            bgColorOnScroll="black"

        """,
        """
            <img src="/static/img/nav_logo.png" alt="" style="height:10vh" style="flex: 1;">
        """&
        nwc.row(
            """
            gap="2vh" itemPosH=6  style="flex: 1; height: 100%" bgColor=""
            """,
            nwc.btn(
                """
                round
                bgColor = "#D02F3A"
                textColor = "#FFFFFF"
                growOnHover
                """,
                anostyle("""/""", "Get NFT")

            )&
            nwc.btn(
                """
                    round
                    bgColorOnHover = "#D02F3A"
                    textColor = "#FFFFFF"
                """,
                anostyle("""/contribute""", "Contribute")

            )&
            nwc.btn(
                """
                    round
                    bgColorOnHover = "#D02F3A"
                    textColor = "#FFFFFF"
                """,
                anostyle("""/faq""", "FAQ")

            )

        )
    )

# proc top_col*(body:string):string = 
#     col(
#         """
#         padding = "20vh"
#         gap = "5vh"
#         bgColor = "#EFECEBef00"
#         textColor = "black"
#         """,
#         body
#     )

proc grey_card*(body:string):string = nwc.col(
    fmt"""bgColor = {style_grey} """ & content_col_styles(), 
    body)

# proc red_card*(body:string):string = nwc.col(
#     fmt"""bgColor = {style_red} """ & 
#     # content_col_styles()&
#     """
#             padding = "5vh 5vh 5vh 5vh"
#             textColor = "black"
#             round
#             itemPosH = c
#             gap = 4vh
#     """
#     , 
#     body)

proc redCard*(body:string):string = nw.col(
    body,
    bgColor = style_red,
    p = "p-[5vh]",
    itemposh = "c",
    gap = "4vh",
    round = "2vh",
    name = "red Card",
    
    
    )

# proc play_card*():string = 
#     row(
#             """
#                 round
#                 padding = "2vw"
#                 border-radius = "20px"
#                 rowItemPosition = "3"
#                 col-item-pos="4"
#                 bgColor = "#EFECEBef"
#                 style=" 
#                 align-items: center;
#                 "
#             """,
#             row(
#                 """
#                     id = "play-card-info"
#                     rowItemPosition = "5"
#                     bgColor = "#EFECEBef00"
#                     padding = "5vh"
#                     style="width: 100%;"
#                     gap = 2vw
#                 """,
#                 col(
#                     """
#                         id="play-card-info-play-btn"
#                         style=" 
#                         background-color: rgba(255, 0, 0, 0);
#                         "
#                     """,
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
#                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="100px" height="100px" style="display: block; margin:auto;">
#                                 <path d="M5.5,4 L18.5,12 L5.5,20 L5.5,4 Z" />
#                             </svg> 
#                         """

#                     )

#                 )&
#                 col(
#                     """
#                         id="play-card-info-text"
#                         bgColor = "rgba(255, 0, 0, 0)"
#                         style=" width: 100%;"
#                     """,
#                     text(
#                         """
#                             largest
#                             bold
#                         """,
#                     "WIDE EYE FEELS"
#                     )&
#                     text(
#                         """
#                             small
#                             bold
#                         """,
#                         "Brenna"
#                     )

#                 )

#             )&
#             ddiv(
#                 """
#                 <img 
#                     src="/static/img/BFE4182D-B784-4D86-851F-31E230476773.PNG" 

#                     style="  
#                     width: 200px;
#                     height: auto;
#                     border-radius: 3%;
#                 "
#                 >
#                 """

#             )
#     )

proc connect_wallet_btn *(): string = 
    nwc.btn(
        """
                id="connect-wallet" 
                round 
                bgColor="#EDE9E9" 
                growOnHover 
                textColor="black"
        """,
        "Connect Wallet"
    )

proc coming_soon_card*(): string = 
    red_card(
        "COMING SOON"
    )

# proc countdown*(): string = 
#     col()

# proc chapter_nav_bar*(): string = 
#     row()


# proc presale_card*(): string = 
#     col()

proc postNavCol*(body:string): string = 
    nw.col(
        body,
        p    = "px-[10vw] py-[40px]",
        gap  = "5vh",
        head = """style=color:black;""",
        name = "post nav col"
        

    )



proc base*(body:string, title = "WIDE EYE FEELS") : string = 
    html(
        head(
                title, 
                body=""" 
                    <script type="module" src="/static/js/lit_base_components/dist/assets/lit_js_file"></script> 
                    <script type="module" src="/static/js/thirdweb/dist/assets/tw_js_file"></script> 

                    <link rel="stylesheet" href="/static/styles.css">
                    <style>
                    body{
                        --font-smallest : 1vw;
                        --font-smaller  : 1.5vw;
                        --font-small    : 1.5vw;
                        --font-medium   : 2.5vw;
                        --font-large    : 2vw;
                        --font-larger   : 3vw;
                        --font-largest  : 3.5vw;
                        }
                    </style>

                    __tailwind_cdn__
                """.multiReplace(@[
                                    ("lit_js_file", lit_js_file),
                                    ( "tw_js_file", tw_js_file),
                                    ("__tailwind_cdn__", nw.tw_cdn())
                                ])
            ), 
        body(

            body
        )
    )