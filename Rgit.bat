@ECHO OFF
SET P=E

title 		M A I N   M E N U
color 57
CLS
:MENU
ECHO.
ECHO ...............................................
ECHO 		Git-Uom-Project
ECHO Prgram name: Rgit.bat 
ECHO Project Path: %P%:\Users\Public\PUBLIC.PREVIOUS\Public\MY\UoM Projects\git-UoM-Projects
ECHO ...............................................
ECHO.
ECHO BASIC GIT COMMANDS:
ECHO 10 - git status
ECHO.
ECHO THIS PROJET GIT COMMANDS:
ECHO 20 - View Remote Origin
ECHO.
ECHO 21 - View Full branch list
ECHO.
ECHO 22 - Checkout branch Ranjith
ECHO.
ECHO 23 - Add .
ECHO.
ECHO 24 - Add . and Commit
ECHO.
ECHO 25 - Push
ECHO.
ECHO E X I T
@REM ECHO 98 - Restart
ECHO 99 - EXIT
ECHO.
SET /P M=Type Option then press ENTER:
IF %M%==10 GOTO TAG-10
IF %M%==20 GOTO TAG-20
IF %M%==21 GOTO TAG-21
IF %M%==22 GOTO TAG-22
IF %M%==23 GOTO TAG-23
IF %M%==24 GOTO TAG-24
IF %M%==25 GOTO TAG-25
IF %M%==26 GOTO TAG-26
IF %M%==99 GOTO EOF

:TAG-10
git status
pause
CLS
GOTO MENU

:TAG-20
git remote -v
pause
CLS
GOTO MENU

:TAG-21
git branch -a
pause
CLS
GOTO MENU

:TAG-22
git checkout master
@REM ECHO checkout Ranjith SUCCEEED. . .
pause
CLS
GOTO MENU

:TAG-23
git add .
@REM ECHO add . SUCCEEED. . .
pause
CLS
GOTO MENU

:TAG-24
set /p msg= Enter Commit msg:
echo You entered: %msg%
set /p confrm= Are you sure? (1=No, 2=Yes, 3=Exit):
IF %confrm%==1 GOTO TAG-24
IF %confrm%==3 GOTO MENU
IF %confrm%==2 GOTO TAG-CONTINUE-24
echo Invalid answer . . try again
pause
GOTO TAG-24
:TAG-CONTINUE-24
git add .
git commit -m "%msg%"
@REM ECHO COMMIT SUCCEEED. . .
pause
CLS
GOTO MENU

:TAG-25
git push
@REM ECHO push SUCCEEED. . .
pause
CLS
GOTO MENU

