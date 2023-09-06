import prologue
import site_comps
import strutils
import mynimlib/icecream

################
## Components ##
################


####################
## Route Handlers ##
####################

proc premise_page*(ctx: Context) {.async.} =

  resp base(
    top_nav()&
    postNavCol(
      red_card("")
    )
  )


################
## Routes     ##
################
let premise_page_route* = pattern("/edit/chapter/{chapter_num}/section/{section_num}/{wallet_addr}", premise_page, @[HttpGet])

