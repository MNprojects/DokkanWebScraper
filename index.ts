import { Browser, Page } from 'puppeteer';
import puppeteer = require('puppeteer');

const scrapeCategoryPageForURLs = async (URL: string) => {
    const browser: Browser = await puppeteer.launch()
    const page: Page = await browser.newPage();
    await page.goto(URL);

    const text = await page.$$eval(".category-page__member-link",
        anchors => { return anchors.map(anchor => anchor.getAttribute("href")) });

    console.log(text);
    browser.close();
}

scrapeCategoryPageForURLs('https://dbz-dokkanbattle.fandom.com/wiki/Category:LR')