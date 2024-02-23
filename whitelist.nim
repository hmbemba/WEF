import prologue
import icecream/src/icecream
import nimtinydb
import strformat
import consts

proc whitelist_api*(ctx: Context) {.async.} =
    let addy = ctx.getPathParams("addy")
    ic addy
    if addy in consts.whitelist:
        await ctx.respond(Http200, fmt"{addy} is whitelisted")
    await ctx.respond(Http404, "not found")

let whitelist_api_route* = pattern("/whitelist/{addy}" , whitelist_api )
