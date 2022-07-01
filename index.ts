import axios, { AxiosError } from 'axios';
import { existsSync, mkdirSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { JSDOM } from 'jsdom';

getDokkanData();

async function getDokkanData() {
    const document: Document = await fetchFromWebOrCache('https://dbz-dokkanbattle.fandom.com/wiki/Category:LR', false);
    const links: string[] = extractLinks(document);
    saveData('LR-links', links)

    const characterDocument: Document = await fetchFromWebOrCache(links[0])
    const characterData = extractCharacterData(characterDocument);
    saveData('LR-characters', characterData)


}


function fetchPage(url: string): Promise<string | undefined> {
    const HTMLData = axios.get(url)
        .then(res => res.data)
        .catch((error: AxiosError) => {
            console.error('nope');
            console.error(error);
        });
    return HTMLData;
}

async function fetchFromWebOrCache(url: string, ignoreCache = false) {
    // If the cache folder doesn't exist, create it
    if (!existsSync(resolve(__dirname, '.cache'))) {
        mkdirSync('.cache')
    }
    // console.log(`Getting data for ${url}...`);

    const fileName = resolve(__dirname, `.cache/${Buffer.from(url).toString('base64')}.html`)

    if (!ignoreCache &&
        existsSync(fileName,)
    ) {
        // console.log(`I read ${url} from cache`);
        const HTMLData = await readFile(
            fileName,
            { encoding: 'utf8' }
        );
        const dom = new JSDOM(HTMLData);
        return dom.window.document;
    } else {
        // console.log(`I fetched ${url} fresh`);
        const HTMLData = await fetchPage(url);
        if (!ignoreCache && HTMLData) {
            writeFile(
                fileName,
                HTMLData, { encoding: 'utf8' },
            );
        }
        const dom = new JSDOM(HTMLData);
        return dom.window.document;
    }
}

function extractLinks(document: Document) {
    const URIs: HTMLAnchorElement[] = Array.from(
        document.querySelectorAll('.category-page__member-link'),
    );
    return URIs.map(link => 'https://dbz-dokkanbattle.fandom.com'.concat(link.href))
}

function saveData(fileName: string, data: unknown) {
    if (!existsSync(resolve(__dirname, 'data'))) {
        mkdirSync('data');
    }
    writeFile(
        resolve(__dirname, `data/${fileName}.json`),
        JSON.stringify(data),
        { encoding: 'utf8' })
}

async function getCharactersData(links: string[]) {
    const characterDocs = links.map(async link =>
        await getCharacterData(link)
    );
    console.log(characterDocs);
    return characterDocs

}
async function getCharacterData(link: string) {
    return await fetchFromWebOrCache(link, false);
}
function extractCharacterData(characterDocument: Document) {
    const characterData = {
        name: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > center:nth-child(1) > b')?.innerHTML.split('<br>')[0],
        Title: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > center:nth-child(1) > b')?.innerHTML.split('<br>')[1],
        MaxLevel: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > center:nth-child(1)')?.textContent,
        MaxSALevel: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > center:nth-child(1)')?.innerHTML.split('>/')[1],
        Rarity: characterDocument.querySelector('.size45px > span:nth-child(2) > a:nth-child(1)')?.getAttribute('title')?.split('Category:')[1],
        Class: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(4) > center:nth-child(1) > a:nth-child(1)')?.getAttribute('title')?.split(' ')[0].split('Category:')[1],
        Type: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(4) > center:nth-child(1) > a:nth-child(1)')?.getAttribute('title')?.split(' ')[1],
        Cost: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(5) > center:nth-child(1)')?.textContent,
        ID: characterDocument.querySelector('.mw-parser-output > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(6) > center:nth-child(1)')?.textContent,
        ImageURL: characterDocument.querySelector('.size120px > img:nth-child(1)')?.getAttribute('src'),
        LeaderSkill: characterDocument.querySelector('.righttablecard > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)')?.textContent,
        SuperAttack: characterDocument.querySelector('.righttablecard > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1)')?.textContent,
        UltraSuperAttack: characterDocument.querySelector('.righttablecard > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1)')?.textContent,
        Passive: characterDocument.querySelector('.righttablecard > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(1)')?.textContent,
        Links: Array.from(characterDocument.querySelectorAll('.righttablecard > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(10) > td:nth-child(1) > center:nth-child(1) > span > a')).map(link => link.textContent),
        Categories: Array.from(characterDocument.querySelectorAll('.righttablecard > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(1) > center:nth-child(1) > a')).map(link => link.textContent),
        KiMeter: characterDocument.querySelector('.righttablecard > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > center:nth-child(1) > a:nth-child(1) > img:nth-child(1)')?.getAttribute('alt')?.split('.png')[0],
        BaseHP: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > center:nth-child(1)')?.textContent,
        MaxLevelHP: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > center:nth-child(1)')?.textContent,
        FreeDupeHP: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(4) > center:nth-child(1)')?.textContent,
        RainbowHP: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5) > center:nth-child(1)')?.textContent,
        BaseAttack: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > center:nth-child(1)')?.textContent,
        MaxLevelAttack: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3) > center:nth-child(1)')?.textContent,
        FreeDupeAttack: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(4) > center:nth-child(1)')?.textContent,
        RainbowAttack: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(5) > center:nth-child(1)')?.textContent,
        BaseDefence: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2) > center:nth-child(1)')?.textContent,
        MaxDefence: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(3) > center:nth-child(1)')?.textContent,
        FreeDupeDefence: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(4) > center:nth-child(1)')?.textContent,
        RainbowDefence: characterDocument.querySelector('.righttablecard > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(5) > center:nth-child(1)')?.textContent,
        KiMultiplier: characterDocument.querySelector('.righttablecard > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)')?.textContent,

    }
    console.log(characterData);
    return characterData

}

