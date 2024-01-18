import prologue
import site_comps
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import strformat, strutils
import mynimlib/nimalpine as na
import handles
import mynimlib/prologutils as pu
import sequtils
import karax / [karaxdsl, vdom, vstyles]
import consts
import dekao

################
## Components ##
################
proc blackColText(body:string) : string = 
    text(
        """
            smaller
            color = "white"
        """,
        body

    )

proc boldText(text:string, size:string):string = 
    fmt"""
        <p style = "font-size: {size} ; font-weight:bold;"> """&text&""" </p>
    """

proc italicText(text:string, size:string):string = 
    fmt"""
        <p style = "font-size: {size} ; font-style:italic;"> """&text&""" </p>
    """

proc playCard*():string = 
    let node = buildHtml(tdiv( class="bg-[#EFECEBef] rounded-lg p-4 max-w-lg mx-auto")):
        tdiv( class="text-black text-4xl font-bold uppercase"):
            vdom.text "Wide Eye Feels"
        tdiv( class="text-black text-xl tracking-widest uppercase mt-2"):
            vdom.text "Brenna"
        tdiv( id="{$play_card}", class="mt-4 relative"):
            img( src="/static/img/BFE4182D-B784-4D86-851F-31E230476773.PNG", alt="Album cover", class="w-full h-auto rounded-lg shadow-lg")
            button( class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"):
                """<svg xmlns="http://www.w3.org/2000/svg", fill="none", viewBox="0 0 24 24", stroke="currentColor", class="text-white w-10 h-10">
                    <path stroke-linecap="round", stroke-linejoin="round", stroke-width="2", d="M14.752 11.168l-6.504 3.752V7.416z", />
                </svg>""".verbatim
    return $node

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

proc chapter_accordion(
                            chapter_num        : int, 
                            chapter_carousels  : string = ""
                        ):VNode = 
    buildhTML(tdiv(x-data="{ showDropdown: false }", class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800")):
        h2( class="mb-0"):
            tdiv( class="cursor-pointer text-white p-4 flex flex-row justify-between", `@click`="showDropdown = !showDropdown" ):
                vdom.text fmt"Chapter {chapter_num}"
                """
                <svg :class="{'transform rotate-180': showDropdown}" class="fill-current text-white transition-transform duration-300" width="25px" height="25px" viewBox="0 0 24 24">
                <path d="M12,17.414 3.293,8.707 4.707,7.293 12,14.586 19.293,7.293 20.707,8.707"></path>
                </svg>
                """.verbatim
        tdiv(   x-show="showDropdown"):
            if chapter_carousels.len < 1:
                tdiv( class="px-5 py-4 bg-[red] text-center text-white"):
                    vdom.text "Coming Soon!"
            else:
                chapter_carousels.verbatim

proc buildIframes(num_iframes:int): seq[string] = 
    for ii in 0..num_iframes-1:
        result.add(
            fmt"""
            <iframe
                src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x95161d22A309C21FbC8bA674f4f38e5F91BCea30&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=401a3077a7860228da344415b67f0b08&tokenId={ii}&primaryColor=purple"
                width="600px"
                height="600px"
                style="max-width:100%;"
                frameborder="0"
            ></iframe>
            """
        
        )

proc NFTAccordions():string = 
    let node = buildHtml(tdiv(id= $nft_accordions, class="hidden", x-data="{ activeAccordion: 0 }", style = style(StyleAttr.flex, "2"))):
        # Open Chapters
        for index in 0..(consts.last_open_chapter):
            chapter_accordion(index + 1, chapter_carousel(buildIframes(7)) )
        # Unopened Chapters
        for index in (consts.last_open_chapter + 1)..6:
            chapter_accordion(index + 1)
    return $node

proc mainContent():VNode = 
    let white_panel_title_text = "BLOOD TIES (Chapter 1)"
    let white_panel_body_text = @["""
        The first song in the WIDE EYE FEELS album is called BLOOD TIES.""", 
        "In essence this song represents our attachments. ",
        """In the comic you will be able to tell the origin story of our main character and decide the details 
        of which will bring intrigue, fantasy, and thrill into the readers mind""",
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

    buildHtml(tdiv( class="flex flex-col basis-full md:basis-2/4 space-y-4")):
        tdiv( class="flex flex-col gap-4 bg-white p-4 border-8 border-black rounded-md"):
            p( class="text-3xl md:text-4xl text-center"):
                vdom.text white_panel_title_text
            for text in white_panel_body_text:
                p( class="text-lg md:text-2xl mt-2"):
                    vdom.text text


        tdiv( class="flex flex-col gap-4 bg-black p-4 border-8 border-white rounded-md text-white"):
            p( class="text-3xl md:text-4xl text-center"):
                vdom.text black_panel_title_text
            for text in black_panel_body_text:
                p( class="text-lg md:text-2xl mt-2"):
                    vdom.text text

            # p( class="text-lg md:text-2xl mt-2"):
            #     vdom.text "Once you purchase your NFT, you will be prompted to enter your mailing address" 
            #     span( class="font-bold"):
            #         vdom.text "(don't worry I won't come pay you a visit)" 
            #     vdom.text "this is where I will be sending you your collectible Loot"

proc mmainContent():string = 
    let white_panel_title_text = "BLOOD TIES (Chapter 1)"
    let white_panel_body_text = @["""
        The first song in the WIDE EYE FEELS album is called BLOOD TIES.""", 
        "In essence this song represents our attachments. ",
        """In the comic you will be able to tell the origin story of our main character and decide the details 
        of which will bring intrigue, fantasy, and thrill into the readers mind""",
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

proc presale_card*():string = 
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

proc loading_box*():string = 
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


template base*(bbody:untyped): untyped = 
    html:
        lang "en"
        head:
            say """
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                """
            title:
                say "WIDE EYE FEELS"
            say """<link rel="stylesheet" href="/static/styles.css">"""
            say """<script src="https://cdn.tailwindcss.com"></script>"""
        body:
            bbody



####################
## Route Handlers ##
## #################
proc landing*(ctx: Context) {.async.} =
    # let body = ppostNavCol("flex flex-col md:flex-row gap-4 md:gap-16 px-4 md:px-[10vw] py-[10vh]  text-black"):
    #     mainContent()
    #     tdiv(class="flex flex-col gap-4 basis-2/4 "):
    #         playCard().verbatim
    #         NFTAccordions().verbatim
    #         loading_box().verbatim
    #         presale_card().verbatim

    let body = render:
        base:
            say "<script type='module' src='/static/js/landing_page_fe.js'></script>"
            say "Body"

    resp pu.htmlResponse body

    # resp pu.htmlResponse base( 
    #         "<script type='module' src='/static/js/landing_page_fe.js'> </script>" &
    #         top_nav_2() & $body
            
        
        
        
        
    #     )

################
## Routes     ##
## #############
let landing_route* = pattern("/", landing )
