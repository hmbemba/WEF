import prologue
import site_comps
import strutils
import mynimlib/icecream
import karax / [karaxdsl, vdom]


################
## Components ##
################


####################
## Route Handlers ##
####################

proc isNumber(x: string): bool =
  try:
    discard parseInt(x)
    result = true
  except ValueError:
    result = false

proc isHexStr(s: string): bool =
  if len(s) < 3 or s[0..1] != "0x":
    return false

  let validHexChars = "0123456789abcdefABCDEF"
  for c in s[2..^1]:
    if not( c in validHexChars):
      return false

  return true

proc all_params(chapter_num, section_num, wallet_addr: string): tuple [are_valid: bool, err:string] = 
  
  if not isNumber(chapter_num) or not isNumber(section_num):
    ic "Not a number"
    return(false, "Invalid Chapter or Section Number")
  
  let chapter_num_int = chapter_num.parseInt
  let section_num_int = section_num.parseInt


  if not chapter_num_int > 0 or not section_num_int > 0:
    ic "Not a positive number"
    return (false, "Invalid Chapter or Section Number")
  
  if not (chapter_num_int < 8) or not (section_num_int < 8):
    ic " Not a valid chapter or section number"
    return (false, "Invalid Chapter or Section Number")

  if not isHexStr(wallet_addr):
    ic "Not a valid wallet address"
    return (false, "Invalid Wallet Address")

  return (true, "")



proc edit_section_page*(ctx: Context) {.async.} =
  let chapter_num = ctx.getPathParams("chapter_num")
  let section_num = ctx.getPathParams("section_num")
  let wallet_addr = ctx.getPathParams("wallet_addr")
  
  if not all_params(chapter_num, section_num, wallet_addr).are_valid:
    let err = all_params(chapter_num, section_num, wallet_addr).err
    ic err
    resp err
    return

  let body = ppostNavCol(""):
    vdom.text "FAQ"

  resp base(
    top_nav_2() & $body
  )



################
## Routes     ##
################
let edit_section_route* = pattern("/edit/chapter/{chapter_num}/section/{section_num}/{wallet_addr}", edit_section_page, @[HttpGet])

