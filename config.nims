when defined(windows):
    switch("path",r"C:\Users\hmbem\.nimble\pkgs\mynimlib-1.0.0\mynimlib")
    switch("path",r"B:\Desktop\Scripts\NimblePkgs")

when defined(linux):
    switch("path","/mnt/c/users/hmbem/.nimble/pkgs/mynimlib-1.0.0")
    switch("path","/mnt/c/users/hmbem/.nimble/pkgs2")
    switch("path","/mnt/b/Desktop/Scripts/NimblePkgs")
