when defined(js):
    import mynimlib/[nimjs]
    import std/dom, options

type 
    handle* = enum 
        # Nav
        connect_wallet_modal
        connect_wallet_modal_metamask_btn
        connect_wallet_modal_cw_btn
        close_connect_wallet_modal_btn
        connect_wallet_btn
        wallet_address_btn
        play_card

        # Landing Page
        nft_accordions  
        presale_card 
        loading_box 
        
        # CGPT Page
        gen_first_scenario_btn
        second_scenario_btn
        #final_playwright_submit_btn
        cgpt_spinner
        cgpt_final_submit_btn
        scenario_section
        selected_scenario_1
        selected_scenario_2
        selected_scenario_full

        ghost_writer_card_1
        ghost_writer_card_2
        ghost_writer_card_3

when defined(js):
    proc el_strict*[T](x: T): Element   = gebi_strict $x
    proc el*[T](x: T): Option[Element]  = gebi $x 


