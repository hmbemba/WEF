import std/strformat 


proc ic(str: string)     = exec fmt"""powershell Write-Host "`n{str}" -ForegroundColor Green"""
proc icerr(str: string)  = exec fmt"""powershell Write-Host "`n{str}" -ForegroundColor Red"""
proc icinfo(str: string) = exec fmt"""powershell Write-Host "`n{str}" -ForegroundColor Blue"""


task dev, "Start server in dev mode":
    exec "nim c -r -d:ssl app.nim"

task prod, "Start server in prod mode":
    exec """nim c \
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
            --define:lto \
            --define:ssl \
            --hints:off \
            --outdir:"." \
            app.nim
        """

# task build_lit, "builds Lit webcomponents":
#     withDir "../lit_base_components":
#         exec "powershell npm run build"
        
# task push_lit, "git push Lit webcomponents":
#     withDir "../lit_base_components":
#         exec "git status"
#         exec "git add ."
#         echo gorgeEx """git commit -m "update" """
#         exec "git push"

task build_tw, "builds Thirdweb with Vite":
    withDir "./static/js/thirdweb":
        exec "npm run build"
      
