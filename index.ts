import axios, { AxiosError } from 'axios';
import { existsSync, mkdirSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { JSDOM } from 'jsdom';

export async function getDokkanData() {
    const document: Document = await fetchFromWebOrCache('https://dbz-dokkanbattle.fandom.com/wiki/Category:LR', false);
    const links: string[] = extractLinks(document);
    saveData('LR-links', links)

    const charactersData = await Promise.all(links.map(async link => {
        const characterDocument: Document = await fetchFromWebOrCache(link)
        return extractCharacterData(characterDocument)
    }))

    saveData('LR-characters', charactersData)
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

export async function fetchFromWebOrCache(url: string, ignoreCache = false) {
    // If the cache folder doesn't exist, create it
    if (!existsSync(resolve(__dirname, '.cache'))) {
        mkdirSync('.cache')
    }
    // console.log(`Getting data for ${url}...`);

    const fileName = resolve(__dirname, `.cache/${Buffer.from(url).toString('base64')}.html`)
    // console.log(fileName);

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

export function extractCharacterData(characterDocument: Document) {
    const transformedCharacterData: Record<string, unknown>[] = extractTransformedCharacterData(characterDocument);

    const characterData = {
        Name: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr > td:nth-child(2)')?.innerHTML.split('<br>')[1].split('</b>')[0].replace('&amp;', '&'),
        Title: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr > td:nth-child(2)')?.innerHTML.split('<br>')[0].split('<b>')[1],
        MaxLevel: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td')?.textContent?.split('/')[1] || characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td')?.textContent?.split('/')[0],
        MaxSALevel: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td:nth-child(2) > center')?.innerHTML.split('>/')[1],
        Rarity: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td:nth-child(3) > center')?.querySelector('a')?.getAttribute('title')?.split('Category:')[1],
        Class: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td:nth-child(4) > center:nth-child(1) > a:nth-child(1)')?.getAttribute('title')?.split(' ')[0].split('Category:')[1],
        Type: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td:nth-child(4) > center:nth-child(1) > a:nth-child(1)')?.getAttribute('title')?.split(' ')[1],
        Cost: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td:nth-child(5) > center:nth-child(1)')?.textContent,
        ID: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr:nth-child(3) > td:nth-child(6) > center:nth-child(1)')?.textContent,
        ImageURL: characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr > td > div > img')?.getAttribute('src') || characterDocument.querySelector('.mw-parser-output')?.querySelector('table > tbody > tr > td > a')?.getAttribute('href'),
        LeaderSkill: characterDocument.querySelector('[data-image-name="Leader Skill.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        EZALeaderSkill: characterDocument.querySelector('.ezatabber > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td')?.textContent,
        SuperAttack: characterDocument.querySelector('[data-image-name="Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        EZASuperAttack: characterDocument.querySelectorAll('table.ezawidth')[1]?.querySelector('[data-image-name="Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        UltraSuperAttack: characterDocument.querySelector('[data-image-name="Ultra Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        EZAUltraSuperAttack: characterDocument.querySelectorAll('table.ezawidth')[1]?.querySelector('[data-image-name="Ultra Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        Passive: characterDocument.querySelector('[data-image-name="Passive skill.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        EZAPassive: characterDocument.querySelectorAll('table.ezawidth')[1]?.querySelector('[data-image-name="Passive skill.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        ActiveSkill: characterDocument.querySelector('[data-image-name="Active skill.png"]')?.closest('tr')?.nextElementSibling?.textContent || characterDocument.querySelector('[data-image-name="Active skill.png"]')?.closest('tr')?.nextElementSibling?.nextElementSibling?.textContent,
        ActiveSkillCondition: characterDocument.querySelector('[data-image-name="Active skill.png"]')?.closest('tr')?.nextElementSibling?.nextElementSibling?.nextElementSibling?.querySelector('td > center')?.textContent,
        EZAActiveSkill: characterDocument.querySelectorAll('table.ezawidth')[1]?.querySelector('[data-image-name="Active skill.png"]')?.closest('tr')?.nextElementSibling?.textContent,
        EZAActiveSkillCondition: characterDocument.querySelectorAll('table.ezawidth')[1]?.querySelector('[data-image-name="Active skill.png"]')?.closest('tr')?.nextElementSibling?.nextElementSibling?.nextElementSibling?.querySelector('td > center')?.textContent,

        TransformationCondition: characterDocument.querySelector('[data-image-name="Transformation Condition.png"]')?.closest('tr')?.nextElementSibling?.querySelector('td > center')?.textContent,

        Links: Array.from(characterDocument.querySelector('[data-image-name="Link skill.png"]')?.closest('tr')?.nextElementSibling?.querySelectorAll('span > a') ?? []).map(link => link.textContent),
        Categories: Array.from(characterDocument.querySelector('[data-image-name="Category.png"]')?.closest('tr')?.nextElementSibling?.querySelectorAll('a') ?? []).map(link => link.textContent),
        KiMeter: Array.from(characterDocument.querySelector('[data-image-name="Ki meter.png"]')?.closest('tbody')?.querySelectorAll('img') ?? []).map(kiMeter => kiMeter.getAttribute('alt')?.split('.png')[0]).slice(1),
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
        KiMultiplier: characterDocument.querySelector('.righttablecard > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)')?.innerHTML.split('► ')[1].split('<br>')[0].concat('; ', characterDocument.querySelector('.righttablecard > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)')?.innerHTML.split('<br>► ')[1] ?? '').replace('<a href="/wiki/Super_Attack_Multipliers" title="Super Attack Multipliers">SA Multiplier</a>', 'SA Multiplier'),
        Transformations: transformedCharacterData
    }
    return characterData
}

// TODO
function extractTransformedCharacterData(characterDocument: Document): Record<string, unknown>[] {
    const transformedArray: Record<string, unknown>[] = []
    const transformCount = characterDocument.querySelectorAll('.mw-parser-output > div:nth-child(2) > div > ul > li').length

    // index = 1 to skip the untransformed state
    for (let index = 1; index < transformCount; index++) {
        const transformationData = {
            TransformedName: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2}) > table > tbody > tr > td:nth-child(2)`)?.innerHTML.split('<br>')[1].split('</b>')[0].replace('&amp;', '&'),
            TransformedID: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2}) > table > tbody > tr:nth-child(3) > td:nth-child(6)`)?.textContent,
            TransformedClass: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2}) > table > tbody > tr:nth-child(3) > td:nth-child(4) > center > a`)?.getAttribute('title')?.split(' ')[0].split('Category:')[1],
            TransformedType: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2}) > table > tbody > tr:nth-child(3) > td:nth-child(4) > center > a`)?.getAttribute('title')?.split(' ')[1],
            TransformedSuperAttack: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('[data-image-name="Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,
            TransformedEZASuperAttack: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('.righttablecard > table > tbody > tr > td > div > div > div:nth-child(3)')?.querySelector('[data-image-name="Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,
            TransformedUltraSuperAttack: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('[data-image-name="Ultra Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,
            TransformedEZAUltraSuperAttack: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('.righttablecard > table > tbody > tr > td > div > div > div:nth-child(3)')?.querySelector('[data-image-name="Ultra Super atk.png"]')?.closest('tr')?.nextElementSibling?.textContent,  
            TransformedPassive: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('[data-image-name="Passive skill.png"]')?.closest('tr')?.nextElementSibling?.textContent,
            TransformedEZAPassive: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('.righttablecard > table > tbody > tr > td > div > div > div:nth-child(3)')?.querySelector('[data-image-name="Passive skill.png"]')?.closest('tr')?.nextElementSibling?.textContent,
            TransformedActiveSkill: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('[data-image-name="Active skill.png"]')?.closest('tr')?.nextElementSibling?.textContent,
            TransformedActiveSkillCondition: characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('[data-image-name="Activation Condition.png"]')?.closest('tr')?.nextElementSibling?.textContent,
            TransformedLinks: Array.from(characterDocument.querySelector(`.mw-parser-output > div:nth-child(2) > div:nth-child(${index + 2})`)?.querySelector('[data-image-name="Link skill.png"]')?.closest('tr')?.nextElementSibling?.querySelectorAll('span > a') ?? []).map(link => link.textContent),
        }
        transformedArray.push(transformationData)
    }
    return transformedArray

}

