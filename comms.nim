import json
import safenim
import options
import mynimlib/utils

type
    scenario* = object
        title*: string
        body* : string

    # prev_info*      = object
    #     prev_story* : Option[string]
    #     scenario_1* : Option[string]
    #     scenario_2* : Option[string]
    
    contribution*               = object
        wallet_addy*            : string
        nft_index*              : int
        scenario_1*             : scenario
        scenario_2*             : scenario
        scenario_full*          : scenario
        scenario_1_complete*    : bool
        scenario_2_complete*    : bool
        scenario_full_complete* : bool

    msgKind* = enum
        set_contribution
        prompt_cgpt    
        err
        #get_prev_info
        
    postMsg*          = object
        kind*         : msgKind
        
        contrib*      : contribution
        scenarios*    : seq[scenario]
        scenario_num* : int
        
        ok*          : bool
        err*         : string

server:
    import prologue
    import mynimlib/prologutils

    template handle*(msg_kind: comms.msgKind, body : untyped) = 
        if msg.kind == msg_kind:
            body

    template resp*(obj: postMsg, body:untyped) = 
        prologue.resp jsonResponse %obj
        body


    proc CommsErr*(msg: string) : postMsg =
        postMsg(
                    kind : msgKind.err,
                    ok   : false,
                    err  : msg
                )

    template inject_parsed_msg* = 
        let parse = prologutils.getPostMsg(ctx, postMsg)
        if not parse.ok:
            icr "Error parsing post msg", parse.err
            comms.resp CommsErr(parse.err): return
        
        let msg  {.inject.} = parse.val.get

    proc SendScenarioFull*(scenario_full: string) : postMsg = 
        postMsg(
                    kind          : msgKind.prompt_cgpt,
                    ok            : true,
                    scenarios     : @[scenario( title: "final_play_write", body: scenario_full)],
                )
    


    proc SendScenarios*(scenarios: seq[scenario]) : postMsg = 
        postMsg(
                    kind      : msgKind.prompt_cgpt,
                    scenarios : scenarios,
                    ok        : true
                )

client:
    import mynimlib/[nimjs, unifetch]
    import jsony

    #proc send*(msg: postMsg, url = current_url()) : Future[result[postMsg]] = 
    proc send*(msg: postMsg, url = current_url()) : Future[postMsg] {.async.}= 
        #unifetch.postJson( url, %msg ).asObj(comms.postMsg)
        let resp          = await unifetch.postJson( url, %msg )
        let text: cstring = await resp.text()
        return ($text).fromJson(postMsg)


    proc PromptCGPT*(scenario_num: int) : postMsg = 
        postMsg(
                    kind         : msgKind.prompt_cgpt,
                    scenario_num : scenario_num,
                )
    
    proc SetContrib*(contrib: contribution) : postMsg = 
        postMsg(
                    kind    : msgKind.set_contribution,
                    contrib : contrib
                )
    # proc GetPrevStory* : postMsg = 
    #     postMsg(
    #                 kind       : msgKind.get_prev_story,
    #             )

