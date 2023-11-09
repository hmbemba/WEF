import prologue
import mynimlib/[icecream, nimtinydb]
import strformat

proc whitelist_api*(ctx: Context) {.async.} =
    let addy = ctx.getPathParams("addy")
    ic addy
    let whitelist_db = newTinyDB("/root/db.json", "whitelist")

    let req = whitelist_db.get(Where("addy") == addy)
    icb $req
    if req.err != "":
        icr "get from whitelist error " & req.err
        await ctx.respond(Http500, req.err)
        return
    
    if req.val.isNone():
        icr "Address " & addy & " not in whitelist"
        await ctx.respond(Http404, "not found")
        return
    
    ctx.respond(Http200, fmt"{addy} is whitelisted")



let whitelist_api_route* = pattern("/whitelist/{addy}" , whitelist_api )
