import mynimlib/[unifetch, nimjs, nimThirdweb, nimEthers as ethers]
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
import abi_file
import times, options
import karax / [karaxdsl, vdom, vstyles]
import icecream/src/icecream
import mynimlib/webui/modal/modal

{. emit: """
import {MetaMaskWallet, ethers} from "./thirdweb/dist/thirdweb.js";
""" .}

{. emit: """
import {createWeb3Modal, chains, projectId, wagmiConfig, getAccount} from "./cw_modal/dist/cw-modal.js";
""" .}

var wallet_addy  {. exportc:"wallet_addy" .}: cstring = ""
var is_connected {. exportc:"is_connected" .}: bool = false

{. emit: """
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })

// Subscribe to state changes to get account info after connection
modal.subscribeState(newState => {
  if (newState.open) {
    const account = getAccount();
    if (account.address !== undefined){
      wallet_addy = account.address
      console.log("wallet_addy:", wallet_addy);
      is_connected = true
    }else{
      console.log("account.address is undefined");
      is_connected = false
    }
  }
});

const account = getAccount();
if (account.address !== undefined){
    wallet_addy = account.address
    console.log("wallet_addy:", wallet_addy);
    is_connected = true
}else{
    console.log("account.address is undefined");
    is_connected = false
}


""" .}

type
    wef_contract     = object
        address      : cstring = cstring(consts.contract_address)
        contract     : ethers.contract
        num_editions : cint = 7

    wef_wallet   = object
        address  : cstring
        contract : wef_contract


proc get_nfts(wallet: wef_wallet): Future[Option[seq[int]]] {. async .} = 
    var nfts: seq[int] = @[]
    for nft_index in 0..wallet.contract.num_editions:
        let balance = await wallet.contract.contract.balanceOf(wallet.address, nft_index)
        if balance.toFloat > 0.0:
            nfts.add(nft_index)
    
    if nfts.len == 0:
        return none(seq[int])

    return some(nfts)


proc nftCard(wallet_address: string, nft_num: int):string = 
    fmt"""
    <a href="/chat/{wallet_address}/{nft_num}">
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <!-- Image section -->
            <div class="relative">
                <img class="w-full h-60 object-cover" src="/static/img/nfts/{nft_num+1}.png" alt="NFT Image">
                
            </div>

            <!-- Title section -->
            <div class="p-4 bg-black text-white">
                <!-- Title and avatar section -->
                <div class="flex items-center justify-between mb-2">
                   
                    <div class="flex items-center space-x-2">
                        
                        <!-- Name -->
                        <div class="text-sm">
                            <p class="font-medium">
                                Monk Punk #128
                            </p>
                            <p class="">
                                not for sale
                            </p>
                        </div>
                    
                    </div>
                    
                    <!-- Auction timer section -->
                    <div class="text-sm ">
                        Ending in 10h 58m
                    </div>
                </div>
            </div>
        </div>
    </a>
    """

let provider_req = await newJsonRpcProvider(consts.rpc_url)
if not provider_req.ok:
    icr provider_req.err

let provider {.exportc:"prov".} = provider_req.val.get
ic "provider:" 
ic provider


let get_nfts_loader        = gebi_strict "get-nfts-loader"
let red_card               = gebi_strict "red-card"
let contact_modal          = query_strict("[modal-component]").newModal()
let contact_form           = contact_modal.el.query_strict("form")

contact_form.submit(
    proc (event: Event) {.async.} = 
        event.preventDefault()
        let form_data = newFormDataThis()
        let addy      = wallet_addy
        let post_req  = await unifetch.post(fmt"/contribute/contact-form/{addy}".cstring, form_data)
        if not post_req.ok:
            alert("ERROR SUBMITTING FORM" & post_req.body)
        else:
            contact_modal.hide()
            "submitted_shipping".push_to_local_storage("true".cstring)

)

proc handleShowShipping() =
    let submitted_shipping = "submitted_shipping".grab_val_from_local_storage
    if submitted_shipping.isNone():
        ic "no shipping info"
        ic "Show the shipping form"
        contact_modal.show()


proc getNfts() {.async.} = 
    if not is_connected:
        ic "not connected"
        ic "Show the connect button"
        get_nfts_loader.innerHTML =
            """
            <p class="w-full text-center test-white">
                Please connect your wallet to view your NFTs
            </p>
            """
        

    else:
        let wef_wallet = wef_wallet(
                        address  :  wallet_addy, 
                        contract :  wef_contract(
                                                contract: newEthersContract(consts.contract_address, abi_file.abi, provider) , 
                                                num_editions: 7
                                            )
                            )
        let thirdweb_contract {.exportc:"tw_c".} = newEthersContract(consts.contract_address, abi_file.abi, provider)

        {.emit:
            """
            const code = await prov.getCode('0x95161d22A309C21FbC8bA674f4f38e5F91BCea30')
            console.log("code:", code)

            const balance = await tw_c.balanceOf('0xF6427B9C66505fc8181783e3EBe6D6b7d6081a52', 0)
            console.log("balance:", balance.toString()); // Converts the BigNumber to a string.

            const balance2 = await tw_c.balanceOf('0xF6427B9C66505fc8181783e3EBe6D6b7d6081a52', 1)
            console.log("balance:", balance2.toString()); // Converts the BigNumber to a string.

            
            
        """
        .}
        ic wef_wallet

        let nfts = await wef_wallet.get_nfts()
        if nfts.isSome:
            ic "The client has purchased nfts"
            ic nfts.get
            
            
            get_nfts_loader.remove()
            for nft in nfts.get:
                red_card.query_strict(".nfts_grid").addElement(nftCard($wef_wallet.address, nft))
            
            handleShowShipping()
        else:
            ic "no nfts"


#window.load proc (event: Event) {.async.} = 

ic "Using blockchain: " & consts.blockchain 
ic consts.contract_address
ic consts.rpc_url

await getNfts()







