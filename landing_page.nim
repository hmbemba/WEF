import prologue
import site_comps
import mynimlib/nimwebc as nwc
import mynimlib/nimwind as nw
import strformat, strutils
import mynimlib/nimalpine as na
import std/sugar
import consts
import mynimlib/prologutils as pu
import sequtils, strutils


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

# proc playCard*():string = 
#     nw.col(
#             # Image
#             nw.col(
#                 """
#                 <img 
#                     src="/static/img/BFE4182D-B784-4D86-851F-31E230476773.PNG" 

#                     style="  
#                     width: 100%;
#                     height: auto;
#                     border-top-left-radius: 10px;     
#                     border-top-right-radius: 10px;     
#                     border-bottom-left-radius: 0;
#                     border-bottom-right-radius: 0; 
#                     border-radius: 10px;
#                 "
#                 >
#                 """,
#                 itemposv = "c",
#                 p = "p-4",
#             )&
#             # Info
#             nw.row(

#                 # Play Button
#                 nw.col(                    

#                         """
#                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="100%"  style="display: block; margin:auto;">
#                                 <path d="M5.5,4 L18.5,12 L5.5,20 L5.5,4 Z" />
#                             </svg> 
#                         """
#                         , 
#                         head="""id="play-card-info-play-btn"""",
#                         itemposv = "c",
#                         bgColor  = "black",
#                         extra_class = "rounded-2xl"
#                     )&
                
#                 # Actual Info
#                 nw.col(                    
#                     nw.text("WIDE EYE FEELS", "text-6xl")&
#                     nw.text("Brenna", text_size.xxl),
#                     head     = """id="play-card-info-text" """,
#                     itemposv = "c"
                    
                
#                 ),
#                 gap = "2vw",
#                 w = "full",
#                 itemposh = "between",
#                 p = "p-4",
#                 name = "play card mobile info"

#             ),

#             round = "10px"          ,
#             itemposh = "c"            ,
#             itemposv = "c"            ,
#             bgColor = "#EFECEBef"   ,
#             name = "play card Mobile",
#             gap = "4vh"

#         )

proc playCard*():string = 
    """
    <div class="bg-[#EFECEBef] rounded-lg p-4 max-w-sm mx-auto">
    <div class="text-black text-4xl font-bold uppercase">Wide Eye Feels</div>
    <div class="text-black text-xl tracking-widest uppercase mt-2">Brenna</div>
    <div class="mt-4 relative">
        <img src="/static/img/BFE4182D-B784-4D86-851F-31E230476773.PNG" alt="Album cover" class="w-full h-auto rounded-lg shadow-lg">
        <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-white w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-6.504 3.752V7.416z" />
        </svg>
        </button>
    </div>
    </div>
    """


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

        chapter_accordion(1, acc.items[0].btn, acc.items[0].content, chapter_carousel(buildIframes(2)) ),
        chapter_accordion(2, acc.items[1].btn, acc.items[1].content, ),
        chapter_accordion(3, acc.items[2].btn, acc.items[2].content, ),
        chapter_accordion(4, acc.items[3].btn, acc.items[3].content, ),
        chapter_accordion(5, acc.items[4].btn, acc.items[4].content, ),
        chapter_accordion(6, acc.items[5].btn, acc.items[5].content, ),
        chapter_accordion(7, acc.items[6].btn, acc.items[6].content, ),

    ]
    """
    <!-- NFT Accordions -->
    <div class="hidden" id="nft-accordions" __top__ style = "flex:2">
        __chapter_accordions__
    
    </div>
    """.multiReplace(@[
        ( "__top__"                , acc.top                       ),
        ( "__chapter_accordions__" , chapter_accordions.join("\n") ),
        
        ])

proc mainContent(extra_class:string=""):string = 
    # let connectWallet = 
    #     nwc.col( 
    #         """
    #             _name   = "buy-nft-card"
    #             round
    #             gap     = "5vh"
    #             colItemPosition="1"

    #             padding = "0px"
    #             style="  
    #                 flex: 2;
    #             "
    #         """,

    #             """
    #             <iframe
    #                 src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0xF6A5e6Fb034Be432c36dc2ebcf872BDC465902ED&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%7D&primaryColor=purple"
    #                 width="600px"
    #                 height="900px"
    #                 style="max-width:100%; "
    #                 frameborder="0"
    #             >
    #             </iframe>
    #             """

    #     )

    # let connectWallet2 = 
    #     nwc.col( 
    #         """
    #             _name   = "buy-nft-card"
    #             round
    #             gap     = "5vh"
    #             colItemPosition="1"

    #             padding = "0px"
    #             style="  
    #                 flex: 2;
    #             "
    #         """,

    #             """
    #             <iframe
    #                 src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc1155.html?contract=0xc2DDB991A1c1Cec4d7f735842e74F6F0c02123f0&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22goerli%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=c52f1313822ff572db2581450400e3a4&tokenId=0&primaryColor=purple"
    #                 width="600px"
    #                 height="600px"
    #                 style="max-width:100%;"
    #                 frameborder="0"
    #             ></iframe>
    #             """

    #     )
    

    
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
        As a collector, you will be a part of co-creating the MVP comic!!
        Each chapter will be a new “cluster”
        """,
        "Each chapter will be a new “cluster”",
        "Once you purchase your NFT, you will be prompted to enter your mailing address,", 
        "(don't worry I won't come pay you a visit)",
        "this is where I will be sending you your collectible Loot",
        ]
    
    let white_panel = 
        nw.col(

            nw.text(white_panel_title_text, text_size.xxxl, whenBelow=(600, @["text-center"])) & 
            white_panel_body_text.mapIt(nw.text(it, text_size.large)).join("\n") ,
            p = "p-4",
            gap = 4,
            extra_class = fmt"border-[15px] border-black max-w-[800px]",
            bgColor = "white",
            whenAbove = (800, @["items-center"])
        )
    let black_panel = 
        nw.col(

            nw.text(black_panel_title_text, text_size.xxxl, whenBelow=(600, @["text-center"])) & 
            black_panel_body_text[0..1].mapIt(nw.text(it, text_size.large)).join("\n") &
            nwc.ddiv(
                        body = 
                            black_panel_body_text[2] & 
                            fmt"<span class='font-bold'> {black_panel_body_text[3]} </span> " &
                            black_panel_body_text[4]
                            , 
                        head = 
                            "class='text-xl'"
                    )
            
             ,
            p = "p-4",
            gap = 4,
            extra_class = "border-[15px] border-white roboto-font text-white",
            bgColor = "black",
            whenAbove = (800, @["items-center"])

        )

    nw.col(
        white_panel & black_panel,
        name        = "main-content",
        extra_class = extra_class,
    )

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
        head = "id='presale-card'",
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
        head = "id='loading-box'",
        round = "10px"          ,

    )

####################
## Route Handlers ##
## #################
proc landing*(ctx: Context) {.async.} =
  resp pu.htmlResponse base( 
            "<script src='/static/js/landing_page_fe.js'> </script>" &
            top_nav() &
            
            nw.row(
                        mainContent(extra_class = "basis-2/3 leading-[6vh]")&
                        nw.col(
                            playCard()&
                            NFTAccordions() & 
                            loading_box() &
                            presale_card()
                            ,
                            gap         = 4,
                            name        = "right side",
                            extra_class = "basis-1/3",
                            
                        ),
                        
                        p           = "px-[5vw] py-[40px]",
                        gap         = "5vh",
                        head        = """style=color:black;""",
                        #extra_class = "hidden",
                        #whenAbove   = (800, @["flex"]),
                        name        = "post nav col desktop"
                        
            )&
            """
            <img src="/static/img/arrows.png">
            """&
            
            """
<script>
// Get the target date (January 1st, 2024)
var targetDate = new Date("2024-01-01T00:00:00Z");

// Function to update the digital clock countdown
function updateCountdown() {
    // Get the current date and time
    var currentDate = new Date();

    // Calculate the time remaining
    var timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.getElementById("countdown").innerHTML = "00:00:00:00";
        clearInterval(countdownInterval);
    } else {
        // Convert time remaining to days, hours, minutes, and seconds
        var days = Math.floor(timeRemaining / 86400000); // 1 day = 24 * 60 * 60 * 1000
        var hours = Math.floor((timeRemaining % 86400000) / 3600000); // 1 hour = 60 * 60 * 1000
        var minutes = Math.floor((timeRemaining % 3600000) / 60000); // 1 minute = 60 * 1000
        var seconds = Math.floor((timeRemaining % 60000) / 1000); // 1 second = 1000 milliseconds

        // Format the time as "00:00:00:00 days:hours:minutes:seconds"
        var formattedTime =
            padNumber(days) + ":" +
            padNumber(hours) + ":" +
            padNumber(minutes) + " :" +
            padNumber(seconds) ;

        // Display the digital clock countdown
        document.getElementById("countdown").innerHTML = formattedTime;
    }
}

// Function to pad a number with leading zeros
function padNumber(number) {
    return number.toString().padStart(2, '0');
}

// Update the digital clock countdown immediately and every second
updateCountdown();
var countdownInterval = setInterval(updateCountdown, 1000);

</script>
"""
        
        
        
        
        )

################
## Routes     ##
## #############
let landing_route* = pattern("/", landing )
