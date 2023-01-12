# BOT Follow Twitter By Search Keyword

This bot is intended to find friends or mutuals on Twitter using self-determined keywords

This bot was initially initiated because of the difficulty the owner of this bot followed accounts to invite friends or mutuals, plus now (2022-2023) Twitter is booming with Menfess accounts which makes it easier for us to find mutuals based on the category of the account.

## Features

- Login validation
- Check the number of followers and following
- Perform a search with the specified keyword
- Random time delay when performing the action to be performed makes this bot human-like
- Loop forever (not recommended, preferably only for 1 hour)

## Tech

This bot uses a number of open source projects to work properly:

- node.js
- puppeteer

## Installation

This Bot requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
node index
```

if you use vps don't forget to install the required libraries

```sh
sudo apt-get install libnss3-dev

sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev

```

if there are still problems with chromium, you have to install chromium in the puppeteer module

```sh
cd ./node_modules/puppeteer
npm run postinstall

```

## How To use

Run the bot:

```sh
node index
```

Input Your Username Twitter and The Password:

```sh
username twitter:
password twitter
```

Input your search keyword to get all the tweet:
example:
"mutualan like, autofollback mutualan"

```sh
search keyword:
```

after that, u will receive list of tweet links and if this tweet is reply for any tweet, this bot will find the tweet parent and get the list of likes from that tweet

the bot will follow 1 by 1, and delay by random second (between 5 and 20)

and it will repeat with 10 minutes delay

### You Need Research By Yourself!

The Features of this bot is only to follow anyone based on tweet that includes keyword that u set. U need to reasearch by yourself to get the best way when using this bot.

## Support

- ENG: If you guys want to support me, i'm very happy, and i will create something nice in the future
- BAHASA: jika kamu mau mendukung saya akan sangat senang sekali, dan kedepannya saya akan membuat sesuatu yang lebih bagus untuk digunakan.

[![Donate](https://img.shields.io/badge/Donate-Saweria-%23faae2b)](https://saweria.co/hanifwidiyanto)

![alt text]([http://url/to/img.png](https://lh3.googleusercontent.com/fife/AAbDypBHJzpijbw5XA3cb1svQUh9lYRZtHlSa0JyfXVEbdNekq6C9gPL6ZComzrJJ-u9jDHz34xyflIlagz2Jr-XJQEulsBiicYo9tIlLIghAYsrFB1Y2POJdkTC8MVSrXUVNQHa9LP_HbtPBZY-cxpms17_gRMNrRZ7Q4JwXHeS6XLt59P6gqai37GVpdwLIMPZb-1jHGUH5gEY9L8j3nNeuHNG0Y7U0pTa-GZecZY3bSkC8g3q-p4FAcgb5oIMwH7bS2m18QIj6xJ-WHaieFFxK2bcrHGSDKdEIcjqyRpb7Xw96f95b2QSJ8IG9iPoiWdMabHV3uz-vJ6jf2eoF5V1KVdlHnSWe21CZDzy3yINUrkITBR7iIlRk70aego7NGoMnBmY6E-GB4LAFBpm1XEgRHFMtSHAwUoshxxW0YW5XBDWPoVJDfyE9IJXs3L7uUi6ypPL2WSjXrXvkDs_1YU3r5sjp9iv9SQi408y4-KO_wtZ_dXfu44Q5jJ5wnVVOqtgBTHACt3ZlDaqGZCA342MsKuqr-A7rOFE8zuX6VqgGlhp3evKYMAbZKtZFOpcWXad8JrLdJqtzhdYZPN6Jc4NlHK5UXXQQVH8mpXUTbykGVLkgV0IuT-sOPrB8_D-psvH_Igfms4BGNWLmjEBFDTOpeXOh2QF1LKh-5seX6o51PdhvcgVBcRPcsin_T3JdqorLlrYR7uhV-9Y-BPFIdde7CED8n--jM790M1CtcC76qQD69wFwlBNrhVLe9YOm7lyVcOW6WFSpqY8X4Uofk0VQKwcuRT9xoq9CkDjN4QLSuZu9lnRrn5cHzCFGfbHx4xL23_Wq2GJ52RWmTWEiqSoOmRQ7h-4eKh6NGae25hOwzWeT06yEuhMKsm72Rw5O0q1vyfCZkgH8Z8uGjNiLdjVWrI2DXeweDlKhMDNPH9irX9yp8sDqeLoe8yDZHK9K1PUWF2nVNlRjR2_iaLn-nRx_U_qCP0OWl4Cw6tg6Rr7NjQVbolaXgi5uZnCXRehsixR3JCDCSaQvHQc1r8XExkTU8dQum936Qlk7CKkadIi79owo_I2Hnlm4vtOnTkDO3g02Lc2n8gvFfKgpWlwJrm1bKZaKoLr1yfw-ZaOtXHDsddTretNasfXCxfxdZ1kZcxN1EWnGGvVdFa4MtgRdGbhzzwPx-TGrCbgwfzOzRTB7TEz6yWEdFjU9FdKfDtWpve-SPf8bLkGeuZUnJYDGpBZtVcnckeTjmXYHuvAyDBgLQYae69qv2gett78YuD23_NgdfQ-DR3As1JXpt5zsCCbesfzXXkusPJcWwKj1XrKeiYJ5E0GuRMbV6IQy25R3Oowt-_mVK_gHlbdne_59ROZK-1pJUQRyit3Krk0GkNQXme-FcqNMl1O0UbJ-vVWgCJVdVbMZlTMLIciHrUBqqTU8yE3ViyvN6STNv95YeaEvSKan4Ib5IaQVbX7dLdYoqvyOhX5U_3sHM5RzD8xfOy-esNSnrtA4jQ2Ib7LJd3YQd-8bqbNGLXSOdfR7GZZcwahbvIKXbyLTEDYDKC98dcUzOx6LEONklYBrMPTlxItzjAAlExm1rPkcclcRy5musa9NlM=w1365-h657))




