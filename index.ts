import axios, { AxiosError } from 'axios';
import { existsSync, mkdirSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { JSDOM } from 'jsdom';

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
    console.log(`Getting data for ${url}...`);

    if (!ignoreCache &&
        existsSync(
            resolve(__dirname, `.cache/${Buffer.from(url).toString('base64')}.html`),
        )
    ) {
        console.log(`I read ${url} from cache`);
        const HTMLData = await readFile(
            resolve(__dirname, `.cache/${Buffer.from(url).toString('base64')}.html`),
            { encoding: 'utf8' }
        );
        const dom = new JSDOM(HTMLData);
        return dom.window.document;
    } else {
        console.log(`I fetched ${url} fresh`);
        const HTMLData = await fetchPage(url);
        if (!ignoreCache && HTMLData) {
            writeFile(
                resolve(__dirname, `.cache/${Buffer.from(url).toString('base64')}.html`,
                ),
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

async function getData() {
    const document = await fetchFromWebOrCache('https://dbz-dokkanbattle.fandom.com/wiki/Category:LR', false);
    const data = extractLinks(document);
    saveData('LR-links', data)
}

getData();