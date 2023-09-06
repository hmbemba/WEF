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

proc submit_page*(ctx: Context) {.async.} =

  resp base(
    top_nav()&
    postNavCol(
      red_card("")
    )
  )


################
## Routes     ##
################
let submit_page_route* = pattern("/edit/chapter/{chapter_num}/section/{section_num}/{wallet_addr}", submit_page, @[HttpGet])

