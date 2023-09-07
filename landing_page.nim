import prologue
import site_comps
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import strformat, strutils
import mynimlib/nimalpine as na
import std/sugar
import consts


################
## Components ##
## #############
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
    # Desktop / Tablet
    nw.row(
            nw.row(

                nw.col(                    
                        ddiv(
                            """
                                style=" 
                                cursor: pointer;
                                background-color: black;
                                padding: 1vh;
                                border-radius: 10%;
                                display: block;
                                "
                            """,
                            """
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="100px" height="100px" style="display: block; margin:auto;">
                                    <path d="M5.5,4 L18.5,12 L5.5,20 L5.5,4 Z" />
                                </svg> 
                            """
                        ), 
                        head="""id="play-card-info-play-btn"""",
                        itemposv = "c"
                    )&
                nw.col(                    
                    text(
                        """
                            largest
                            bold
                        """,
                        "WIDE EYE FEELS"
                        )&
                    text(
                        """
                            small
                            bold
                        """,
                        "Brenna"
                    ), 
                    head = """id="play-card-info-text"style=" width: 100%;" """,
                    itemposv = "c"
                    
                
                ),
                gap = "2vw"

            )&

            nw.col(
                """
                <img 
                    src="/static/img/BFE4182D-B784-4D86-851F-31E230476773.PNG" 

                    style="  
                    width: 200px;
                    height: auto;
                    border-radius: 3%;
                "
                >
                """,
                itemposv = "c"
            ),

            round = "10px"          ,
            p = "py-[2vw] px-[4vw]" ,
            itemposh = 3            ,
            itemposv = 4            ,
            bgColor = "#EFECEBef"   ,
            whenBelow = (750, @["hidden"]),
            name = "play card dekstop / tablet"

        )&

    # Mobile
    nw.col(
            nw.col(
                """
                <img 
                    src="/static/img/BFE4182D-B784-4D86-851F-31E230476773.PNG" 

                    style="  
                    width: 100%;
                    height: auto;
                    border-top-left-radius: 10px;     
                    border-top-right-radius: 10px;     
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0; 
                "
                >
                """,
                itemposv = "c"
            )&
            nw.row(

                nw.col(                    
                        ddiv(
                            """
                                style=" 
                                cursor: pointer;
                                background-color: black;
                                padding: 1vh;
                                border-radius: 10%;
                                display: block;
                                "
                            """,
                            """
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="20vw" height="20vw" style="display: block; margin:auto;">
                                    <path d="M5.5,4 L18.5,12 L5.5,20 L5.5,4 Z" />
                                </svg> 
                            """
                        ), 
                        head="""id="play-card-info-play-btn"""",
                        itemposv = "c"
                    )&
                nw.col(                    
                    """<p style = "font-size: 8vw; font-weight:bold;"> WIDE EYE FEELS </p>"""&
                    """<p style = "font-size: 3vw; font-weight:bold;"> Brenna </p>""", 
                    head = """id="play-card-info-text"style=" width: 100%;" """,
                    itemposv = "c"
                    
                
                ),
                gap = "2vw",
                w = "full",
                itemposh = "between",
                p = "p-4",
                name = "play card mobile info"

            ),

            round = "10px"          ,
            #p = "py-[2vw] px-[4vw]" ,
            itemposh = "c"            ,
            itemposv = "c"            ,
            bgColor = "#EFECEBef"   ,
            extra_class = "hidden",
            whenBelow = (750, @["flex"]),
            name = "play card Mobile",
            gap = "4vh"

        )

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
                            chapter_num        :int, 
                            xacc_btn_logic     :string, 
                            xacc_content_logic :string, 
                            chapter_carousels  :string = ""
                        ):string = 
    if chapter_carousels.len < 1:
        fmt"""
        <!-- Chapter {chapter_num} Accordion : COMING SOON -->
        <div class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            
                <h2 class="mb-0"  {xacc_btn_logic}>
                    
                    <button class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&amp;:not([data-te-collapse-collapsed])]:bg-white [&amp;:not([data-te-collapse-collapsed])]:text-primary [&amp;:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&amp;:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&amp;:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&amp;:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]" type="button" data-te-collapse-init="" data-te-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Chapter {chapter_num}
                        <span class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </span>
                    </button>
                </h2>
                
                <div {xacc_content_logic}  class="!visible" data-te-collapse-item="" data-te-collapse-show="" aria-labelledby="headingOne" data-te-parent="#accordionExample">
                    <div class="px-5 py-4 bg-[red] text-center text-white">
                        Coming Soon!
                    </div>

                </div>
        
        </div>

        """
    else:
        fmt"""
        <!-- Chapter {chapter_num} Accordion -->
        <div class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            
                <h2 class="mb-0"  {xacc_btn_logic}>
                    
                    <button class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&amp;:not([data-te-collapse-collapsed])]:bg-white [&amp;:not([data-te-collapse-collapsed])]:text-primary [&amp;:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&amp;:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&amp;:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&amp;:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]" type="button" data-te-collapse-init="" data-te-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Chapter {chapter_num}
                        <span class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </span>
                    </button>
                </h2>
                
                <div {xacc_content_logic}  class="!visible" data-te-collapse-item="" data-te-collapse-show="" aria-labelledby="headingOne" data-te-parent="#accordionExample">

                {chapter_carousels}

                </div>
        
        </div>

        """

proc NFTAccordions():string = 
    let acc = na.xacc(7)
    proc buildIframes(num_iframes:int): seq[string] = 
        for ii in 0..num_iframes-1:
            result.add(
                fmt"""
                <iframe
                    src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0xc2DDB991A1c1Cec4d7f735842e74F6F0c02123f0&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=c52f1313822ff572db2581450400e3a4&tokenId={ii}&primaryColor=purple"
                    width="600px"
                    height="600px"
                    style="max-width:100%;"
                    frameborder="0"
                ></iframe>
                """
            
            )
    let chapter_accordions = @[
        if consts.demo == false: 
            chapter_accordion(1, acc.items[0].btn, acc.items[0].content, chapter_carousel(buildIframes(2)) ) 
        else: 
            chapter_accordion(1, acc.items[0].btn, acc.items[0].content, ),
        chapter_accordion(2, acc.items[1].btn, acc.items[1].content, ),
        chapter_accordion(3, acc.items[2].btn, acc.items[2].content, ),
        chapter_accordion(4, acc.items[3].btn, acc.items[3].content, ),
        chapter_accordion(5, acc.items[4].btn, acc.items[4].content, ),
        chapter_accordion(6, acc.items[5].btn, acc.items[5].content, ),
        chapter_accordion(7, acc.items[6].btn, acc.items[6].content, ),

    ]
    """
    <div id="accordionExample" __top__ style = "flex:2">
        __chapter_accordions__
    
    </div>
    """.multiReplace(@[
        ( "__top__"                , acc.top                       ),
        ( "__chapter_accordions__" , chapter_accordions.join("\n") ),
        
        ])

proc mainContent():string = 
    let connectWallet = 
        nwc.col( 
            """
                _name   = "buy-nft-card"
                round
                gap     = "5vh"
                colItemPosition="1"

                padding = "0px"
                style="  
                    flex: 2;
                "
            """,

                """
                <iframe
                    src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0xF6A5e6Fb034Be432c36dc2ebcf872BDC465902ED&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%7D&primaryColor=purple"
                    width="600px"
                    height="900px"
                    style="max-width:100%; "
                    frameborder="0"
                >
                </iframe>
                """

        )

    let connectWallet2 = 
        nwc.col( 
            """
                _name   = "buy-nft-card"
                round
                gap     = "5vh"
                colItemPosition="1"

                padding = "0px"
                style="  
                    flex: 2;
                "
            """,

                """
                <iframe
                    src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0xc2DDB991A1c1Cec4d7f735842e74F6F0c02123f0&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=c52f1313822ff572db2581450400e3a4&tokenId=0&primaryColor=purple"
                    width="600px"
                    height="600px"
                    style="max-width:100%;"
                    frameborder="0"
                ></iframe>
                """

        )
    

    let contentCol = 
        nwc.col( 
            """
            id="main-content-text"
            bgColor = "#EFECEBef"
            round
            colItemPosition = 1
            border-radius = "10px"
            padding = 0
            gap = 3vh
            style="  
                flex: 3;
            "
            """,
        

            # Top Text
            nwc.col( 
                    """
                    _name="top-text"
                    padding = 5vh
                    """,
                    boldText("BLOOD TIES (Chapter 1)", "4vw")&
                
                    italicText(
                        """
                        The first song in the WIDE EYE FEELS album is called BLOOD TIES. 
                        In essence this song represents our attachments. 
                        In the comic you will be able to tell the origin story of our main character and decide the details 
                        of which will bring intrigue, fantasy, and thrill into the readers mind
                        """,
                        "2vw"
                    )
            )&
            
            # Black Col
            nwc.col(
                """
                id="text-black-col"
                padding = 10vh
                round 
                bgColor = "black"
                textColor = "white"
                padding = 0px
                """,
            
                blackColText("Comic Creation")&

                blackColText(
                    """
                    There will be 7 chapters (a chapter for each song in the album) in the Wide Eye Feels Comic book. 
                    As a collector, you will be a part of co-creating the MVP comic!!
                    """

                )&

                blackColText(
                    """
                    Each chapter will be a new “cluster”
                    """
                )&

                nwc.row(
                    nwc.col(

                        """
                        gap = 3vh
                        """,
                        blackColText(
                            """
                            Once you purchase your NFT, you will be prompted to enter your mailing address, (don’t worry I won’t come pay you a visit) this is where I will be sending you your “key” 🔑
                            """
                        )&

                        blackColText(
                            """
                            Upon the purchase of your NFT, refresh your screen and you will enter into the Comic Creation Zone 
                            """

                        )&

                        blackColText(
                            """
                            Here, you will make use of trained AI that will help you write your section of the comic book.
                            """ 
                        )&
                    
                        blackColText(
                            """
                            As a collector,  in collaboration with a trained AI mechanism , you will have your own  unique section to write about!
                            """
                        )
                    )&

                    nwc.col( 
                        """
                        class="right"
                        gap = 3vh
                        """,
                        
                        """
                            <img 
                            src="/static/img/Artizan Artifact (WEF Comic).png" 
                            style="  
                                width: 100%;
                                height: auto;
                                border-radius: 3%;
                            "
                            >

                        """&

                        blackColText(
                        """
                        <span style="font-weight: bold;">CLUSTER</span> , a group of 7 people working on a single chapter of the WEF comic book
                        """
                        )&

                        blackColText(
                        """
                        <span style="font-weight: bold;">KEY</span>, a physical representation of your digital NFT
                        """
                        )
                    )
                )
            )
        )   
    
    let contentColMobile = 
        ""
    
    # Desktop Main Content
    nw.row(
        contentCol &
        NFTAccordions(),
        #connectWallet2,
        
        gap       = "5vh",
        whenBelow = (900, @["hidden"]),
        name      = "main-content desktop"
    )&

    # Mobile Main Content
    nw.col(
        contentCol &
        NFTAccordions(),
        #connectWallet2,

        gap         = "5vh",
        whenBelow   = (900, @["flex"]),
        extra_class = "hidden",
        name        = "main-content mobile"
    )

proc demo_video():string = 
    """
    <video width="full" height="full" autoplay loop muted style="border-radius:10px">
        <source src="/static/img/demo_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    """

####################
## Route Handlers ##
## #################

proc landing*(ctx: Context) {.async.} =
  var headers = initResponseHeaders()
  headers.add("Cache-Control", "no-cache, no-store, must-revalidate")
  resp htmlResponse(
      if not consts.demo:
        base(
            top_nav()&
            postNavCol(
                playCard()&
                mainContent()
                )
        )
      else:
        base(
            top_nav()&
            postNavCol(
                        grey_card(
                            demo_video()
                        )
                )
        ),
      headers = headers
  )


################
## Routes     ##
## #############
let landing_route* = pattern("/", landing, @[HttpGet],)
