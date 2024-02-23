import mynimlib/nimwebc   as nwc
import strformat, strutils
import mynimlib/nimwind as nw
import mynimlib/[nimhtml, nimalpine, nimwind2]
import karax / [karaxdsl, vdom, vstyles]
import handles
import dekao
import mynimlib/webui/nav/nav
export dekao 

proc top_nav_2*():string = render:
    let logo = render:
        say "<!-- Logo -->"
        a:
            href  "/"
            class "nostyle"
            img:
                src   "/static/img/nav_logo.png"
                alt   "Logo"
                class "h-16"
    
    let buttons = render:

            
            say "<!-- Get NFT Button -->"
            a:
                href  "/"
                class "nostyle"
                button:
                    class " transition duration-300 hover:bg-black hover:text-[#D02F3A] bg-[#D02F3A] px-4 sm:px-6 py-2 rounded-lg transition duration-300 hover:scale-105"
                    say "Get NFT"

            say "<!-- Contribute and FAQ Buttons -->"
            for item in @[("Contribute", "/contribute"), ("Community", "#")]:
                a:
                    href      item[1]
                    class     "nostyle py-4 md:py-2"
                    button:
                        class " text-white hover:text-gray-400 transition-colors duration-300"
                        say   item[0]
    
    let connect_wallet_btn = render:
        tdiv:
            class "hidden md:flex items-center"
            say "<w3m-button />"
    
    let hamb = """
        <svg class= "w-[50px] cursor-pointer md:hidden" fill="white" @click="showMobile = !showMobile" version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve">
            <g>
                <rect x="4" y="5" width="16" height="2"></rect>
                <rect x="4" y="11" width="16" height="2"></rect>
                <rect x="4" y="17" width="16" height="2"></rect>
            </g>
        </svg>
    """
    
    nav_comp("bg-[#45474F99] px-6 py-3 sm:px-12 top-0 z-10 w-full"):
        nav_wide("justify-between"):
            say logo
            
            say "<!-- Buttons Row -->"
            tdiv:
                class "hidden md:flex  flex-row md:gap-4 justify-center items-center flex-1 text-sm lg:text-xl"
                say buttons

            say connect_wallet_btn
            say hamb
        nav_mobile("mt-4 md:hidden"): 
            x_trans_enter       "transition ease-out duration-300"
            x_trans_enter_start "opacity-0"
            x_trans_enter_end   "opacity-100"
            x_trans_leave       "transition ease-in duration-200"
            x_trans_leave_start "opacity-100"
            x_trans_leave_end   "opacity-0"
            tdiv:
                class "flex flex-col gap-4"
                say "<!-- Buttons Column -->"
                tdiv:
                    class "flex flex-col gap-4"
                    say buttons
                tdiv:
                    class "flex items-center"
                    say "<w3m-button />"




template postNavCol*(classs:string , body:untyped): untyped = 
    tdiv:
        class classs
        body


template bbase*(bbody:untyped): untyped = 
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
            say """<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>"""
        body:
            bbody