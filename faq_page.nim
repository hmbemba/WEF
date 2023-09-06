import prologue
import site_comps

################
## Components ##
################


####################
## Route Handlers ##
####################

proc faq_page*(ctx: Context) {.async.} =
  resp base(
    top_nav()&
    postNavCol(
      red_card(
            "FAQ"
      )
    )
  )


################
## Routes     ##
################
let faq_route* = pattern("/faq", faq_page, @[HttpGet])