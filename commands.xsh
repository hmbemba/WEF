aliases['mkfe']  = 'nim mkfe task.nims'
aliases['wdev']  = 'nim wdev task.nims'
aliases['prod']  = 'nim mkfe_proc_ic ; nim prod task.nims'

print("'mkfe' to build frontend")
print("'wdev' to run development server")
print("'prod' to build frontend and run production server")