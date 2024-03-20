import std/strformat , os, strutils

#let blockchain = "goerli"
let blockchain = "sepolia"

proc checkFileStuff(out_dir, input_file:string) =
    let out_path = out_dir.split(r"/")[0..^2].join(r"/")
    if not out_path.dirExists:
        echo "out_dir at : " & "'" & out_path & "' " & "does not exist"
        quit(1)
    
    let out_file_name = out_dir.split(r"/")[^1]
    if not(".js" in out_file_name):
        echo "out_dir at : " & "'" & out_path & "' " & "does not end with .js"
        quit(1)
    
    if not(".nim" in input_file):
        echo "input_file at : " & "'" & input_file & "' " & "does not end with .nim"
        quit(1)

task wdev, "Start server in dev mode":
    exec fmt"nim c -r -d:ic -d:ssl -d:dev -d:last_open_chapter=0 -d:blockchain={blockchain} -o:wdev app.nim"

task prod_demo, "Start server in prod mode":
    exec fmt"""nim c \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            -d:demo \
            -d:last_open_chapter=0 \
            -d:blockchain={blockchain} \
            app.nim
        """

task prod, "Start server in prod mode":
    exec fmt"""nim c \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:lto \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            -d:last_open_chapter=0 \
            -d:blockchain={blockchain} \
            app.nim
        """

task mkfe, "build frontends":
    proc buildExecCommand(input_file: string, out_dir: string): string = 
        checkFileStuff(out_dir, input_file)
        return fmt"""nim js -b:js -d:dev -d:ic -d:blockchain={blockchain} -o:{out_dir} {input_file}"""

    exec buildExecCommand("./cgpt_page_fe.nim"         , fmt"./static/js/cgpt_page_fe.js"        )
    exec buildExecCommand("./nav_fe.nim"               , fmt"./static/js/nav_fe.js"              )
    exec buildExecCommand("./landing_page_fe.nim"      , fmt"./static/js/landing_page_fe.js"     )
    exec buildExecCommand("./contribute_page_fe.nim"   , fmt"./static/js/contribute_page_fe.js"  )

task mkfe_prod_ic, "build frontends":
    proc buildExecCommand(input_file: string, out_dir: string): string = 
        checkFileStuff(out_dir, input_file)
        return fmt"""nim js -b:js -d:dev -d:ic -d:blockchain={blockchain} -o:{out_dir} {input_file}"""

    exec buildExecCommand("./cgpt_page_fe.nim"         , fmt"./static/js/cgpt_page_fe.js"        )
    exec buildExecCommand("./nav_fe.nim"               , fmt"./static/js/nav_fe.js"              )
    exec buildExecCommand("./landing_page_fe.nim"      , fmt"./static/js/landing_page_fe.js"     )
    exec buildExecCommand("./contribute_page_fe.nim"   , fmt"./static/js/contribute_page_fe.js"  )
    
    withDir "./static/js":
        echo getCurrentDir()
        for file_path in walkDir("."):
            if file_path.path.endsWith(".js"):
                let file_name = file_path.path.split("\\")[^1]
                let full_path = getCurrentDir() & "\\" & file_name
                echo "full_path : " & full_path
                let terser_cmd = fmt"""terser "{full_path}" --compress --mangle --output "{full_path}"  """
                echo "terser_cmd : " & terser_cmd
                
                let (output, exitcode) = gorgeEx fmt"""powershell -c "{terser_cmd}" """
                if exitcode != 0:
                    echo "terser failed : " & file_name
                    echo output
                else:
                    echo "terser done : " & file_name & "\n"
    echo "terser complete"

task build_tw, "Builds Thirdweb":
    when defined(linus):
        withDir "/root/wef/static/js/thirdweb":
            exec "npm run build"
    when defined(windows):
        withDir r"B:\Desktop\Scripts\projects\WEF\static\js\thirdweb":
            exec "npm run build"