import mynimlib/nimwebc   as nwc
import consts   
import strformat, strutils
import mynimlib/nimwind as nw
import mynimlib/[nimhtml, nimalpine, nimwind2]
import karax / [karaxdsl, vdom]



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

proc top_nav*():string =

    const nav_bg_color = "#45474F99"
    
    # Desktop
    nw.row(
        anostyle(
            "/",
            """
            <img src="/static/img/nav_logo.png" alt="" style="height:10vh" style="flex: 1;">
            """
        )&
        nw.row(
            anostyle("/", nw.btn("Get NFT", bgColor = "#D02F3A", p=" px-10 py-4", round="2vh", growOnHover=6) )&
            anostyle("/contribute" , nw.btn("Contribute"))&
            anostyle("/faq"        , nw.btn("FAQ")),

            gap = 10,
            itemPosH = 1,
            extra_class = "flex-1",
            itemposv = "c"
        ) &
        nw.btn("Connect Wallet", bgColor = "#D02F3A", p="px-10 py-4", round="2vh", growOnHover=6, head = "id = 'connect-wallet-btn'") &
        nw.btn("0xF64...081a52", bgColor = "#D02F3A", p="px-10 py-4", round="2vh", growOnHover=6, head = "id = 'wallet-address-btn'", extra_class="hidden"), 


        itemposh=2,
        itemposv = "c",
        p = "px-24 py-5",
        bgColor= nav_bg_color,
        #extra_class = "sticky top-0 z-10",
        extra_class = " top-0 z-10",
        whenBelow = (850, @["hidden"]),
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
        bgColor     = nav_bg_color,
        extra_class = "top-0 z-10 hidden",
        whenBelow   = (850, @["flex"]),
        name        = "top nav mobile",
    ) 

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

proc grey_card*(body:string, name = ""):string = 
    nw.row(
            body,
            round     = "10px"               ,
            p         = "py-[2vw] px-[4vw]"  ,
            itemposh  = 3                    ,
            itemposv  = 4                    ,
            bgColor   = "#EFECEBef"          ,
            name      = name

        )

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
        head = """style=color:black; id='post-nav-col'""",
        name = "post nav col"
        

    )

proc base*(body:string, title = "WIDE EYE FEELS") : string = 
    html(
        head(
                title, 
                body=""" 
                    <link rel="stylesheet" href="/static/styles.css">
                    <script type="module" src="/static/js/nav_fe.js"></script>
                    __tailwind_cdn__
                """.multiReplace(@[
                                    # ( "tw_js_file", tw_js_file) , # this is thirdweb not tailwind
                                    ("__tailwind_cdn__", nw.tw_cdn())
                                ])
            ), 
        body(body)
    )

# proc contact_form*():string = 
#     """
#   <form id='contact-form' method="post" class="hidden bg-[#45474F99] p-6 rounded-lg shadow-lg">

#         <div class="flex justify-between items-center mb-2">
#             <h2 class="text-white text-2xl font-bold text-center">Shipping Details</h2>
#             <!-- Close Modal Button -->
#             <button id="close-contact-form" class="text-black close-modal text-5xl">×</button>
#         </div>

#         <div class="mb-4">
#         <label for="email" class="block text-white text-sm font-bold mb-2">Email:</label>
#         <input type="email" id="email" name="email" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="you@example.com">
#         </div>

#         <div class="mb-4">
#         <label for="address" class="block text-white text-sm font-bold mb-2">Address:</label>
#         <input type="text" id="address" name="address" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="1234 Street Ave">
#         </div>

#         <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4">
#         <div>
#             <label for="city" class="block text-white text-sm font-bold mb-2">City:</label>
#             <input type="text" id="city" name="city" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="City">
#         </div>
#         <div>
#             <label for="state" class="block text-white text-sm font-bold mb-2">State:</label>
#             <input type="text" id="state" name="state" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="State">
#         </div>
#         </div>

#         <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-4">
#         <div class="md:col-span-2">
#             <label for="country" class="block text-white text-sm font-bold mb-2">Country:</label>
#             <select id="country" name="country" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
#             <option value="United States">United States</option>
#             </select>
#         </div>
#         <div>
#             <label for="zipcode" class="block text-white text-sm font-bold mb-2">Zip Code:</label>
#             <input type="number" id="zipcode" name="zipcode" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Zip Code">
#         </div>
#         </div>

#         <button type="submit" class="bg-[#D02F3A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110">
#         Submit
#         </button>
#   </form>
#     """

proc contact_form*(): string =
    let vnode = buildHtml(form(id="contact-form" , class = "hidden bg-[#45474F99] p-6 rounded-lg shadow-lg")):
        tdiv(class="flex justify-between items-center mb-2"):
            h2(class="text-white text-2xl font-bold text-center"): 
                vdom.text "Shipping Details"
            # Close Modal Button
            button(class="text-black close-modal text-5xl"): 
                vdom.text "×"

            tdiv(class="mb-4"):
                label(`for`="email" ,class="block text-white text-sm font-bold mb-2"): 
                    vdom.text "Email:"
                input(`type`="email", id="email", name="email", required="true", class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", placeholder="you@example.com")

            tdiv(class="mb-4"):
                label(`for`="address" ,class="block text-white text-sm font-bold mb-2"): 
                    vdom.text "Address:"
                input(`type`="text", id="address", name="address", required="true", class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", placeholder="1234 Street Ave")


            tdiv(class="grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4"):
                tdiv:
                    label(`for`="city" ,class="block text-white text-sm font-bold mb-2"): 
                        vdom.text "City:"
                    input(`type`="text", id="city", name="city", required="true", class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", placeholder="City")
                tdiv:
                    label(`for`="state" ,class="block text-white text-sm font-bold mb-2"): 
                        vdom.text "State:"
                    input(`type`="text", id="state", name="state", required="true", class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", placeholder="State")

            tdiv(class="grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4"):
                tdiv(class="md:col-span-2"):
                    label(`for`="country" ,class="block text-white text-sm font-bold mb-2"): 
                        vdom.text "Country:"
                    select(id="country", name="country", required="true", class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"):
                        option(value="United States"): 
                            vdom.text "United States"

                tdiv:
                    label(`for`="zipcode" ,class="block text-white text-sm font-bold mb-2"): 
                        vdom.text "Zip Code:"
                    input(`type`="number", id="zipcode", name="zipcode", required="true", class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", placeholder="Zip Code")


            button(`type`="submit", class="bg-[#D02F3A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110"): 
                vdom.text "Submit"
        
    result = $vnode

proc triple_card*(): string =
    proc card(img_url:string, body_text:string): VNode = 
        buildHtml(tdiv(class="flex flex-col items-center space-y-5  rounded-lg p-2")):
            img(src=img_url, alt="Theme Image", class=" h-48 object-cover rounded-lg shadow-lg")
            h2(class="text-white text-xl font-semibold"): 
                vdom.text "Theme"
            p(class="text-white text-center"):
                vdom.text body_text
    
    let cards = @[
        card("/static/img/contrib_page_1.png", "Your NFT has a specific theme and section. You’re unique! And have the power to drastically change the story..."),
        card("/static/img/contrib_page_2.png", "Playing a multiple endings game, you will create a script to be used for the final MVP of your chapter section."),
        card("/static/img/contrib_page_3.png", "Once you’re complete, you will be prompted to submit your section and we will move onto the next steps in Discord!")
        ]
    let vnode = buildHtml(tdiv(class="lg:px-20")):
        tdiv(class="rounded-[20px] bg-black bg-opacity-70 p-2 grid grid-cols-1 min-[825px]:grid-cols-3 "):
            for card in cards:
                card
    result = $vnode

