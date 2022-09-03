import { existsSync, mkdirSync } from "fs";
import { writeFile } from "fs/promises";
import { resolve } from "path";
import { getDokkanData } from "./scraper";

async function saveDokkanResults() {
    const data = await getDokkanData();
    let currentDate = new Date();
    let day = ("0" + currentDate.getUTCDate()).slice(-2);
    let month = ("0" + currentDate.getUTCMonth()).slice(-2);
    let year = currentDate.getUTCFullYear()
    saveData(year + month + day, data)
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