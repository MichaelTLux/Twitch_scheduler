const {Builder, By, until} = require('selenium-webdriver');
const config = require('config');

const username = config.get('username');
const password = config.get('password');

const seconds = (count) => count * 1000;
const minutes = (count) => seconds(count * 60);
const hours= (count) => minutes(count * 60);

if(!username || !password || username==="placeholder" || password==="placeholder") {
    console.log("please include your username and password config/default.js");
    return;
}

const loginAndWatchStream = async (stream) => {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.twitch.tv/login');
        await driver.findElement(By.id('login-username')).sendKeys(username);
        await driver.findElement(By.id('password-input')).sendKeys(password);
        await driver.findElement(By.css('button[data-a-target="passport-login-button"]')).click();
        await driver.get(`https://www.twitch.tv/${stream}`);
        await driver.wait(until.titleIs('text that will never appear'), hours(1));
    } catch (error) {
        console.log(error);
    }finally {
        await driver.quit();
    }
};

 loginAndWatchStream('warframe');
