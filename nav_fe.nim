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
import handles



{. emit: """
import {MetaMaskWallet, ethers, WalletConnect, Goerli} from "./thirdweb/dist/thirdweb.js";
import {createWeb3Modal, chains, projectId, wagmiConfig, getAccount} from "./cw_modal/dist/cw-modal.js";
""" .}

var acct_addy {. exportc:"acct_addy" .}: cstring = ""
var is_connected {. exportc:"is_connected" .}: bool = false

{. emit: """
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })

// Subscribe to state changes to get account info after connection
modal.subscribeState(newState => {
  if (newState.open) {
    const account = getAccount();
    if (account.address !== undefined){
      acct_addy = account.address
      console.log("acct_addy:", acct_addy);
      is_connected = true

      window.localStorage.setItem("user_wallet_address", acct_addy)
    }
  }
});

modal.subscribeState(newState => {
  if (!newState.open) {
    console.log("disconnected");
  }
});
""" .}

# proc ethereum(w:Window): bool {. importjs: "#.$1"}

# proc hasMetaMask(w:Window): bool {. importjs: "#.ethereum.isMetaMask"}

# proc show_connect_wallet_or_addr() {.async.}= 
#     if window.ethereum:  
#         if window.hasMetaMask:
#             if not (await metamaskIsConnected()):
#                 ic "user not connected to metamask"
#                 # show connect wallet btn
#                 connect_wallet_btn.el_strict.rmClass "hidden"
#                 rm_from_local_storage "user_wallet_address".cstring
#             else:


#                 let metamaskWallet = newMetaMaskWallet()  
#                 let address_req    = await metamaskWallet.getAddress()
#                 if not address_req.ok:
#                     icr "Could not get address"
#                     icr address_req.err
#                     alert "Could not get address, please refresh the page and try again"
#                     return

#                 # Hide connect wallet btn
#                 connect_wallet_btn.el_strict.toggleHidden()

#                 # Show wallet address btn
#                 let address = address_req.val.get
#                 wallet_address_btn.el_strict.innerHTML = ($address)[0..5] & "..." & ($address)[^5..^1]
#                 wallet_address_btn.el_strict.toggleHidden()

# proc showHideModal() = 
#     connect_wallet_modal.el_strict.toggleHidden()
#     if play_card.el.isSome:
#         play_card.el.get.toggleHidden
#     connect_wallet_btn.el_strict.toggleHidden()


# var metamask_installed = false
# window.load(
#     proc(e: Event) = 
#         if window.ethereum:
#             if window.hasMetamask:
#                 metamask_installed = true
#                 ic "metamask installed"
#                 #connect_wallet_modal_metamask_btn.el_strict.toggleHidden()
#                 connect_wallet_modal_metamask_btn.el_strict.rmClass "cursor-wait"
#                 connect_wallet_modal_metamask_btn.el_strict.addClass "cursor-pointer"
# )

#await show_connect_wallet_or_addr()

# close_connect_wallet_modal_btn.el_strict.click(
#     proc (e:Event) {. async .} = 
#         showHideModal()
# )

# connect_wallet_btn.el_strict.click(
#     proc (e:Event) {. async .} = 
#         #showHideModal()

# )

# connect_wallet_modal_metamask_btn.el_strict.click(
#     proc (e:Event) {. async .} = 
#         let metamaskWallet = newMetaMaskWallet()  
#         let connect_req    = await metamaskWallet.connect()
        
#         if not connect_req.ok:
#             if "User rejected the request".cstring in connect_req.err:
#                 ic "User rejected the request"
#                 return
#             else:
#                 icr connect_req.err
#                 return
        
#         ic "metamaskWallet connected"
#         let address_req = await metamaskWallet.getAddress()
#         if not address_req.ok:
#             icr "Could not get address"
#             icr address_req.err
#             return
#         let address = address_req.val.get
#         ic address

#         showHideModal()

#         connect_wallet_btn.el_strict.toggleHidden()
#         wallet_address_btn.el_strict.innerHTML = ($address)[0..5] & "..." & ($address)[^5..^1]
#         wallet_address_btn.el_strict.toggleHidden()
#         window.localStorage.setItem("user_wallet_address".cstring, address)

#         # If the user manually disconnects the metamaskWallet, we need to 
#         # show the connect metamaskWallet btn 
#         # hide the metamaskWallet address btn
#         # and remove the user_wallet_address from local storage
# )

# connect_wallet_modal_cw_btn.el_strict.click(
#     proc (e:Event) {. async .} = 
#         let options = walletConnectOptions(
#             qrcode: true,
#             projectId: consts.wallet_connect_proj_id.cstring,
#             #chains: @[Goerli()],
#         )

#         let wallet         = newWalletConnectWallet(options)  
#         let connect_req    = await wallet.connect()
        
#         if not connect_req.ok:
#             if "User rejected the request".cstring in connect_req.err:
#                 ic "User rejected the request"
#                 return
#             else:
#                 icr "Could not connect to wallet"
#                 icr connect_req.err
#                 return
        
#         ic "wallet connected"
#         let address_req = await wallet.getAddress()
#         if not address_req.ok:
#             icr "Could not get address"
#             icr address_req.err
#             return
#         let address = address_req.val.get
#         ic address

#         showHideModal()

#         connect_wallet_btn.el_strict.toggleHidden()
#         wallet_address_btn.el_strict.innerHTML = ($address)[0..5] & "..." & ($address)[^5..^1]
#         wallet_address_btn.el_strict.toggleHidden()
#         window.localStorage.setItem("user_wallet_address".cstring, address)

# )

# wallet_address_btn.el_strict.mouseout(
#     proc (e:Event) = 
#         let address = "user_wallet_address".grab_val_from_local_storage_strict
#         wallet_address_btn.el_strict.innerHTML = ($address)[0..5] & "..." & ($address)[^5..^1]
# )

# wallet_address_btn.el_strict.mouseover(
#     proc (e:Event) = 
#         wallet_address_btn.el_strict.innerHTML = "Disconnect"
# )

# wallet_address_btn.el_strict.click(
#     proc (e:Event) {.async.}= 
#         ic "disconnecting wallet"
#         # let metamaskWallet = newMetaMaskWallet()  
#         # let disconnect_req = await metamaskWallet.disconnect()
#         # if not disconnect_req.ok:
#         #     icr "Could not disconnect"
#         #     icr disconnect_req.err
#         #     return
#         # ic "metamaskWallet disconnected"
# )


