when defined(windows):
    switch("path",r"C:\Users\hmbem\.nimble\pkgs\mynimlib-1.0.0\mynimlib")
    switch("path",r"B:\Desktop\Scripts\NimblePkgs")
    switch("path",r"C:\Users\hmbem\Desktop\NimblePkgs")

when defined(linux):
    # C:\Users\hmbem\.choosenim\toolchains\nim-2.0.0\lib
    #switch("path","/mnt/c/users/hmbem/.choosenim/toolchains/nim-2.0.0/lib")
    switch("path","/mnt/c/users/hmbem/.nimble/pkgs/mynimlib-1.0.0")
    switch("path","/mnt/c/users/hmbem/.nimble/pkgs2")
    switch("path","/mnt/b/Desktop/Scripts/NimblePkgs")

# /home/hmbemba/.choosenim/toolchains/nim-2.0.0/lib/
# New-Item -ItemType SymbolicLink -Path "C:\Users\hmbem\.choosenim\toolchains\nim-2.0.0\lib" -Target "\\wsl$\Ubuntu\home\hmbemba\.choosenim\toolchains\nim-2.0.0\lib"
