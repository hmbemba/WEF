import consts
import strformat
import jsffi
var abi* {. exportc .} = newJsObject()

{. emit: fmt"""
abi = {consts.contract_abi}
"""
.}

