import mynimlib/nimwebc   as nwc
import strformat, strutils
import mynimlib/nimwind as nw
import mynimlib/[nimhtml, nimalpine, nimwind2]
import karax / [karaxdsl, vdom, vstyles]
import handles


proc top_nav_2*():string = 
    let top_nav = buildHtml(nav( class="flex flex-row items-center justify-between bg-[#45474F99] px-6 py-3 sm:px-12 top-0 z-10 w-full")):
        # Logo
        a( href="/", class="nostyle"):
            img( src="/static/img/nav_logo.png", alt="Logo", class="h-10 sm:h-16")
        # Buttons Row
        tdiv( class="flex flex-row gap-4 sm:gap-8 justify-center items-center flex-1"):
            
            # Get NFT Button
            a( href="/", class="nostyle"):
                button( class=" text-xl transition duration-300 hover:bg-black hover:text-[#D02F3A] bg-[#D02F3A] px-4 sm:px-6 py-2 rounded-lg transition duration-300 hover:scale-105"):
                    vdom.text "Get NFT"

            # Contribute and FAQ Buttons
            for item in @[("Contribute", "/contribute"), ("FAQ", "/faq")]:
                a( href=item[1], class="nostyle"):
                    button( class="text-xl text-white hover:text-gray-400 transition-colors duration-300"):
                        vdom.text item[0]

        # Connect Wallet Buttons
        tdiv( class="flex gap-4"):
            "<w3m-button />".verbatim
            # button( class="text-xl text-white  bg-[#D02F3A] px-4 sm:px-6 py-2 rounded-lg transition duration-300 hover:scale-105", id= $connect_wallet_btn ):
            #         vdom.text "Connect Wallet"
            # button( class="text-xl bg-[#D02F3A] px-4 sm:px-6 py-2 rounded-lg transition duration-300 hover:scale-105 hidden", id= $wallet_address_btn):
            #         vdom.text "0xF64...081a52"
      
    let close_button = buildHtml(button(class="rounded-full hover:shadow-lg hover:bg-gray-100 p-4 transition-colors duration-150")):
        """
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41 4.41a.833.833 0 0 1 1.18 0L10 8.822l4.41-4.41a.833.833 0 1 1 1.18 1.178L11.178 10l4.41 4.41a.833.833 0 1 1-1.178 1.18L10 11.177 5.588 15.59a.833.833 0 1 1-1.178-1.178L8.82 10l-4.41-4.41a.833.833 0 0 1 0-1.18Z" fill="currentcolor">
            </path>
        </svg>
        """.verbatim

    proc connect_option(icon, name: string, visible = true, id:string): VNode = 
        if visible: 
            buildHtml(button(id=id, class=fmt"flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:border-gray-400 focus:outline-none")):
                span(class="flex items-center"):
                    # Icon placeholder, replace with actual image path or SVG
                    img(src=icon, alt=name, class="h-6 w-6 mr-2")
                    # Button text
                    span(class="text-xl font-medium text-gray-700"):
                        vdom.text name
                """
                <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                """.verbatim
        else: 
            buildHtml(button(id=id, disabled=true, class="cursor-wait flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:border-gray-400 focus:outline-none")):
                span(class="flex items-center"):
                    # Icon placeholder, replace with actual image path or SVG
                    img(src=icon, alt=name, class="h-6 w-6 mr-2")
                    # Button text
                    span(class="text-xl font-medium text-gray-700"):
                        vdom.text name
                """
                <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                """.verbatim

    let connect_wallet_modal = buildHtml(tdiv(id= $connect_wallet_modal, class="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center")):#, style = style(backdropFilter, "blur(15px)") )):
        tdiv(class="relative p-4 bg-white rounded-2xl shadow-lg w-full max-w-md mx-2"):
            tdiv(class="text-center"):
                tdiv(class="flex justify-between items-center"):
                    h3(class="text-lg leading-6 font-medium text-gray-900"): 
                        vdom.text "Connect"
                
                    # Close Connect Wallet modal Btn
                    button(id= $close_connect_wallet_modal_btn , class="rounded-full hover:shadow-lg hover:bg-gray-100 p-2 transition-colors duration-150"):
                        """
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41 4.41a.833.833 0 0 1 1.18 0L10 8.822l4.41-4.41a.833.833 0 1 1 1.18 1.178L11.178 10l4.41 4.41a.833.833 0 1 1-1.178 1.18L10 11.177 5.588 15.59a.833.833 0 1 1-1.178-1.178L8.82 10l-4.41-4.41a.833.833 0 0 1 0-1.18Z" fill="currentColor">
                            </path>
                        </svg>
                        """.verbatim
                tdiv(class="mt-2 px-4 py-3 flex flex-col gap-4"):
                    connect_option("https://iconic.dynamic-static-assets.com/icons/sprite.svg#metamask", "Metamask", false, $connect_wallet_modal_metamask_btn)
                    connect_option("https://iconic.dynamic-static-assets.com/icons/sprite.svg#walletconnect", "WalletConnect", id = $connect_wallet_modal_cw_btn)
                    #connect_option("https://iconic.dynamic-static-assets.com/icons/sprite.svg#coinbase", "Coinbase")
    
    return $top_nav & $connect_wallet_modal

proc demo_nav*():string =
    let logo = img(src="/static/img/nav_logo.png", extra_head="""style = "height:10vh " """)
    let stay_up_to_date_btn = 
        nw.btn(
                anostyle("https://t.co/QdilTGiwXu", "Stay Up To Date"), 
                extra_class = "text-white",
                bgColor = "#D02F3A", 
                p=" px-10 py-4", 
                round="2vh", 
                growOnHover=6,
                whenbelow = (650, @["p-2"])
            )
    let twitter_btn = 
        nw.btn(
                anostyle("https://twitter.com/widefeels" , "Follow On Twitter"),
                extra_class = "outline outline-4 outline-offset-4 outline-[#D02F3A] text-white ",
                p = "p-2"

                )

    let xdd = xdd()
    
    let hamb = fmt"""
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg 
            width='50px'
            fill = "white"
            style = "cursor:pointer"
            {xdd.btn}
            version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
            <g>
                <rect x="4" y="5" width="16" height="2"/>
                <rect x="4" y="11" width="16" height="2"/>
                <rect x="4" y="17" width="16" height="2"/>
            </g>
        </svg>
        """

    let notif = """
    <?xml version="1.0" encoding="UTF-8"?>
    <svg fill="white" width="50px" height="50px" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
        <title>notifications</title>
        <desc>Created with Sketch.</desc>
        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Outlined" transform="translate(-512.000000, -4100.000000)">
                <g id="Social" transform="translate(100.000000, 4044.000000)">
                    <g id="Outlined-/-Social-/-notifications" transform="translate(408.000000, 54.000000)">
                        <g>
                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                            <path d="M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.9,22 12,22 Z M18,16 L18,11 C18,7.93 16.37,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.64,5.36 6,7.92 6,11 L6,16 L4,18 L4,19 L20,19 L20,18 L18,16 Z M16,17 L8,17 L8,11 C8,8.52 9.51,6.5 12,6.5 C14.49,6.5 16,8.52 16,11 L16,17 Z" id="🔹-Icon-Color" fill="white"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
        """

    let xicon = """
<svg xmlns="http://www.w3.org/2000/svg"  fill="white" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"/></svg>
    """

    proc mobile_nav_row(item:string):string = 
        nw.row(
            item,
            gap = 4,
            itemPosH = "start",
            p = "p-2",
            hover = @["bg-[#D02F3A]"],
            w = "w-full",
            #extra_class = "outline outline-2 outline-grey-100",
            
            

        )
    
    let mobile_nav = 
        nw.col(
            mobile_nav_row(notif&stay_up_to_date_btn)&mobile_nav_row(xicon&twitter_btn),
            gap = 5,
            itemPosH = "start",
            p = "p-2",
            bgColor = "#D02F3A",
            head = xdd.item_to_drop

        )
    
    # Desktop
    nw.row(
        logo&
        nw.row(
                    stay_up_to_date_btn&twitter_btn,
                    gap         = 10,
                    itemPosH    = 1,
                    extra_class = "flex-1",
                    itemposv    = "c"
              ),
        itemposh    = 2,
        p           = "px-24 py-5",
        bgColor     = "#00000099",
        extra_class = " top-0 z-10",
        whenBelow   = (650, @["hidden"]),
        name        = "top nav desktop",
    )&
    
    # Mobile
    nw.col(
        nw.row(
            logo&hamb,
            itemposh    = "between",
            p           = "px-24 py-5",
            bgColor     ="#00000099",
            
            
            
        )&mobile_nav,
        name        = "top nav mobile",
        extra_class = "top-0 z-10 hidden",
        whenBelow   = (650, @["flex"]),
        head = xdd.container

    )


proc base*(body:string, title = "WIDE EYE FEELS") : string = 
    html(
        head(
                title, 
                body=""" 
                    <link rel="stylesheet" href="/static/styles.css">
                    __tailwind_cdn__
                """.multiReplace(@[
                                    # ( "tw_js_file", tw_js_file) , # this is thirdweb not tailwind
                                    ("__tailwind_cdn__", nw.tw_cdn())
                                ])
            ), 
        body(body)
    )

template ppostNavCol*(incoming_class:string, body:untyped): VNode =
    buildHtml(tdiv(class=incoming_class)):
      body