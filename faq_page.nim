import prologue
import site_comps
import karax / [karaxdsl, vdom]


################
## Components ##
################


####################
## Route Handlers ##
####################

proc faq_page*(ctx: Context) {.async.} =
  let body = ppostNavCol(""):
    vdom.text "FAQ"

  resp base(
    top_nav_2() & $body
  )


################
## Routes     ##
################
let faq_route* = pattern("/faq", faq_page, @[HttpGet])