import tinydb/src/tinydb
import ../consts
import safenim
import ../comms
import sequtils
import strutils
import strformat

proc ContribDB*: tinydb = newTinyDB(consts.db_path, "contributions")

proc get_prev_story*(contrib_db: tinydb) : result[string] =
    let all_contribs = contrib_db.all(comms.contribution)
    
    if all_contribs.len == 0:
        return result[string](ok:true, err:"", val: some "")

    proc map_scenario(scenario: comms.scenario): string = fmt"""
    {scenario.title}
    {scenario.body}
    """
    
    return ok all_contribs.mapIt(it.scenario_full.map_scenario()).join("\n\n")
  