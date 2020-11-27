# Twitch_scheduler

steps for setting up in windows task scheduler

1. clone the repository
2. run `npm i`
3. find `lib/geckodriver.exe` in your file explorer
5. right click, create a shortcut
6. look at the properties of the shortcut and copy the path it makes
    IE: "C:\Users\SomeGuy\Documents\dev\Twitch_scheduler\lib"
7. follow steps outlined [here](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/) to add the driver to the path
8. create a file `config/default.js` use `config/example_default.js` as a template
9. run starting.cmd in your windows task scheduler to automate your viewing

    