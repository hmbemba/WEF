import mynimlib/[nimjs, icecream, nimThirdweb]
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



{. emit: """
import {MetaMaskWallet, ethers} from "./thirdweb/dist/thirdweb.js";
""" .}

let connect_wallet_btn {. exportc: "connect_wallet_btn" .} = gebi_strict "connect-wallet-btn"
let wallet_address_btn = gebi_strict "wallet-address-btn"

proc show_connect_wallet_or_addr() = 
    if not "user_wallet_address".in_local_storage:
        ic "user_wallet_address not in local storage"
        # show connect wallet btn
        connect_wallet_btn.rmClass "hidden"
    else:
        # Hide connect wallet btn
        connect_wallet_btn.toggleClass "hidden"
        # Show wallet address btn
        let address = "user_wallet_address".grab_val_from_local_storage_strict
        wallet_address_btn.innerHTML = ($address)[0..5] & "..." & ($address)[^5..^1]
        wallet_address_btn.toggleClass "hidden"

show_connect_wallet_or_addr()

connect_wallet_btn.click(
    proc (e:Event) {. async .} = 
        let wallet {. exportc: "wallet" .} = newMetaMaskWallet()        
        
        let connect_req = await wallet.connect()
        
        if not connect_req.ok:
            ic connect_req.err
            return
        
        ic "wallet connected"
        let address = await wallet.getAddress()
        ic address

        connect_wallet_btn.toggleClass "hidden"
        wallet_address_btn.innerHTML = ($address)[0..5] & "..." & ($address)[^5..^1]
        wallet_address_btn.toggleClass "hidden"
        window.localStorage.setItem("user_wallet_address".cstring, address)

        # If the user manually disconnects the wallet, we need to 
        # show the connect wallet btn 
        # hide the wallet address btn
        # and remove the user_wallet_address from local storage
        wallet.onDisconnect(
            proc () = 
                ic "disconnected"
                connect_wallet_btn.toggleClass "hidden"
                wallet_address_btn.toggleClass "hidden"
                window.localStorage.removeItem("user_wallet_address".cstring)
        )

)


