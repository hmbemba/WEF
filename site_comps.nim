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

# proc top_nav*(): string = 
#     nav(
#         """
#             padding="1vh 10vh 1vh 10vh" itemPosH=between bgColor="#00000099" itemPosV="ctr" sticky
#             bgColorOnScroll="black"

#         """,
#         """
#             <img src="/static/img/nav_logo.png" alt="" style="height:10vh" style="flex: 1;">
#         """&
#         nwc.row(
#             """
#             gap="2vh" itemPosH=6  style="flex: 1; height: 100%" bgColor=""
#             """,
#             nwc.btn(
#                 """
#                 round
#                 bgColor = "#D02F3A"
#                 textColor = "#FFFFFF"
#                 growOnHover
#                 """,
#                 anostyle("""/""", "Get NFT")

#             )&
#             nwc.btn(
#                 """
#                     round
#                     bgColorOnHover = "#D02F3A"
#                     textColor = "#FFFFFF"
#                 """,
#                 anostyle(if demo == false: """/contribute""" else: "/", "Contribute")

#             )&
#             nwc.btn(
#                 """
#                     round
#                     bgColorOnHover = "#D02F3A"
#                     textColor = "#FFFFFF"
#                 """,
#                 anostyle(if demo == false: """/faq""" else: "/", "FAQ")

#             )

#         )
#     )

proc top_nav*():string =
    # Desktop
    nw.row(
        """
        <img src="/static/img/nav_logo.png" alt="" style="height:10vh" style="flex: 1;">
        """&
        nw.row(
            nw.btn(anostyle("""/""", "Get NFT"), bgColor = "#D02F3A", p=" px-10 py-4", round="2vh", growOnHover=6)&
            nw.btn(anostyle(if consts.demo == false : """/contribute""" else: "/", "Contribute"))&
            nw.btn(anostyle(if consts.demo == false : """/faq"""        else: "/", "FAQ")),

            gap = 10,
            itemPosH = 1,
            extra_class = "flex-1",
            itemposv = "c"
        ),
        itemposh=2,
        p = "px-24 py-5",
        bgColor="#00000099",
        #extra_class = "sticky top-0 z-10",
        extra_class = " top-0 z-10",
        whenBelow = (650, @["hidden"]),
        name = "top nav desktop",
    )&
    
    # Mobile
    nw.row(
        """
        <img src="/static/img/nav_logo.png" alt="" style="height:10vh" style="flex: 1;">
    
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg 
            width='50px'
            fill = "white"
            style = "cursor:pointer"
            version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <g>
                <rect x="4" y="5" width="16" height="2"/>
                <rect x="4" y="11" width="16" height="2"/>
                <rect x="4" y="17" width="16" height="2"/>
            </g>
        </svg>
        """,
        itemposh    = "between",
        p           = "px-24 py-5",
        bgColor     ="#00000099",
        extra_class = "top-0 z-10 hidden",
        whenBelow   = (650, @["flex"]),
        name        = "top nav mobile",
    )



proc grey_card*(body:string):string = nwc.col(
    fmt"""bgColor = {style_grey} """ & content_col_styles(), 
    body)

proc redCard*(body:string):string = nw.col(
    body,
    bgColor = style_red,
    p = "p-[5vh]",
    itemposh = "c",
    gap = "4vh",
    round = "2vh",
    name = "red Card",
    
    
    )

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