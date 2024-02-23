import prologue
import comps
import karax / [karaxdsl, vdom]


################
## Components ##
################


####################
## Route Handlers ##
####################

proc faq_page*(ctx: Context) {.async.} =
  let body = render:
    bbase:
      postNavCol(""):
        say "FAQ"

  resp body


################
## Routes     ##
################
let faq_route* = pattern("/faq", faq_page, @[HttpGet])