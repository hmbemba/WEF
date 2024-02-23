import mynimlib/[nimjs, nimThirdweb]
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
import icecream/src/icecream



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



