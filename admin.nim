# Wallets that bought NFT
# Wallet address: string
# When they bought: datetime string
# Which NFT they bought 0..48 : seq[int]



import prologue
import mynimlib/[nimjwtauth]
import strutils
import strformat
import comps
import karax / [karaxdsl, vdom]
import consts
import tinydb/src/tinydb
import icecream/src/icecream


#####################
## Handlers #########
#####################

proc login*(ctx: Context) {.async.} =
    case ctx.request.reqMethod:
        of HttpGet:  
            let node = buildHtml(tdiv( class="bg-[#45474F99] p-4 rounded-lg max-w-xs mx-auto my-8")):
                form( action="/login", `method`="post"):
                    tdiv( class="`for`m-group mb-4"):
                        input( `type`="password", id="password", name="password", placeholder="Enter password", class="w-full p-2 text-xl text-white bg-transparent border-b-2 border-white outline-none placeholder-white focus:border-[#D02F3A]")

                    button(`type`="submit", class="w-full text-xl text-white bg-[#D02F3A] px-4 py-2 rounded-lg transition duration-300 hover:scale-105"):
                        vdom.text "Submit"
            
            let body = render:
                bbase:
                    say $node
            
            resp body
        of HttpPost:
            let password = ctx.getFormParamsOption("password")
            if password.isNone:
                icr "No password"
                resp redirect "/login"
            if password.get == consts.password:
                icr "Correct password"
                #ctx.push_access_token("admin", consts.jwt_secret, %*{}, consts.admin_access_token)
                resp jwtRedirect("/admin", "admin", consts.jwt_secret, %*{}, consts.admin_access_token)
                #resp redirect "/admin"
            else:
                icr "Wrong password"
                resp redirect "/login"
        else:
            discard


proc admin*(ctx: Context) {.async.} =  
    let current_user = ctx.get_current_user(
                                            consts.admin_access_token, 
                                            consts.jwt_secret, 
                                            true, 
                                            30.days, 
                                            false
                                        )
    let is_admin = current_user.is_authenticated

    if not is_admin:
        resp redirect "/login"
        return

    let db = newTinyDB(consts.db_path)
    let body = render:
        bbase:
            say """<a class="text-white" href = "https://jsonformatter.org/json-pretty-print" target="_blank"> https://jsonformatter.org/json-pretty-print </a>"""
            say """<div class="text-white" > """ & $db.allRaw() & """ </div>"""
    resp body
    #resp base """<a class="text-white" href = "https://jsonformatter.org/json-pretty-print" target="_blank"> https://jsonformatter.org/json-pretty-print </a>""" & fmt"""<div class="text-white" > {$db.allRaw()} </div>"""
    
#####################
## Routes ###########
#####################

let admin_route* = pattern("/admin"   , admin)
let login_route* = pattern("/login"   , login, @[HttpGet, HttpPost])
