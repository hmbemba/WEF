import mynimlib/[nimjs, icecream, nimThirdweb, nimEthers as ethers]
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
import times
import std/jsfetch
import handles


let presale_end_date = parse("2024-10-29", "yyyy-MM-dd")

#proc presale_is_happening(date = presale_end_date): bool = date > now()

proc get_client_wallet_from_local_storage(): tuple[is_connected:bool, addy:cstring] = 
    let addy = "user_wallet_address".grab_val_from_local_storage
    if addy.isNone():
        return (false, "".cstring)
    return (true, addy.get())

proc is_whitelisted(addy:string | cstring): Future[bool] {. async .} = 
    let req = await get(fmt"/whitelist/{addy}".cstring)
    if req.status == 200:
        return true
    return false

document.DomContentLoaded( 
    proc (e:Event) {. async .} = 
        # If the presale is happening
        if presale_end_date > now():
            ic "Presale is happening"
            let client_wallet = get_client_wallet_from_local_storage()
            if not(client_wallet.is_connected):
                ic "Client wallet is not connected"
                ic "Show countdown"
                loading_box.el_strict.remove()
                presale_card.el_strict.toggleHidden()
            else:
                ic "Client wallet is connected"

                if not (await client_wallet.addy.is_whitelisted): 
                    ic "Client wallet is not whitelisted"
                    ic "Show countdown"
                    loading_box.el_strict.remove()
                    presale_card.el_strict.toggleHidden()
                else:
                    ic "Client wallet is whitelisted"
                    ic "Show nft accordion"
                    loading_box.el_strict.remove()
                    nft_accordions.el_strict.toggleHidden()
        else:
            ic "Presale has ended"
            ic "Show nft accordion"
            loading_box.el_strict.remove()
            nft_accordions.el_strict.toggleHidden() 

        # JS for the countdown
        {. emit: """
                    // Get the target date (January 1st, 2024)
                    var targetDate = new Date("2024-01-01T00:00:00Z");

                    // Function to update the digital clock countdown
                    function updateCountdown() {
                        // Get the current date and time
                        var currentDate = new Date();

                        // Calculate the time remaining
                        var timeRemaining = targetDate - currentDate;

                        if (timeRemaining <= 0) {
                            document.getElementById("countdown").innerHTML = "00:00:00:00";
                            clearInterval(countdownInterval);
                        } else {
                            // Convert time remaining to days, hours, minutes, and seconds
                            var days = Math.floor(timeRemaining / 86400000); // 1 day = 24 * 60 * 60 * 1000
                            var hours = Math.floor((timeRemaining % 86400000) / 3600000); // 1 hour = 60 * 60 * 1000
                            var minutes = Math.floor((timeRemaining % 3600000) / 60000); // 1 minute = 60 * 1000
                            var seconds = Math.floor((timeRemaining % 60000) / 1000); // 1 second = 1000 milliseconds

                            // Format the time as "00:00:00:00 days:hours:minutes:seconds"
                            var formattedTime =
                                padNumber(days) + ":" +
                                padNumber(hours) + ":" +
                                padNumber(minutes) + " :" +
                                padNumber(seconds) ;

                            // Display the digital clock countdown
                            document.getElementById("countdown").innerHTML = formattedTime;
                        }
                    }

                    // Function to pad a number with leading zeros
                    function padNumber(number) {
                        return number.toString().padStart(2, '0');
                    }

                    // Update the digital clock countdown immediately and every second
                    updateCountdown();
                    var countdownInterval = setInterval(updateCountdown, 1000);
        """ .}
)




#5proc get_contract --> newEthersContract
# proc getSectionOwners(c:chapter) =
#     let contract = c.get_contract()
#     for index in c.num_editions:

# import time
# const countdown = ...

# ____
# Landing_fe.nim

# let whitelist = await fetch("/whitelist")

# let client_wallet_addr =     get_wallet_addr_from_local_storage

# Send the presale card out as a spinner

# need to export osme of this logic to nav_fe
# when connected
# if presale_card.isSome
#   if the user is whitlisted
#       show nft accordion
    












