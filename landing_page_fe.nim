import mynimlib/[nimjs, icecream, nimThirdweb, nimEthers as ethers]
import std/jsfetch
import std/[asyncjs, jsconsole, jsformdata, jsheaders]
import strutils, strformat, tables, sequtils
import dom
import consts
import std/enumerate
import jsony
from std/httpcore import HttpMethod
from std/jsffi import JsObject
from std/sugar import `=>`
import times
import std/jsfetch


let presale_end_date = parse("2024-10-29", "yyyy-MM-dd")

proc presale_is_happening(date = presale_end_date): bool = date > now()

proc get_client_wallet_from_local_storage(): tuple[is_connected:bool, addy:cstring] = 
    let addy = "user_wallet_address".grab_val_from_local_storage
    if addy.isNone():
        return (false, "".cstring)
    return (true, addy.get())

proc is_whitelisted(addy:string | cstring): Future[bool] {. async .} = 
    let req = await get(fmt"/whitelist/{addy}".cstring)
    if req.status == 200:
        return true
    return false

document.DomContentLoaded( 
    proc (e:Event) {. async .} = 
        let nft_accordions = gebi_strict "nft-accordions" 
        let presale_card   = gebi_strict "presale-card"
        let loading_box    = gebi_strict "loading-box"

        if presale_is_happening():
            ic "Presale is happening"
            let client_wallet = get_client_wallet_from_local_storage()
            if not(client_wallet.is_connected):
                ic "Client wallet is not connected"
                ic "Show countdown"
                loading_box.remove()
                presale_card.toggleHidden()
            else:
                ic "Client wallet is connected"

                if not (await client_wallet.addy.is_whitelisted): 
                    ic "Client wallet is not whitelisted"
                    ic "Show countdown"
                    loading_box.remove()
                    presale_card.toggleHidden()
                else:
                    ic "Client wallet is whitelisted"
                    ic "Show nft accordion"
                    loading_box.remove()
                    nft_accordions.toggleHidden()
        else:
            ic "Presale has ended"
            ic "Show nft accordion"
            loading_box.remove()
            nft_accordions.toggleHidden() 


)




#5proc get_contract --> newEthersContract
# proc getSectionOwners(c:chapter) =
#     let contract = c.get_contract()
#     for index in c.num_editions:

# import time
# const countdown = ...

# ____
# Landing_fe.nim

# let whitelist = await fetch("/whitelist")

# let client_wallet_addr =     get_wallet_addr_from_local_storage

# Send the presale card out as a spinner

# need to export osme of this logic to nav_fe
# when connected
# if presale_card.isSome
#   if the user is whitlisted
#       show nft accordion
    












