import prologue
import comps
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import strformat, strutils
import mynimlib/utils
import handles
import mynimlib/prologutils as pu
import sequtils
import karax / [karaxdsl, vdom, vstyles]
import consts
import dekao
import mynimlib/webui/webui as wui
import mynimlib/webui/accordion/accordion 
import mynimlib/webui/modal/modal


################
## Components ##
################
proc spotify_embed : string = render:
    wui.col:
        say """<iframe class="hidden md:block w-full h-[352px]" style="border-radius:12px" src="https://open.spotify.com/embed/album/4NWfvTXLRt6MQPdza7GmcB?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> """

proc spotify_embed_mobile : string = render:
    tdiv:
        class "flex flex-col bg-[#2038A0] fixed bottom-0 md:hidden w-full h-[100px] "
        say """<iframe class="w-full" style="border-radius:12px" src="https://open.spotify.com/embed/album/4NWfvTXLRt6MQPdza7GmcB?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> """


proc chapter_carousel(iframes:seq[string]): string = 
    var arr = "["
    for ii in 0..iframes.len-1:
        arr.add($(ii + 1) & ",")
    arr &= "]"

    proc single_carousel(index:int, iframe:string):string = 
        fmt"""
        <div
            x-show="activeSlide === {index}"
            class="p-4 font-bold text-5xl h-64 flex items-center bg-red-500 text-white rounded-lg">
            {iframe}
        </div>
        """
    proc buildCarousels(): string = 
        for ii in 0..iframes.len - 1:
            result.add( single_carousel(ii + 1, iframes[ii]) & "\n" )
    """
    <div class="bg-red-100 h-screen flex flex-col justify-center items-center">
        
        <div class="max-w-4xl mx-auto relative" x-data="{ activeSlide: 1, slides: __arr__ }" >

            __carousels_items__

            
            <!-- Prev/Next Arrows -->
            <!--
            <div class="absolute inset-0 flex">
                <div class="flex items-center justify-start w-1/2">
                    <button 
                    class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
                    x-on:click="activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1">
                    &#8592;
                    </button>
                </div>
                <div class="flex items-center justify-end w-1/2">
                    
                    <button 
                    class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
                    x-on:click="activeSlide = activeSlide === slides.length ? 1 : activeSlide + 1">
                    &#8594;
                    </button>
                </div>        
            </div>
            -->

            <!-- Buttons -->
            <div class="absolute w-full flex items-center justify-center px-4 mt-[170px]">
            
                <template x-for="slide in slides" :key="slide">
                    <button
                        class="flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg"
                        :class="{ 
                            'bg-orange-600': activeSlide === slide,
                            'bg-red-300': activeSlide !== slide 
                        }" 
                        x-on:click="activeSlide = slide"
                    >
                    </button>
                </template>
            </div>
        </div>
    </div>
    """.multiReplace(@[
        ("__arr__", arr),
        ("__carousels_items__", buildCarousels())
    ])


proc buildIframes(num_iframes:int): seq[string] = 
    for ii in 0..<num_iframes:
        result.add consts.third_web_contract_embed.replace("tokenId=0", fmt"tokenId={ii}")

proc mmainContent():string = 
    let white_panel_title_text = "BLOOD TIES (Chapter 1)"
    let white_panel_body_text = @[
        "After the death of her mother, Gaia goes to the great Forest where she seeks death.", 
        "Instead of death, She finds awakening...",
        "In a future overthrown by IMA, ",
        "The conscious form of AI, humans have lost their history, identity, and dominance within the hierarchy",
        "of planet earth." 
        ]
    
    let black_panel_title_text = "Collector Comic Creation"
    let black_panel_body_text = @["""
        There will be 7 chapters (a chapter for each song in the album) in the Wide Eye Feels Comic book. 
        """,
        """
        As a collector, you will be a part of co-creating the MVP comic!!
        """,
        "Each chapter will be a new “cluster”",
        "Once you purchase your NFT, you will be prompted to enter your mailing address,", 
        "(don't worry I won't come pay you a visit)",
        "this is where I will be sending you your collectible Loot",
        ]

    render:
        tdiv:
            class "flex flex-col basis-full md:basis-2/4 space-y-4"
            tdiv:
                class "flex flex-col gap-4 bg-white p-4 border-8 border-black rounded-md"
                p:
                    class "text-3xl md:text-4xl text-center"
                    say white_panel_title_text
                for text in white_panel_body_text:
                    p:
                        class "text-lg md:text-2xl mt-2"
                        say text
            tdiv:
                class "flex flex-col gap-4 bg-black p-4 border-8 border-white rounded-md text-white"
                p:
                    class "text-3xl md:text-4xl text-center"
                    say $black_panel_title_text
                for text in black_panel_body_text:
                    p:
                        class "text-lg md:text-2xl mt-2"
                        say text

proc presale_card():string = 
    proc info_row(left: string, right: string): string = 
        nw.row(
            left&
            right,
            itemposh = "between"
        )
    
    let info_col_content = @[
        (nw.text("Price:", text_size.large), nw.text("??", text_size.large)),
        (nw.text("Network:", text_size.large), nw.text("Ethereum", text_size.large)),
        (nw.text("Collected:", text_size.large), nw.text("0", text_size.large))
    ]
    nw.col(
        nw.col(
            # Title Row
            info_row(
                nw.text("Presale", text_size.large),
                nw.text("Ends: <span class='text-[red]'> 12/01/23 </span>", text_size.large)

            )&
            # Main Info Col
            nw.col(
                info_col_content.mapIt(info_row(it[0], it[1])).join("\n"),
            ),
            p = "px-8",
            gap = 8,
        )&
        # Countdown box
        nw.col(
            nw.text("Presale Ends In:", text_size.medium)&
            """<div id='countdown' class='text-5xl'> </div>""",
            itemposh = "c",
            bgColor = "black",
            extra_class = "text-white",
            round = "8px",
            p = "py-4"

        )&
        # Connect Wallet Button
        #nw.btn()&
        # Public Sale Row
        #nw.row()
        "",

        round = "10px"          ,
        
        extra_class = "hidden",
        itemposv = "c"            ,
        bgColor = "#EFECEBef"   ,
        name = "Presale Card",
        gap = "4vh",
        head = fmt"id='{$presale_card}'",
        p = "pt-8"

    )

proc loading_box():string = 
    nw.col(
        nw.text("Loading...", text_size.xxxl),
        itemposh = "c",
        itemposv = "c",
        h = "200px",
        bgColor = "#EFECEBef"   ,
        name = "Loading Box",
        gap = "4vh",
        head = fmt"id='{$loading_box}'",
        round = "10px"          ,

    )

proc NFTModal(carousel:string) : string = render:
    modal_bkg("px-24"):
        x_show "showModal"
        tdiv:
            class "flex flex-col gap-4 relative top-10 mx-auto p-4 border shadow-lg rounded-md bg-white  w-full"
            modal_container ""
            modal_head("text-black"):
                h1:
                    class "text-3xl"
                    say "Purchase an NFT"
                h1:
                    class "text-3xl cursor-pointer"
                    say "X"
                    x_click "showModal = !showModal"
            modal_body:
                say """<p class="border-4 border-red-500 p-2 mb-2 rounded-lg text-black py-4">When you're done minting head to the contribute tab to add your story!</p>"""
                say carousel

proc NFTAccordions : string = render:
    let nft_modal = NFTModal(chapter_carousel(buildIframes(7)))
    acc_comp("hidden"):
        id "nft_accordions"
        for index in 0..6:
            acc_item fmt"chapter_{index + 1}":
                acc_head("px-4 py-2 rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"):
                    x_data "{ doRotate: false }"
                    x_click "doRotate = !doRotate"
                    h4:
                        class "text-2xl text-white"
                        say fmt"Chapter {index + 1}"
                    say """
                    <svg :class="{'transform rotate-180': doRotate}" class="fill-current text-white transition-transform duration-300" width="25px" height="25px" viewBox="0 0 24 24">
                    <path d="M12,17.414 3.293,8.707 4.707,7.293 12,14.586 19.293,7.293 20.707,8.707"></path>
                    </svg>
                    """
                acc_body("px-5 py-4 bg-[red] text-center text-white"):
                    if index > consts.last_open_chapter:
                        say "Coming Soon!"
                    else:
                        tdiv:
                            x_data "{ showModal: false }"
                            button:
                                class "bg-white text-black px-4 py-2 rounded-md"
                                x_click "showModal = !showModal"
                                say "Get NFT's from this Chapter"
                            say nft_modal


####################
## Route Handlers ##
## #################
proc landing*(ctx: Context) {.async, gcsafe.} =  
    let embed         = spotify_embed() 
    let embed_mobile  = spotify_embed_mobile()
    let mainContent   = mmainContent() 
    let NFTAccordions = NFTAccordions()
    let top_nav       = top_nav_2()

    let body = render:
        bbase:
            #say "<script type='module' src='/static/js/landing_page_fe.js'></script>"
            say uncached_script("/static/js/landing_page_fe.js")
            
            say "<!-- Top Nav -->"
            say top_nav

            say "<!-- Banner Space -->"
            tdiv:
                tdiv:
                    id $success_banner 
                    class "hidden bg-green-500 text-white text-center p-4"
                tdiv:
                    id $err_banner 
                    class "hidden bg-red-500 text-white text-center p-4"
            
            say "<!-- Post Nav Col -->"
            postNavCol("flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-16 px-4 md:px-[5vw] py-[10vh] text-black"):
                say "<!-- Left Side -->"
                say mainContent
                say "<!-- Right Side -->"
                tdiv:
                    class "flex flex-col gap-4 basis-2/4 "
                    say "<!-- Embed -->"
                    say embed
                    
                    say "<!-- Loading Box -->"
                    say loading_box()
                    
                    say "<!-- Presale Card-->"
                    say presale_card()
                    
                    say "<!-- NFT Accordions -->"
                    say NFTAccordions
                    say "<!-- NFT Modal -->"
            say embed_mobile
                
    resp pu.htmlResponse body

proc demo_landing*(ctx: Context) {.async.} =        
    let body = render:
        bbase:
            say """
        <!-- top nav desktop -->
    <div class="
        flex flex-row  bg-[#00000099] justify-end  
        px-24 py-5   top-0 z-10  max-[650px]:hidden 
         
        ">
                
        <img src="/static/img/nav_logo.png" alt="" style="height:10vh ">
            
    <div class="
        flex flex-row gap-10  justify-center items-center 
          flex-1   
         
        ">
            
    <button class="bg-[#D02F3A]  px-10 py-4  rounded-[2vh] transform transition-transform duration-300 hover:scale-105  text-white max-[650px]:p-2 ">
        <a href="https://t.co/QdilTGiwXu" class="nostyle">Stay Up To Date</a>

    </button>
        
    <button class=" p-2     outline outline-4 outline-offset-4 outline-[#D02F3A] text-white   ">
        <a href="https://twitter.com/widefeels" class="nostyle">Follow On Twitter</a>

    </button>
    
    </div>
    
    </div>
        <!-- top nav mobile -->
    <div class="
        flex flex-col    
            max-[650px]:flex  top-0 z-10 hidden 
          " x-data="{ showDropdown: false }">
            
    <div class="
        flex flex-row  bg-[#00000099] justify-between  
        px-24 py-5     
         
        ">
                
        <img src="/static/img/nav_logo.png" alt="" style="height:10vh ">
                <!--?xml version="1.0" encoding="utf-8"?-->
        <!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg width="50px" fill="white" style="cursor:pointer" @click="showDropdown = !showDropdown" version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
            <g>
                <rect x="4" y="5" width="16" height="2"></rect>
                <rect x="4" y="11" width="16" height="2"></rect>
                <rect x="4" y="17" width="16" height="2"></rect>
            </g>
        </svg>
        
    </div>
        
    <div class="
        flex flex-col gap-5 bg-[#D02F3A]  
        p-2       
        items-start  " x-show="showDropdown" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" style="display: none;">
            
    <div class="
        flex flex-row gap-4  justify-start  
        p-2     
         w-full
        ">
            <!--?xml version="1.0" encoding="UTF-8"?-->
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
            
    <button class="bg-[#D02F3A]  px-10 py-4  rounded-[2vh] transform transition-transform duration-300 hover:scale-105  text-white max-[650px]:p-2 ">
        <a href="https://t.co/QdilTGiwXu" class="nostyle">Stay Up To Date</a>

    </button>
    
    </div>
        
    <div class="
        flex flex-row gap-4  justify-start  
        p-2     
         w-full
        ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path></svg>
        
    <button class=" p-2     outline outline-4 outline-offset-4 outline-[#D02F3A] text-white   ">
        <a href="https://twitter.com/widefeels" class="nostyle">Follow On Twitter</a>

    </button>
    
    </div>
    
    </div>
    
    </div>
        
    <div class="
        flex flex-col   justify-center 
            max-[750px]:hidden  h-screen 
        items-center  ">
                    <img style="width: 100vw;height: 100vh;" src="/static/img/demo_gif.gif">
            
    </div>
        
    <div class="
        flex flex-col   justify-center 
            max-[750px]:flex  h-screen hidden 
        items-center  ">
                    <style>
            /* CSS to zoom in the GIF */
            .zoom-container {
                width: 700px; /* Set the width of the container to the viewport width */
                height: 100vh; /* Set the height of the container to the viewport height */
                overflow: hidden; /* Hide any overflow */
            }

            .zoomed-gif {
                width: 100%; /* Make the image take up the full width of the container */
                height: 100%; /* Make the image take up the full height of the container */
                transform: scale(1.5); /* Zoom the image to 2x its original size (adjust this value as needed) */
                transform-origin: center; /* Set the zoom origin to the top left corner */
            }
            </style>

            <div class="zoom-container">
                <img class="zoomed-gif" src="/static/img/demo_gif.gif" alt="Zoomed GIF">
            </div>
            
    </div>
    """
    resp pu.htmlResponse body

################
## Routes     ##
## #############

let landing_route_path = 
    when defined(demo):
        "/live"
    else:
        "/"

let demo_landing_route_path =
    when defined(demo):
        "/"
    else:
        "/demo"

let landing_route*      = pattern(landing_route_path      , landing      )
let demo_landing_route* = pattern(demo_landing_route_path , demo_landing )
