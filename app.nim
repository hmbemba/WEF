import prologue
import faq_page
import landing_page 
import contribute_page  
import edit_section_page 
import cgpt_page
import consts
import prologue/middlewares/staticfile
import admin
import whitelist

let settings = 
  newSettings(
                
                  appName   = consts.app_name    ,
                  debug     = consts.debug       ,
                  port      = Port(consts.port)  , 
                  secretKey = consts.app_secret 
              )


var app = newApp(settings = settings)

app.use(staticFileMiddleware("/static"))

app.get("/favicon.ico", redirectTo("/static/favicon.ico"))

app.addRoute(@[
                  landing_route               ,
                  demo_landing_route          ,
                  contribute_route            ,
                  edit_section_route          ,
                  faq_route                   ,
                  cgpt_route                  ,
                  admin_route                 ,
                  whitelist_api_route         ,
                  contact_form_submit_route   ,
                  cgpt_selection_route        ,
                  login_route                 ,
], "")

app.run()
