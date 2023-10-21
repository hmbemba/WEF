import std/strformat 

task dev, "Start server in dev mode":
    exec "nim c -r -d:ssl -d:ic app.nim"

task demo, "Run demo":
    exec """nim c \
            -r \
            -d:demo \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            app.nim
        """

task prod, "Start server in prod mode":
    exec """nim c \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            app.nim
        """

task prodr, "Start server in prod mode":
    exec """nim c \
            -r \
            --forceBuild:on \
            --opt:speed \
            --define:release \
            --threads:on \
            --mm:orc \
            --deepcopy:on \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            app.nim
        """

task mk_cgpt_fe, "builds chatgpt frontend":
    let output =  "/root/wef/static/js/cgpt_page_fe.js"
    withDir "/root/wef/":
        exec fmt"nim js -b:js -o:{output} -d:nimExperimentalAsyncjsThen cgpt_page_fe.nim"
        
task pull_mnl, "Pull mynimlib":
    withDir "/root/.nimble/pkgs/mynimlib-1.0.0":
        exec "git pull"

task push_mnl, "Push mynimlib":
    withDir "/root/.nimble/pkgs/mynimlib-1.0.0":
        exec "git add ."
        exec "git status"
        exec "git commit -m 'update'"
        exec "git push"

task build_tw, "builds Thirdweb with Vite":
    withDir "./static/js/thirdweb":
        exec "npm run build"
      
