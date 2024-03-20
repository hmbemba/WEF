import prologue
import comps
import consts
import strformat, sequtils, strutils, json
import mynimlib/[nimwind2, prologutils]
import karax / [karaxdsl, vdom, vstyles]
import nimtinydb
import icecream/src/icecream
import mynimlib/webui/modal/modal



type 
  contact = object 
    email:   string
    address: string
    city:    string
    state:   string
    country: string
    zipcode: string
    addy:    string
  owners  = object
    nft_holder_addy : string
    nfts_owned      : seq[int]

################
## Components ##
################


proc red_card():VNode = 
    buildHtml(tdiv(id="red-card", class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#D02F3A] p-[5vh] rounded-[2vh]")):
        p(id = "get-nfts-loader", class = "text-center " & tcolor"white"):
          vdom.text "Getting Your NFTS..."


proc contact_form : string = render:
    modal_bkg("hidden"):
        modal_container("max-w-xl"):
            modal_body:
                form:
                    class "text-red flex flex-col gap-4 bg-[#45474Fdd] p-6 rounded-lg shadow-lg"
                
                    say "<!-- Header Section -->"
                    tdiv:
                        class "flex justify-between"
                        h2:
                            class "text-white text-2xl font-bold text-center mb-4" 
                            say   "Shipping Details"
                        button:
                            class "text-black close-modal text-5xl"
                            #id    "close-contact-form"
                            modal_close_btn ""
                            say   "X"

                    say "<!-- Email Input -->"
                    tdiv:
                        class "mb-4"
                        label:
                            class "block text-white text-sm font-bold mb-2"
                            tfor   "email"
                            say   "Email:"
                        input:
                            id           "email"
                            class        "input-field"
                            ttype        "email"
                            name         "email"
                            required     "true"
                            placeholder  "you@example.com"

                    say "<!-- Address Input -->"
                    tdiv:
                        class "mb-4"
                        label:
                            class  "block text-white text-sm font-bold mb-2"
                            tfor   "address" 
                            say    "Address:"
                        input:
                            id          "address"
                            class       "input-field"
                            ttype       "text"
                            name        "address" 
                            required    "true"
                            placeholder "1234 Street Ave"

                    say "<!-- City and State Inputs -->"
                    tdiv:
                        class "grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4"
                        tdiv:
                            label:
                                class "block text-white text-sm font-bold mb-2"
                                tfor  "city" 
                                say   "City:"
                            input:
                                id "city"
                                class "input-field"
                                ttype  "text"
                                name  "city"
                                required  "true"
                                placeholder  "City"
                        tdiv:
                            label:
                                class  "block text-white text-sm font-bold mb-2"
                                tfor   "state" 
                                say "State:"
                            input:
                                id "state"
                                class "input-field"
                                ttype  "text"
                                name  "state"
                                required  "true"
                                placeholder  "State"

                    say "<!-- Country and Zip Code Inputs -->"
                    tdiv:
                        class "grid grid-cols-1 md:grid-cols-2 md:gap-4 mb-4"
                        tdiv:
                            label:
                                class "block text-white text-sm font-bold mb-2"
                                tfor  "country" 
                                say "Country:"
                            select:
                                id        "country"
                                class     "w-full"
                                name      "country"
                                required  "true"
                                dekao.option:
                                    value  "United States" 
                                    say    "United States"
                        tdiv:
                            label:
                                class "block text-white text-sm font-bold mb-2" 
                                tfor   "zipcode" 
                                say   "Zip Code:"
                            input:
                                id           "zipcode"
                                class        "w-full"
                                ttype        "number"
                                name         "zipcode"
                                required     "true"
                                placeholder  "Zip Code"

                    say "<!-- Submit Button -->"
                    button:
                            class "bg-[#D02F3A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out hover:bg-red-700 transform hover:-translate-y-1 hover:scale-101" 
                            ttype "submit"
                            say   "Submit"

                    
proc triple_card*(): VNode =
    proc card(img_url:string, body_text, title_text:string): VNode = 
        buildHtml(tdiv(class="flex flex-col items-center space-y-5  rounded-lg p-2")):
            img(src=img_url, alt="Theme Image", class=" h-48 object-cover rounded-lg shadow-lg")
            h2(class="text-white text-xl font-semibold"): 
                vdom.text title_text
            p(class="text-white text-center"):
                vdom.text body_text
    
    let cards = @[
        card("/static/img/contrib_page_1.png", "Your NFT has a specific theme and section. You’re unique! And have the power to drastically change the story..."   , "Theme"),
        card("/static/img/contrib_page_2.png", "Playing a multiple endings game, you will create a script to be used for the final MVP of your chapter section."   , "Story"),
        card("/static/img/contrib_page_3.png", "Once you’re complete, you will be prompted to submit your section and we will move onto the next steps in Discord!", "Submit")
        ]
    buildHtml tdiv(class="rounded-[20px] bg-black bg-opacity-70 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"):
            for card in cards:
                card

proc err_card*(err_msg: string): VNode = 
    verbatim(fmt"""<div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
    </svg>
    <p class="w-full text-center">
        {err_msg}
    </p>
    </div>""")

################
## Routes     ##
################
  
proc contribute_page*(ctx: Context) {.async gcsafe.} =
    let contact_form = contact_form()
    let err_flash  = ctx.getErrFlash(consts.flash_token_name)
    if err_flash.isSome():
        ic "err_flash: " & err_flash.get.message
    let top_nav_2 = top_nav_2()
    let body = render:
        bbase:
            say """<script type="module" src="/static/js/contribute_page_fe.js"></script>"""
            
            say "<!-- Top Nav -->"
            say top_nav_2

            tdiv:
                class "px-[10vw] py-[40px] gap-5vh"
                say contact_form

            if err_flash.isSome():
                say $err_card(err_flash.get.message)
            
            say "<!-- Post Nav Col -->"
            postNavCol("flex flex-col gap-4 px-4 lg:px-10"):
                say $triple_card() 
                say $red_card()
    
    resp prologutils.htmlResponse(body, headers = @[del_cookie_header(consts.flash_token_name)])


proc contact_form_submit*(ctx: Context) {.async.} =
    ic "Incoming Post request"
    let nft_holder_addy = ctx.getPathParamsOption("nft_holder_addy")
    if nft_holder_addy.isNone():
        await ctx.respond(Http400, "Missing nft_holder_addy")

    ic "nft_holder_addy: " & nft_holder_addy.get

    ic $(ctx.request)
    let email   = ctx.getFormParamsOption("email")
    let address = ctx.getFormParamsOption("address")
    let city    = ctx.getFormParamsOption("city")   
    let state   = ctx.getFormParamsOption("state")  
    let country = ctx.getFormParamsOption("country")
    let zipcode = ctx.getFormParamsOption("zipcode")

    if email.isNone() or address.isNone() or city.isNone() or state.isNone() or country.isNone() or zipcode.isNone():
        await ctx.respond(Http400, "Missing form params")
    
    let contact_info = contact(
        email:   email.get,
        address: address.get,
        city:    city.get,
        state:   state.get,
        country: country.get,
        zipcode: zipcode.get,
        addy:    nft_holder_addy.get()
    )

    ic "contact_info: " & $(contact_info)

    let contact_db = newTinyDB(consts.db_path,"contact_db")
    let insert_req = contact_db.insert(%contact_info)
    if not insert_req.ok:
        icr insert_req.err 
        await ctx.respond(Http500, "Failed to insert contact info into db \n" & insert_req.err)
    
    ic "Successfully inserted contact info into db with the doc_id of : " & $(insert_req.doc_id.get)
    await ctx.respond(Http200, "Successfully inserted contact info into db")

proc add_nfts*(ctx: Context) {.async.} =
    ic "Incoming Post request"

####################
## Route Handlers ##
####################

let contribute_route*          = pattern("/contribute", contribute_page, @[HttpGet])
let contact_form_submit_route* = pattern("/contribute/contact-form/{nft_holder_addy}", contact_form_submit, @[HttpPost])
let add_nfts_route*            = pattern("/addnft", add_nfts, @[HttpPost])


