import readlineSync from 'readline-sync';
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import {
    executablePath
} from 'puppeteer'
puppeteer.use(StealthPlugin())
import chalk from 'chalk';
import UserAgent from 'user-agents';

const userAgent = new UserAgent();


//get Username Twitter
let user = readlineSync.question(chalk.blue('username twitter? '));

// Handle the secret text (e.g. password).
let pass = readlineSync.question(chalk.red('password twitter?  '), {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});

//get Search Keyword
let searchKey = readlineSync.question(chalk.green('search keyword? (ex:hmu nder, hmu mutualan)  '));

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: executablePath()
    });
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9'
    });
    await page.setUserAgent(userAgent.toString())
    console.log('mencoba login....')
    await page.goto('https://twitter.com/i/flow/login');
    console.log('mengisi username...')
    const inputText = 'input[name=text]';
    await page.waitForSelector(inputText);

    await page.type(inputText, user);
    await page.keyboard.press('Enter');
    console.log('mengisi password...')
    const inputPass = 'input[name=password]';
    await page.waitForSelector(inputPass);
    if (!inputPass) {
        console.log('username tidak ditemukan!')
        await browser.close();
    }
    await page.type(inputPass, pass);

    await page.keyboard.press('Enter');
    await delay(3000);

    const url = page.url();
    if (url == 'https://twitter.com/home') {
        console.log('login berhasil')
        for (let i = 0; i < 10; i++) {
            let search = true
            let data = []
            while (search) {


                await page.goto('https://twitter.com/explore');
                const inputSearchKey = 'input[data-testid=SearchBox_Search_Input]';
                await page.waitForSelector(inputSearchKey);
                await page.type(inputSearchKey, searchKey);
                await page.keyboard.press('Enter');
                console.log('menuju url pencarian mutual')
                await delay(5000)

                data.push(...await page.evaluate(
                    () => Array.from(
                        document.querySelectorAll('a.r-1w6e6rj'),
                        a => a.href
                    )
                ));
                if (data.length > 1) {
                    console.log('mendapatkan semua link mutual')
                    console.log(data)
                    search = false
                }

            }
            let rd = data.reverse();
            for (const el of data) {
                await page.goto(el);
                await delay(5000);

                const tweetParent = await page.$('article[data-testid=tweet]')
                await tweetParent.click()
                await delay(3000);
                const urlLike = page.url();
                console.log('menuju link untuk follow-follow orang')
                await page.goto(`https://twitter.com/${urlLike.split("/")[3]}/status/${urlLike.split("/")[5]}/likes`);
                await delay(5000);


                const followButton = await page.$$('div.css-18t94o4.css-1dbjc4n.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-15ysp7h.r-4wgw6l.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr')
                console.log(`mulai memfollow ${followButton.length} orang`)
                // for (const el of followButton) {
                //     const url = page.url();
                //     if(url == 'https://twitter.com/home'){
                //         await page.goto(`https://twitter.com/${urlLike.split("/")[3]}/status/${urlLike.split("/")[5]}/likes`);
                //     }
                //     await delay(5000);
                //     await page.evaluate((element) => {
                //         element.scrollIntoView();
                //     }, el);
                //     await el.click()
                //     console.log(chalk.greenBright('sukses follow'))
                //     console.log('tunggu 10 detik sebelum menfollow akun selanjutnya')
                //     await delay(5000);
                // }

                for (let i = 0; i < followButton.length; i++) {
                    await delay(3000);
                    await page.evaluate((element) => {
                        element.scrollIntoView();
                    }, followButton[i]);
                    await followButton[i].click()
                    const url = page.url();
                    if (url == 'https://twitter.com/home') {
                        // await page.goto(`https://twitter.com/${urlLike.split("/")[3]}/status/${urlLike.split("/")[5]}/likes`);
                        i = followButton.length
                    }
                    console.log(chalk.greenBright('sukses follow'))
                    console.log('tunggu 10 detik sebelum menfollow akun selanjutnya')
                    await delay(7000);
                }
                console.log('menunggu 10 menit biar ga banned')
                await delay(600000)

            }
            console.log('link sudah habis, mencoba mencari kembali....')

        }

    }
    console.log('gagal login, password salah!')



    await delay(4000);
    await browser.close();
})();