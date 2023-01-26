"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDokkanResults = void 0;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const scraper_1 = require("./scraper");
async function saveDokkanResults() {
    console.log('Starting scrape');
    const URData = await (0, scraper_1.getDokkanData)('UR');
    console.log('First set done');
    const URData2 = await (0, scraper_1.getDokkanData)('UR?from=Evil+Pride+Frieza+(Final+Form)+(Angel)');
    console.log('Second set done');
    const URData3 = await (0, scraper_1.getDokkanData)('UR?from=Next-Level+Strike+Super+Saiyan+God+SS+Goku');
    console.log('Third set done');
    const URData4 = await (0, scraper_1.getDokkanData)('UR?from=Training+and+Refreshment+Goku');
    console.log('Forth set done');
    const LRData = await (0, scraper_1.getDokkanData)('LR');
    console.log('Finished scrape, saving data');
    let data = LRData.concat(URData, URData2, URData3, URData4);
    let currentDate = new Date();
    let day = ("0" + currentDate.getUTCDate()).slice(-2);
    let month = ("0" + currentDate.getUTCMonth() + 1).slice(-2);
    let year = currentDate.getUTCFullYear();
    saveData(year + month + day + 'DokkanCharacterData', data);
}
exports.saveDokkanResults = saveDokkanResults;
function saveData(fileName, data) {
    if (!(0, fs_1.existsSync)((0, path_1.resolve)(__dirname, 'data'))) {
        (0, fs_1.mkdirSync)('data');
    }
    (0, promises_1.writeFile)((0, path_1.resolve)(__dirname, `data/${fileName}.json`), JSON.stringify(data), { encoding: 'utf8' });
}
saveDokkanResults();
//# sourceMappingURL=index.js.map