"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const mocha_1 = require("mocha");
const scraper_1 = require("./scraper");
let transformCharacterDocument;
let transformCharacterData;
let multiTransformEZACharacterDocument;
let multiTransformEZACharacterData;
let EZAActiveCharacterDocument;
let EZAActiveCharacterData;
let standardCharacterDocument;
let standardCharacterData;
let transformEZALRCharacterDocument;
let transformEZALRCharacterData;
let separateDetailsBoxDocument;
let separateDetailsBoxData;
before(async function () {
    this.timeout(10000);
    transformCharacterDocument = await (0, scraper_1.fetchFromWeb)('https://dbz-dokkanbattle.fandom.com/wiki/Divine_Warriors_with_Infinite_Power_Super_Saiyan_God_Goku_%26_Super_Saiyan_God_Vegeta');
    transformCharacterData = (0, scraper_1.extractCharacterData)(transformCharacterDocument);
    multiTransformEZACharacterDocument = await (0, scraper_1.fetchFromWeb)('https://dbz-dokkanbattle.fandom.com/wiki/Boiling_Power_Super_Saiyan_Goku#Super_Saiyan');
    multiTransformEZACharacterData = (0, scraper_1.extractCharacterData)(multiTransformEZACharacterDocument);
    EZAActiveCharacterDocument = await (0, scraper_1.fetchFromWeb)('https://dbz-dokkanbattle.fandom.com/wiki/Wings_Spread_Out_to_the_Cosmos_Pan_(GT)_(Honey)');
    EZAActiveCharacterData = (0, scraper_1.extractCharacterData)(EZAActiveCharacterDocument);
    standardCharacterDocument = await (0, scraper_1.fetchFromWeb)('https://dbz-dokkanbattle.fandom.com/wiki/A_Promise_Made_to_Kakarot_Super_Saiyan_2_Vegeta_(Angel)');
    standardCharacterData = (0, scraper_1.extractCharacterData)(standardCharacterDocument);
    transformEZALRCharacterDocument = await (0, scraper_1.fetchFromWeb)('https://dbz-dokkanbattle.fandom.com/wiki/Fused_Fighting_Force_Super_Saiyan_Goku_(Angel)_%26_Super_Saiyan_Vegeta_(Angel)');
    transformEZALRCharacterData = (0, scraper_1.extractCharacterData)(transformEZALRCharacterDocument);
    separateDetailsBoxDocument = await (0, scraper_1.fetchFromWeb)('https://dbz-dokkanbattle.fandom.com/wiki/Ally_of_Love_and_Friendship_Videl');
    separateDetailsBoxData = (0, scraper_1.extractCharacterData)(separateDetailsBoxDocument);
});
describe("Name Extraction", function () {
    (0, mocha_1.it)("should be able to extract the name - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.name, "Super Saiyan Goku");
    });
    (0, mocha_1.it)("should be able to extract the name - transform", () => {
        (0, assert_1.equal)(transformCharacterData.name, "Super Saiyan God Goku & Super Saiyan God Vegeta");
    });
    (0, mocha_1.it)("should be able to extract the name - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.name, "Pan (GT) (Honey)");
    });
    (0, mocha_1.it)("should be able to extract the name - standard", () => {
        (0, assert_1.equal)(standardCharacterData.name, "Super Saiyan 2 Vegeta (Angel)");
    });
});
describe("Title Extraction", function () {
    (0, mocha_1.it)("should be able to extract the title - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.title, "Boiling Power");
    });
    (0, mocha_1.it)("should be able to extract the title - transform", () => {
        (0, assert_1.equal)(transformCharacterData.title, "Divine Warriors with Infinite Power");
    });
    (0, mocha_1.it)("should be able to extract the title - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.title, "Wings Spread Out to the Cosmos");
    });
    (0, mocha_1.it)("should be able to extract the title - standard", () => {
        (0, assert_1.equal)(standardCharacterData.title, "A Promise Made to Kakarot");
    });
});
describe("Max Level Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Max Level - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.maxLevel, "140");
    });
    (0, mocha_1.it)("should be able to extract the Max Level - transform", () => {
        (0, assert_1.equal)(transformCharacterData.maxLevel, "150");
    });
    (0, mocha_1.it)("should be able to extract the Max Level - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.maxLevel, "150");
    });
    (0, mocha_1.it)("should be able to extract the Max Level - standard", () => {
        (0, assert_1.equal)(standardCharacterData.maxLevel, "150");
    });
});
describe("Max SA Level Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Max SA Level - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.maxSALevel, "15");
    });
    (0, mocha_1.it)("should be able to extract the Max SA Level - transform", () => {
        (0, assert_1.equal)(transformCharacterData.maxSALevel, "20");
    });
    (0, mocha_1.it)("should be able to extract the Max SA Level - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.maxSALevel, "25");
    });
    (0, mocha_1.it)("should be able to extract the Max SA Level - standard", () => {
        (0, assert_1.equal)(standardCharacterData.maxSALevel, "20");
    });
});
describe("Rarity Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Rarity - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.rarity, "UR");
    });
    (0, mocha_1.it)("should be able to extract the Rarity - transform", () => {
        (0, assert_1.equal)(transformCharacterData.rarity, "LR");
    });
    (0, mocha_1.it)("should be able to extract the Rarity - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.rarity, "LR");
    });
    (0, mocha_1.it)("should be able to extract the Rarity - standard", () => {
        (0, assert_1.equal)(standardCharacterData.rarity, "LR");
    });
});
describe("Class Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Class - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.class, "Super");
    });
    (0, mocha_1.it)("should be able to extract the Class - transform", () => {
        (0, assert_1.equal)(transformCharacterData.class, "Super");
    });
    (0, mocha_1.it)("should be able to extract the Class - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.class, "Super");
    });
    (0, mocha_1.it)("should be able to extract the Class - standard", () => {
        (0, assert_1.equal)(standardCharacterData.class, "Super");
    });
});
describe("Type Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Type - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.type, "AGL");
    });
    (0, mocha_1.it)("should be able to extract the Type - transform", () => {
        (0, assert_1.equal)(transformCharacterData.type, "TEQ");
    });
    (0, mocha_1.it)("should be able to extract the Type - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.type, "STR");
    });
    (0, mocha_1.it)("should be able to extract the Type - standard", () => {
        (0, assert_1.equal)(standardCharacterData.type, "PHY");
    });
});
describe("Cost Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Cost - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.cost, "58");
    });
    (0, mocha_1.it)("should be able to extract the Cost - transform", () => {
        (0, assert_1.equal)(transformCharacterData.cost, "77");
    });
    (0, mocha_1.it)("should be able to extract the Cost - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.cost, "59");
    });
    (0, mocha_1.it)("should be able to extract the Cost - standard", () => {
        (0, assert_1.equal)(standardCharacterData.cost, "77");
    });
});
describe("ID Extraction", function () {
    (0, mocha_1.it)("should be able to extract the ID - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.id, "11476");
    });
    (0, mocha_1.it)("should be able to extract the ID - transform", () => {
        (0, assert_1.equal)(transformCharacterData.id, "12238");
    });
    (0, mocha_1.it)("should be able to extract the ID - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.id, "11591");
    });
    (0, mocha_1.it)("should be able to extract the ID - standard", () => {
        (0, assert_1.equal)(standardCharacterData.id, "12022");
    });
});
describe("ImageURL Extraction", function () {
    (0, mocha_1.it)("should be able to extract the ImageURL - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.imageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/2/23/Card_1014760_thumb.png/revision/latest?cb=20180827182222");
    });
    (0, mocha_1.it)("should be able to extract the transformedImageURL - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedImageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/4/49/Card_4014770_thumb.png/revision/latest?cb=20181017022011");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedImageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/0/01/Card_4014780_thumb.png/revision/latest?cb=20181017022642");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedImageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/5/56/Card_4014790_thumb.png/revision/latest?cb=20181017022642");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedImageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/5/55/Card_4014800_thumb.png/revision/latest?cb=20181017022642");
    });
    (0, mocha_1.it)("should be able to extract the ImageURL - transform", () => {
        (0, assert_1.equal)(transformCharacterData.imageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/7/75/Card_1022380_thumb_apng.png/revision/latest?cb=20220130071219&format=original");
    });
    (0, mocha_1.it)("should be able to extract the transformedImageURL - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedImageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/b/b4/Card_4022390_thumb_apng.png/revision/latest?cb=20220130071254&format=original");
    });
    (0, mocha_1.it)("should be able to extract the ImageURL - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.imageURL, "https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/3/35/Card_1015910_thumb_apng.png/revision/latest?cb=20190128070309&format=original");
    });
    (0, mocha_1.it)("should be able to extract the ImageURL - standard", () => {
        (0, assert_1.equal)(standardCharacterData.imageURL, "https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/a/a1/Card_1020220_thumb_apng.png/revision/latest?cb=20200916113202&format=original");
    });
});
describe("LeaderSkill Extraction", function () {
    (0, mocha_1.it)("should be able to extract the LeaderSkill - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.leaderSkill, "Super Class Ki +3 and HP, ATK & DEF +120%");
    });
    (0, mocha_1.it)("should be able to extract the LeaderSkill - transform", () => {
        (0, assert_1.equal)(transformCharacterData.leaderSkill, '"Power Beyond Super Saiyan" or "Movie Heroes" Category Ki +3 and HP, ATK & DEF +170%;plus an additional HP, ATK & DEF +30% for characters who also belong to the "Kamehameha" Category');
    });
    (0, mocha_1.it)("should be able to extract the LeaderSkill - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.leaderSkill, "Recovers 3333 HP per Ki Sphere of character's Type obtained");
    });
    (0, mocha_1.it)("should be able to extract the LeaderSkill - standard", () => {
        (0, assert_1.equal)(standardCharacterData.leaderSkill, '"Worthy Rivals" Category Ki +4 and HP, ATK & DEF +150%;or Type Ki +4 and HP, ATK & DEF +100%');
    });
});
describe("EZALeaderSkill Extraction", function () {
    (0, mocha_1.it)("should be able to extract the EZALeaderSkill - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.ezaLeaderSkill, "Super Class Ki +3 and HP, ATK & DEF +130%");
    });
    (0, mocha_1.it)("should be able to extract the EZALeaderSkill - transform", () => {
        (0, assert_1.equal)(transformCharacterData.ezaLeaderSkill, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZALeaderSkill - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.ezaLeaderSkill, "Recovers 5555 HP per Ki Sphere of character's Type obtained");
    });
    (0, mocha_1.it)("should be able to extract the EZALeaderSkill - standard", () => {
        (0, assert_1.equal)(standardCharacterData.ezaLeaderSkill, undefined);
    });
});
describe("SuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the SuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.superAttack, "Raises ATK & DEF[1] and causes immense damage to enemy");
    });
    (0, mocha_1.it)("should be able to extract the SuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.superAttack, 'Raises ATK & DEF[1] and causes colossal damage to enemy');
    });
    (0, mocha_1.it)("should be able to extract the SuperAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.superAttack, "Causes colossal damage with a chance of stunning the enemy[1]");
    });
    (0, mocha_1.it)("should be able to extract the SuperAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.superAttack, 'Raises DEF for 1 turn[1] and causes colossal damage to enemy');
    });
});
describe("EZASuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the EZASuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.ezaSuperAttack, "Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]");
    });
    (0, mocha_1.it)("should be able to extract the EZASuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.ezaSuperAttack, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZASuperAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.ezaSuperAttack, "Causes colossal damage with a medium chance of stunning the enemy[2]");
    });
    (0, mocha_1.it)("should be able to extract the EZASuperAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.ezaSuperAttack, undefined);
    });
});
describe("UltraSuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the UltraSuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.ultraSuperAttack, undefined);
    });
    (0, mocha_1.it)("should be able to extract the UltraSuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.ultraSuperAttack, 'Raises ATK & DEF[1] and causes mega-colossal damage to enemy');
    });
    (0, mocha_1.it)("should be able to extract the UltraSuperAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.ultraSuperAttack, "Causes colossal damage with a medium chance of stunning the enemy[2]");
    });
    (0, mocha_1.it)("should be able to extract the UltraSuperAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.ultraSuperAttack, 'Causes mega-colossal damage to enemy and greatly lowers DEF[2]');
    });
});
describe("EZAUltraSuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the EZAUltraSuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.ezaUltraSuperAttack, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZAUltraSuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.ezaUltraSuperAttack, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZAUltraSuperAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.ezaUltraSuperAttack, "Greatly raises ATK for 1 turn[3] and causes colossal damage with a medium chance of stunning the enemy[2]");
    });
    (0, mocha_1.it)("should be able to extract the EZAUltraSuperAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.ezaUltraSuperAttack, undefined);
    });
});
describe("Passive Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Passive - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.passive, 'ATK & DEF +80%; reduces damage received by 21%; Transform when conditions are met');
    });
    (0, mocha_1.it)("should be able to extract the Passive - transform", () => {
        (0, assert_1.equal)(transformCharacterData.passive, "Activates the Entrance Animation upon entry (once only); guards all attacks for 1 turn from start of turn; plus an additional Ki +1 per Type Ki Sphere obtained and ATK & DEF +77% for 7 turns from start of turn; ATK & DEF +120%; plus an additional Ki +1 per Type Ki Sphere obtained; chance of performing a critical hit +7% per  Ki Sphere obtained; launches an additional Super Attack when Ki is 20 or more; attacks effective against all types when Ki is 24");
    });
    (0, mocha_1.it)("should be able to extract the Passive - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.passive, "Recovers 33% of damage dealt as HP;high chance[4] of reducing damage received by 55%");
    });
    (0, mocha_1.it)("should be able to extract the Passive - standard", () => {
        (0, assert_1.equal)(standardCharacterData.passive, 'ATK & DEF +70%; plus an additional ATK & DEF +4% each time Ki rises by 1 (up to 70%); Ki +3 when the name of an ally who is attacking in the same turn or an enemy includes "Goku" (Youth, Captain Ginyu, Jr., etc. excluded); plus an additional Ki +3 when there is a "Majin Buu Saga" Category ally whose name includes "Goku" attacking in the same turn');
    });
});
describe("EZAPassive Extraction", function () {
    (0, mocha_1.it)("should be able to extract the EZAPassive - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.ezaPassive, 'ATK & DEF +110%; Ki +3 plus an additional ATK +10% and DEF +40% when attacking Extreme Class enemies; reduces damage received by 21%; Transforms when conditions are met');
    });
    (0, mocha_1.it)("should be able to extract the EZAPassive - transform", () => {
        (0, assert_1.equal)(transformCharacterData.ezaPassive, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZAPassive - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.ezaPassive, "High chance of Ki +3 and high chance[5] of an additional Ki +3; recovers 33% of damage dealt as HP; reduces damage received by 55%");
    });
    (0, mocha_1.it)("should be able to extract the EZAPassive - standard", () => {
        (0, assert_1.equal)(standardCharacterData.ezaPassive, undefined);
    });
});
describe("ActiveSkill Extraction", function () {
    (0, mocha_1.it)("should be able to extract the ActiveSkill - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.activeSkill, undefined);
    });
    (0, mocha_1.it)("should be able to extract the ActiveSkill - transform", () => {
        (0, assert_1.equal)(transformCharacterData.activeSkill, 'Transforms; Can be activated starting from the 4th turn from the start of battle (once only)');
    });
    (0, mocha_1.it)("should be able to extract the ActiveSkill - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.activeSkill, "All allies' ATK +33% for 1 turn");
    });
    (0, mocha_1.it)("should be able to extract the ActiveSkill - standard", () => {
        (0, assert_1.equal)(standardCharacterData.activeSkill, 'Ki +1, ATK +59% and DEF +78% for 1 turn');
    });
});
describe("ActiveSkillCondition Extraction", function () {
    (0, mocha_1.it)("should be able to extract the ActiveSkillCondition - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.activeSkillCondition, undefined);
    });
    (0, mocha_1.it)("should be able to extract the ActiveSkillCondition - transform", () => {
        (0, assert_1.equal)(transformCharacterData.activeSkillCondition, undefined);
    });
    (0, mocha_1.it)("should be able to extract the ActiveSkillCondition - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.activeSkillCondition, "Can be activated starting from the 3rd turn from start of battle (once only)");
    });
    (0, mocha_1.it)("should be able to extract the ActiveSkillCondition - standard", () => {
        (0, assert_1.equal)(standardCharacterData.activeSkillCondition, 'Can be activated when there is a "Majin Buu Saga" Category ally whose name includes "Goku" attacking in the same turn, starting from the 3rd turn from the start of battle (once only)');
    });
});
describe("EZAActiveSkill Extraction", function () {
    (0, mocha_1.it)("should be able to extract the EZAActiveSkill - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.ezaActiveSkill, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZAActiveSkill - transform", () => {
        (0, assert_1.equal)(transformCharacterData.ezaActiveSkill, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZAActiveSkill - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.ezaActiveSkill, "All allies' ATK +33% for 1 turn");
    });
    (0, mocha_1.it)("should be able to extract the EZAActiveSkill - standard", () => {
        (0, assert_1.equal)(standardCharacterData.ezaActiveSkill, undefined);
    });
});
describe("EZAActiveSkillCondition Extraction", function () {
    (0, mocha_1.it)("should be able to extract the EZAActiveSkillCondition - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.ezaActiveSkillCondition, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZAActiveSkillCondition - transform", () => {
        (0, assert_1.equal)(transformCharacterData.ezaActiveSkillCondition, undefined);
    });
    (0, mocha_1.it)("should be able to extract the EZAActiveSkillCondition - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.ezaActiveSkillCondition, "Can be activated starting from the 3rd turn from start of battle (once only)");
    });
    (0, mocha_1.it)("should be able to extract the EZAActiveSkillCondition - standard", () => {
        (0, assert_1.equal)(standardCharacterData.ezaActiveSkillCondition, undefined);
    });
});
describe("TransformationCondition Extraction", function () {
    (0, mocha_1.it)("should be able to extract the TransformationCondition - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformationCondition, "Transforms starting from the 3rd turn from the start of battle");
    });
    (0, mocha_1.it)("should be able to extract the TransformationCondition - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformationCondition, "Transforms; Can be activated starting from the 4th turn from the start of battle (once only)");
    });
    (0, mocha_1.it)("should be able to extract the TransformationCondition - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.transformationCondition, undefined);
    });
    (0, mocha_1.it)("should be able to extract the TransformationCondition - standard", () => {
        (0, assert_1.equal)(standardCharacterData.transformationCondition, undefined);
    });
});
describe("Links Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Links - multitransform", () => {
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.links, ['All in the Family', 'Golden Warrior', 'Super Saiyan', 'Experienced Fighters', 'Kamehameha', 'Prepared for Battle', 'Fierce Battle']);
    });
    (0, mocha_1.it)("should be able to extract the Links - transform", () => {
        (0, assert_1.deepEqual)(transformCharacterData.links, ['Super Saiyan', 'Kamehameha', 'Warrior Gods', 'Godly Power', 'Prepared for Battle', 'Fierce Battle', 'Legendary Power']);
    });
    (0, mocha_1.it)("should be able to extract the Links - EZA", () => {
        (0, assert_1.deepEqual)(EZAActiveCharacterData.links, ['All in the Family', 'The Saiyan Lineage', 'Battlefield Diva', 'GT', 'The Innocents', 'Shattering the Limit', 'Legendary Power']);
    });
    (0, mocha_1.it)("should be able to extract the Links - standard", () => {
        (0, assert_1.deepEqual)(standardCharacterData.links, ['Saiyan Warrior Race', 'Prodigies', 'Super Saiyan', 'Royal Lineage', 'Golden Warrior', 'Fierce Battle', 'Legendary Power']);
    });
});
describe("Categories Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Categories - multitransform", () => {
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.categories, ['Realm of Gods', 'Super Saiyan 3', 'Pure Saiyans', 'Full Power', 'Transformation Boost', "Goku's Family", 'Super Saiyans', 'Kamehameha', 'Super Saiyan 2', 'Turtle School', 'Mastered Evolution', 'Legendary Existence', 'Bond of Friendship', 'Accelerated Battle', 'Power Beyond Super Saiyan', 'Bond of Parent and Child', 'Warriors Raised on Earth']);
    });
    (0, mocha_1.it)("should be able to extract the Categories - transform", () => {
        (0, assert_1.deepEqual)(transformCharacterData.categories, ['Fusion', 'Realm of Gods', 'Pure Saiyans', 'Transformation Boost', 'Joined Forces', 'Movie Heroes', 'Kamehameha', 'Final Trump Card', 'Time Limit', 'Mastered Evolution', 'Power Beyond Super Saiyan', 'Fused Fighters', 'Bond of Parent and Child', 'Super Heroes']);
    });
    (0, mocha_1.it)("should be able to extract the Categories - EZA", () => {
        (0, assert_1.deepEqual)(EZAActiveCharacterData.categories, ['Hybrid Saiyans', 'Dragon Ball Seekers', "Goku's Family", 'Youth', 'Space-Traveling Warriors', 'GT Heroes', 'Bond of Friendship', 'Bond of Parent and Child', 'Warriors Raised on Earth']);
    });
    (0, mocha_1.it)("should be able to extract the Categories - standard", () => {
        (0, assert_1.deepEqual)(standardCharacterData.categories, ['Resurrected Warriors', 'Majin Buu Saga', 'Pure Saiyans', "Vegeta's Family", 'Worthy Rivals', 'Otherworld Warriors', 'Super Saiyan 2', 'All-Out Struggle', 'Connected Hope', 'Gifted Warriors', 'Time Limit', 'Mastered Evolution', 'Battle of Fate', 'Power Beyond Super Saiyan', 'Bond of Parent and Child']);
    });
});
describe("KiMeter Extraction", function () {
    (0, mocha_1.it)("should be able to extract the KiMeter - multitransform", () => {
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.kiMeter, ['KiMeter 2 Green']);
    });
    (0, mocha_1.it)("should be able to extract the KiMeter - transform", () => {
        (0, assert_1.deepEqual)(transformCharacterData.kiMeter, ['KiMeter 2 Green LR']);
    });
    (0, mocha_1.it)("should be able to extract the KiMeter - EZA", () => {
        (0, assert_1.deepEqual)(EZAActiveCharacterData.kiMeter, ['KiMeter 2 Green LR', 'KiMeter 2 Green 10 Red LR']);
    });
    (0, mocha_1.it)("should be able to extract the KiMeter - standard", () => {
        (0, assert_1.deepEqual)(standardCharacterData.kiMeter, ['KiMeter 2 Green LR']);
    });
});
describe("BaseHP Extraction", function () {
    (0, mocha_1.it)("should be able to extract the BaseHP - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.baseHP, '3213');
    });
    (0, mocha_1.it)("should be able to extract the BaseHP - transform", () => {
        (0, assert_1.equal)(transformCharacterData.baseHP, '4992');
    });
    (0, mocha_1.it)("should be able to extract the BaseHP - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.baseHP, "5087");
    });
    (0, mocha_1.it)("should be able to extract the BaseHP - standard", () => {
        (0, assert_1.equal)(standardCharacterData.baseHP, '5007');
    });
});
describe("MaxLevelHP Extraction", function () {
    (0, mocha_1.it)("should be able to extract the MaxLevelHP - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.maxLevelHP, '10605');
    });
    (0, mocha_1.it)("should be able to extract the MaxLevelHP - transform", () => {
        (0, assert_1.equal)(transformCharacterData.maxLevelHP, '16475');
    });
    (0, mocha_1.it)("should be able to extract the MaxLevelHP - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.maxLevelHP, "16788");
    });
    (0, mocha_1.it)("should be able to extract the MaxLevelHP - standard", () => {
        (0, assert_1.equal)(standardCharacterData.maxLevelHP, '16688');
    });
});
describe("FreeDupeHP Extraction", function () {
    (0, mocha_1.it)("should be able to extract the FreeDupeHP - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.freeDupeHP, '12605');
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeHP - transform", () => {
        (0, assert_1.equal)(transformCharacterData.freeDupeHP, '18475');
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeHP - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.freeDupeHP, "17988");
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeHP - standard", () => {
        (0, assert_1.equal)(standardCharacterData.freeDupeHP, '18688');
    });
});
describe("RainbowHP Extraction", function () {
    (0, mocha_1.it)("should be able to extract the RainbowHP - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.rainbowHP, '15205');
    });
    (0, mocha_1.it)("should be able to extract the RainbowHP - transform", () => {
        (0, assert_1.equal)(transformCharacterData.rainbowHP, '21075');
    });
    (0, mocha_1.it)("should be able to extract the RainbowHP - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.rainbowHP, "19788");
    });
    (0, mocha_1.it)("should be able to extract the RainbowHP - standard", () => {
        (0, assert_1.equal)(standardCharacterData.rainbowHP, '22088');
    });
});
describe("BaseAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the BaseAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.baseAttack, '3629');
    });
    (0, mocha_1.it)("should be able to extract the BaseAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.baseAttack, '5053');
    });
    (0, mocha_1.it)("should be able to extract the BaseAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.baseAttack, "3252");
    });
    (0, mocha_1.it)("should be able to extract the BaseAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.baseAttack, '4748');
    });
});
describe("MaxLevelAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the MaxLevelAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.maxLevelAttack, '11978');
    });
    (0, mocha_1.it)("should be able to extract the MaxLevelAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.maxLevelAttack, '16675');
    });
    (0, mocha_1.it)("should be able to extract the MaxLevelAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.maxLevelAttack, "10734");
    });
    (0, mocha_1.it)("should be able to extract the MaxLevelAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.maxLevelAttack, '15825');
    });
});
describe("FreeDupeAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the FreeDupeAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.freeDupeAttack, '13978');
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.freeDupeAttack, '18675');
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.freeDupeAttack, "11934");
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.freeDupeAttack, '17825');
    });
});
describe("RainbowAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the RainbowAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.rainbowAttack, '16978');
    });
    (0, mocha_1.it)("should be able to extract the RainbowAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.rainbowAttack, '22075');
    });
    (0, mocha_1.it)("should be able to extract the RainbowAttack - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.rainbowAttack, "13974");
    });
    (0, mocha_1.it)("should be able to extract the RainbowAttack - standard", () => {
        (0, assert_1.equal)(standardCharacterData.rainbowAttack, '20825');
    });
});
describe("BaseDefence Extraction", function () {
    (0, mocha_1.it)("should be able to extract the BaseDefence - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.baseDefence, '1621');
    });
    (0, mocha_1.it)("should be able to extract the BaseDefence - transform", () => {
        (0, assert_1.equal)(transformCharacterData.baseDefence, '2475');
    });
    (0, mocha_1.it)("should be able to extract the BaseDefence - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.baseDefence, "2496");
    });
    (0, mocha_1.it)("should be able to extract the BaseDefence - standard", () => {
        (0, assert_1.equal)(standardCharacterData.baseDefence, '2674');
    });
});
describe("MaxDefence Extraction", function () {
    (0, mocha_1.it)("should be able to extract the MaxDefence - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.maxDefence, '5350');
    });
    (0, mocha_1.it)("should be able to extract the MaxDefence - transform", () => {
        (0, assert_1.equal)(transformCharacterData.maxDefence, '8169');
    });
    (0, mocha_1.it)("should be able to extract the MaxDefence - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.maxDefence, "8239");
    });
    (0, mocha_1.it)("should be able to extract the MaxDefence - standard", () => {
        (0, assert_1.equal)(standardCharacterData.maxDefence, '8913');
    });
});
describe("FreeDupeDefence Extraction", function () {
    (0, mocha_1.it)("should be able to extract the FreeDupeDefence - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.freeDupeDefence, '7350');
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeDefence - transform", () => {
        (0, assert_1.equal)(transformCharacterData.freeDupeDefence, '10169');
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeDefence - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.freeDupeDefence, "9439");
    });
    (0, mocha_1.it)("should be able to extract the FreeDupeDefence - standard", () => {
        (0, assert_1.equal)(standardCharacterData.freeDupeDefence, '10913');
    });
});
describe("RainbowDefence Extraction", function () {
    (0, mocha_1.it)("should be able to extract the RainbowDefence - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.rainbowDefence, '10750');
    });
    (0, mocha_1.it)("should be able to extract the RainbowDefence - transform", () => {
        (0, assert_1.equal)(transformCharacterData.rainbowDefence, '13169');
    });
    (0, mocha_1.it)("should be able to extract the RainbowDefence - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.rainbowDefence, "10999");
    });
    (0, mocha_1.it)("should be able to extract the RainbowDefence - standard", () => {
        (0, assert_1.equal)(standardCharacterData.rainbowDefence, '13513');
    });
});
describe("KiMultiplier Extraction", function () {
    (0, mocha_1.it)("should be able to extract the KiMultiplier - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.kiMultiplier, '12 Ki Multiplier is 150%; ');
    });
    (0, mocha_1.it)("should be able to extract the KiMultiplier - transform", () => {
        (0, assert_1.equal)(transformCharacterData.kiMultiplier, '12 Ki Multiplier is 160%; 24 Ki Multiplier is 200%; SA Lv.20 raises SA Multiplier by an additional 30%');
    });
    (0, mocha_1.it)("should be able to extract the KiMultiplier - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.kiMultiplier, "12 Ki Multiplier is 140%; 24 Ki Multiplier is 200%; SA Lv.20 raises SA Multiplier by an additional 30%");
    });
    (0, mocha_1.it)("should be able to extract the KiMultiplier - standard", () => {
        (0, assert_1.equal)(standardCharacterData.kiMultiplier, '12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%; SA Lv.20 raises SA Multiplier by an additional 30%');
    });
    (0, mocha_1.it)("should be able to extract the KiMultiplier - separate details box", () => {
        (0, assert_1.equal)(separateDetailsBoxData.kiMultiplier, '12 Ki Multiplier is 150%');
    });
});
describe("Tranformations Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations.length, 4);
    });
    (0, mocha_1.it)("should be able to extract the Transformations - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations.length, 1);
    });
    (0, mocha_1.it)("should be able to extract the Transformations - EZA", () => {
        (0, assert_1.equal)(EZAActiveCharacterData.transformations.length, 0);
    });
    (0, mocha_1.it)("should be able to extract the Transformations - standard", () => {
        (0, assert_1.equal)(standardCharacterData.transformations.length, 0);
    });
});
describe("Tranformation Names Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation Names - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedName, 'Super Saiyan 2 Goku');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedName, 'Super Saiyan 3 Goku');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedName, 'Super Saiyan God Goku');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedName, 'Super Saiyan God SS Goku');
    });
    (0, mocha_1.it)("should be able to extract the Transformations Names - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedName, 'Super Saiyan God SS Goku & Super Saiyan God SS Vegeta');
    });
});
describe("Tranformation TransformedID Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedID - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedID, '41477');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedID, '41478');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedID, '41479');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedID, '41480');
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedID - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedID, '42239');
    });
});
describe("Tranformation TransformedClass Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedClass - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedClass, 'Super');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedClass, 'Super');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedClass, 'Super');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedClass, 'Super');
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedClass - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedClass, 'Super');
    });
});
describe("Tranformation TransformedType Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedType - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedType, 'AGL');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedType, 'AGL');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedType, 'AGL');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedType, 'AGL');
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedType - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedType, 'TEQ');
    });
});
describe("Tranformation TransformedSuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedSuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedSuperAttack, 'Raises ATK & DEF[1] and causes immense damage to enemy');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedSuperAttack, 'Raises ATK & DEF[1] and causes immense damage to enemy');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedSuperAttack, 'Raises ATK & DEF[1] and causes immense damage to enemy');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedSuperAttack, 'Causes immense damage with a great chance to stun the enemy[1]');
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedSuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedSuperAttack, 'Greatly raises ATK & DEF for 1 turn[1] and causes colossal damage to enemy');
    });
});
describe("Tranformation TransformedEZASuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedEZASuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedEZASuperAttack, 'Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedEZASuperAttack, 'Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedEZASuperAttack, 'Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]');
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedEZASuperAttack, 'Raises ATK & DEF for 1 turn[2] and causes immense damage with a great chance of stunning the enemy[1]');
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedEZASuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedEZASuperAttack, undefined);
    });
});
describe("Tranformation TransformedUltraSuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedUltraSuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedUltraSuperAttack, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedUltraSuperAttack, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedUltraSuperAttack, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedUltraSuperAttack, undefined);
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedUltraSuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedUltraSuperAttack, "Massively raises ATK & DEF for 1 turn[2] and causes mega-colossal damage to enemy; disables enemy's action once within the turn");
    });
});
describe("Tranformation TransformedUltraSuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedUltraSuperAttack - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedUltraSuperAttack, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedUltraSuperAttack, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedUltraSuperAttack, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedUltraSuperAttack, undefined);
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedUltraSuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedUltraSuperAttack, "Massively raises ATK & DEF for 1 turn[2] and causes mega-colossal damage to enemy; disables enemy's action once within the turn");
    });
});
describe("Tranformation TransformedEZAUltraSuperAttack Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformations TransformedEZAUltraSuperAttack - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedEZAUltraSuperAttack, undefined);
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedEZAUltraSuperAttack - transform", () => {
        (0, assert_1.equal)(transformEZALRCharacterData.transformations[0].transformedEZAUltraSuperAttack, "Greatly raises DEF for 1 turn[3], causes mega-colossal damage to enemy and greatly lowers ATK & DEF[4]");
    });
});
describe("Tranformation TransformedPassive Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedPassive - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedPassive, "ATK +90% and DEF +60%; reduces damage received by 22%; Transform when conditions are met");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedPassive, "ATK +100% and DEF +40%; reduces damage received by 23%; Transform when conditions are met");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedPassive, "ATK +110% and DEF +20%; reduces damage received by 24%; Transform when conditions are met");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedPassive, "ATK +120%; reduces damage received by 25%; Ki +12 and performs a critical hit (once only)");
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedPassive - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedPassive, "ATK & DEF +177%; plus an additional Ki +2 per Type Ki Sphere obtained; chance of performing a critical hit and chance of evading enemy's attack (including Super Attack) +7% per  Ki Sphere obtained; attacks effective against all types when Ki is 16 or more; launches an additional Super Attack when Ki is 20 or more; medium chance[3] of performing a critical hit; medium chance[4] of evading enemy's attack (including Super Attack)");
    });
});
describe("Tranformation TransformedEZAPassive Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedEZAPassive - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedEZAPassive, "ATK & DEF +120%; Ki +3 plus an additional ATK +20% and DEF +30% when attacking Extreme Class enemies; reduces damage received by 22%; Transforms when conditions are met");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedEZAPassive, "ATK & DEF +130%; Ki +3 plus an additional ATK +30% and DEF +20% when attacking Extreme Class enemies; reduces damage received by 23%; Transforms when conditions are met");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedEZAPassive, "ATK & DEF +140%; Ki +3 plus an additional ATK +40% and DEF +10% when attacking Extreme Class enemies; reduces damage received by 24%; Transforms when conditions are met");
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedEZAPassive, "ATK & DEF +150%; Ki +3 plus an additional ATK +50% when attacking Extreme Class enemies; reduces damage received by 25%; Ki +12 and performs a critical hit (once only)");
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedEZAPassive - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedEZAPassive, undefined);
    });
});
describe("Tranformation TransformedActiveSkill Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedActiveSkill - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedActiveSkill, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedActiveSkill, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedActiveSkill, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedActiveSkill, undefined);
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedActiveSkill - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedActiveSkill, "Causes ultimate damage to enemy and, within the turn activated, all attacks become critical hits");
    });
});
describe("Tranformation TransformedActiveSkillCondition Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedActiveSkillCondition - multitransform", () => {
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[0].transformedActiveSkillCondition, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[1].transformedActiveSkillCondition, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[2].transformedActiveSkillCondition, undefined);
        (0, assert_1.equal)(multiTransformEZACharacterData.transformations[3].transformedActiveSkillCondition, undefined);
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedActiveSkillCondition - transform", () => {
        (0, assert_1.equal)(transformCharacterData.transformations[0].transformedActiveSkillCondition, "Can be activated when HP is 50% or less or when facing only 1 enemy, whose HP is 50% or less (once only)");
    });
});
// TODO: Transformed EZA Active Skill + Condition. Can't think of an example.
describe("Tranformation TransformedLinks Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedLinks - multitransform", () => {
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[0].transformedLinks, ['All in the Family', 'Golden Warrior', 'Super Saiyan', 'Experienced Fighters', 'Kamehameha', 'Prepared for Battle', 'Fierce Battle']);
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[1].transformedLinks, ['Limit-Breaking Form', 'Golden Warrior', 'Super Saiyan', 'Experienced Fighters', 'Kamehameha', 'Over in a Flash', 'Fierce Battle']);
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[2].transformedLinks, ['Godly Power', 'Warrior Gods', 'Super Saiyan', 'Shocking Speed', 'All in the Family', 'Over in a Flash', 'Fierce Battle']);
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[3].transformedLinks, ['Godly Power', 'Warrior Gods', 'Super Saiyan', 'Shocking Speed', 'All in the Family', 'Over in a Flash', 'Fierce Battle']);
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedLinks - transform", () => {
        (0, assert_1.deepEqual)(transformCharacterData.transformations[0].transformedLinks, ['Super Saiyan', 'Kamehameha', 'Warrior Gods', 'Godly Power', 'Prepared for Battle', 'Fierce Battle', 'Legendary Power']);
    });
});
describe("Tranformation TransformedLinks Extraction", function () {
    (0, mocha_1.it)("should be able to extract the Transformation TransformedLinks - multitransform", () => {
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[0].transformedLinks, ['All in the Family', 'Golden Warrior', 'Super Saiyan', 'Experienced Fighters', 'Kamehameha', 'Prepared for Battle', 'Fierce Battle']);
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[1].transformedLinks, ['Limit-Breaking Form', 'Golden Warrior', 'Super Saiyan', 'Experienced Fighters', 'Kamehameha', 'Over in a Flash', 'Fierce Battle']);
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[2].transformedLinks, ['Godly Power', 'Warrior Gods', 'Super Saiyan', 'Shocking Speed', 'All in the Family', 'Over in a Flash', 'Fierce Battle']);
        (0, assert_1.deepEqual)(multiTransformEZACharacterData.transformations[3].transformedLinks, ['Godly Power', 'Warrior Gods', 'Super Saiyan', 'Shocking Speed', 'All in the Family', 'Over in a Flash', 'Fierce Battle']);
    });
    (0, mocha_1.it)("should be able to extract the Transformations TransformedLinks - transform", () => {
        (0, assert_1.deepEqual)(transformCharacterData.transformations[0].transformedLinks, ['Super Saiyan', 'Kamehameha', 'Warrior Gods', 'Godly Power', 'Prepared for Battle', 'Fierce Battle', 'Legendary Power']);
    });
});
//# sourceMappingURL=scraper.spec.js.map