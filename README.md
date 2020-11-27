# Twitch_scheduler

steps for setting up in windows task scheduler

1. clone the repository
2. run `npm i`
3. find `lib/geckodriver.exe` in your file explorer
5. right click, create a shortcut
6. look at the properties of the shortcut and copy the path it makes
    IE: "C:\Users\SomeGuy\Documents\dev\Twitch_scheduler\lib"
7. follow steps outlined [here](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/) to add the driver to the path
8. then run the program with your username and password `twitch_username="JohnDoe" twitch_password="superSecret" npm run start`
9. if you are using the task scheduler, please update the variables in `starting.cmd` to include your username nad password

    