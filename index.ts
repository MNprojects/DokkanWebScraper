import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";
import { resolve } from "path";
import { getDokkanData } from "./scraper";

async function saveDokkanResults() {
    console.log('Starting scrape');
    const URData = await getDokkanData('UR');
    console.log('First set done');
    const URData2 = await getDokkanData('UR?from=Evil+Pride+Frieza+(Final+Form)+(Angel)');
    console.log('Second set done');
    const URData3 = await getDokkanData('UR?from=Next-Level+Strike+Super+Saiyan+God+SS+Goku');
    console.log('Third set done');
    const URData4 = await getDokkanData('UR?from=Training+and+Refreshment+Goku');
    console.log('Forth set done');
    const LRData = await getDokkanData('LR');
    console.log('Finished scrape, saving data');
    let data = LRData.concat(URData, URData2, URData3, URData4);
    let currentDate = new Date();
    let day = ("0" + currentDate.getUTCDate()).slice(-2);
    let month = ("0" + currentDate.getUTCMonth()).slice(-2);
    let year = currentDate.getUTCFullYear()
    saveData(year + month + day + 'DokkanCharacterData', data)
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

saveDokkanResults()