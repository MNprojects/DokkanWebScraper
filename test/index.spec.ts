import { deepEqual, equal } from "assert";
import { it } from "mocha";
import { fetchFromWebOrCache, extractCharacterData } from "../";

let transformCharacterDocument;
let transformCharacterData;
let multiTransformEZACharacterDocument;
let multiTransformEZACharacterData;
let EZAActiveCharacterDocument;
let EZAActiveCharacterData;
let standardCharacterDocument;
let standardCharacterData;

before(async function () {
  transformCharacterDocument = await fetchFromWebOrCache('https://dbz-dokkanbattle.fandom.com/wiki/Infinite_Power_God_Warriors_Super_Saiyan_God_Goku_%26_Super_Saiyan_God_Vegeta#Super_Saiyan_God_SS_Goku_&_Super_Saiyan_God_SS_Vegeta')
  transformCharacterData = extractCharacterData(transformCharacterDocument);

  multiTransformEZACharacterDocument = await fetchFromWebOrCache('https://dbz-dokkanbattle.fandom.com/wiki/Boiling_Power_Super_Saiyan_Goku#Super_Saiyan')
  multiTransformEZACharacterData = extractCharacterData(multiTransformEZACharacterDocument);

  EZAActiveCharacterDocument = await fetchFromWebOrCache('https://dbz-dokkanbattle.fandom.com/wiki/Wings_Spread_Out_to_the_Cosmos_Pan_(GT)_(Honey)')
  EZAActiveCharacterData = extractCharacterData(EZAActiveCharacterDocument);

  standardCharacterDocument = await fetchFromWebOrCache('https://dbz-dokkanbattle.fandom.com/wiki/A_Promise_Made_to_Kakarot_Super_Saiyan_2_Vegeta_(Angel)')
  standardCharacterData = extractCharacterData(standardCharacterDocument);
})


describe("Name Extraction", function () {
  it("should be able to extract the name - multitransform", () => {
    equal(multiTransformEZACharacterData.Name, "Super Saiyan Goku");
  });

  it("should be able to extract the name - transform", () => {
    equal(transformCharacterData.Name, "Super Saiyan God Goku & Super Saiyan God Vegeta");
  });

  it("should be able to extract the name - EZA", () => {
    equal(EZAActiveCharacterData.Name, "Pan (GT) (Honey)");
  });

  it("should be able to extract the name - standard", () => {
    equal(standardCharacterData.Name, "Super Saiyan 2 Vegeta (Angel)");
  });
});

describe("Title Extraction", function () {
  it("should be able to extract the title - multitransform", () => {
    equal(multiTransformEZACharacterData.Title, "Boiling Power");
  });

  it("should be able to extract the title - transform", () => {
    equal(transformCharacterData.Title, "Infinite Power God Warriors");
  });

  it("should be able to extract the title - EZA", () => {
    equal(EZAActiveCharacterData.Title, "Wings Spread Out to the Cosmos");
  });

  it("should be able to extract the title - standard", () => {
    equal(standardCharacterData.Title, "A Promise Made to Kakarot");
  });
});

describe("Max Level Extraction", function () {
  it("should be able to extract the Max Level - multitransform", () => {
    equal(multiTransformEZACharacterData.MaxLevel, "140");
  });

  it("should be able to extract the Max Level - transform", () => {
    equal(transformCharacterData.MaxLevel, "150");
  });

  it("should be able to extract the Max Level - EZA", () => {
    equal(EZAActiveCharacterData.MaxLevel, "150");
  });

  it("should be able to extract the Max Level - standard", () => {
    equal(standardCharacterData.MaxLevel, "150");
  });
});

describe("Max SA Level Extraction", function () {
  it("should be able to extract the Max SA Level - multitransform", () => {
    equal(multiTransformEZACharacterData.MaxSALevel, "15");
  });

  it("should be able to extract the Max SA Level - transform", () => {
    equal(transformCharacterData.MaxSALevel, "20");
  });

  it("should be able to extract the Max SA Level - EZA", () => {
    equal(EZAActiveCharacterData.MaxSALevel, "25");
  });

  it("should be able to extract the Max SA Level - standard", () => {
    equal(standardCharacterData.MaxSALevel, "20");
  });
});

describe("Rarity Extraction", function () {
  it("should be able to extract the Rarity - multitransform", () => {
    equal(multiTransformEZACharacterData.Rarity, "UR");
  });

  it("should be able to extract the Rarity - transform", () => {
    equal(transformCharacterData.Rarity, "LR");
  });

  it("should be able to extract the Rarity - EZA", () => {
    equal(EZAActiveCharacterData.Rarity, "LR");
  });

  it("should be able to extract the Rarity - standard", () => {
    equal(standardCharacterData.Rarity, "LR");
  });
});

describe("Class Extraction", function () {
  it("should be able to extract the Class - multitransform", () => {
    equal(multiTransformEZACharacterData.Class, "Super");
  });

  it("should be able to extract the Class - transform", () => {
    equal(transformCharacterData.Class, "Super");
  });

  it("should be able to extract the Class - EZA", () => {
    equal(EZAActiveCharacterData.Class, "Super");
  });

  it("should be able to extract the Class - standard", () => {
    equal(standardCharacterData.Class, "Super");
  });
});

describe("Type Extraction", function () {
  it("should be able to extract the Type - multitransform", () => {
    equal(multiTransformEZACharacterData.Type, "AGL");
  });

  it("should be able to extract the Type - transform", () => {
    equal(transformCharacterData.Type, "TEQ");
  });

  it("should be able to extract the Type - EZA", () => {
    equal(EZAActiveCharacterData.Type, "STR");
  });

  it("should be able to extract the Type - standard", () => {
    equal(standardCharacterData.Type, "PHY");
  });
});

describe("Cost Extraction", function () {
  it("should be able to extract the Cost - multitransform", () => {
    equal(multiTransformEZACharacterData.Cost, "58");
  });

  it("should be able to extract the Cost - transform", () => {
    equal(transformCharacterData.Cost, "77");
  });

  it("should be able to extract the Cost - EZA", () => {
    equal(EZAActiveCharacterData.Cost, "59");
  });

  it("should be able to extract the Cost - standard", () => {
    equal(standardCharacterData.Cost, "77");
  });
});

describe("ID Extraction", function () {
  it("should be able to extract the ID - multitransform", () => {
    equal(multiTransformEZACharacterData.ID, "11476");
  });

  it("should be able to extract the ID - transform", () => {
    equal(transformCharacterData.ID, "12238");
  });

  it("should be able to extract the ID - EZA", () => {
    equal(EZAActiveCharacterData.ID, "11591");
  });

  it("should be able to extract the ID - standard", () => {
    equal(standardCharacterData.ID, "12022");
  });
});

describe("ImageURL Extraction", function () {
  it("should be able to extract the ImageURL - multitransform", () => {
    equal(multiTransformEZACharacterData.ImageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/2/23/Card_1014760_thumb.png/revision/latest?cb=20180827182222");
  });

  it("should be able to extract the ImageURL - transform", () => {
    equal(transformCharacterData.ImageURL, "https://static.wikia.nocookie.net/dbz-dokkanbattle/images/7/75/Card_1022380_thumb_apng.png/revision/latest?cb=20220130071219&format=original");
  });

  it("should be able to extract the ImageURL - EZA", () => {
    equal(EZAActiveCharacterData.ImageURL, "https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/3/35/Card_1015910_thumb_apng.png/revision/latest?cb=20190128070309&format=original");
  });

  it("should be able to extract the ImageURL - standard", () => {
    equal(standardCharacterData.ImageURL, "https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/a/a1/Card_1020220_thumb_apng.png/revision/latest?cb=20200916113202&format=original");
  });
});

describe("LeaderSkill Extraction", function () {
  it("should be able to extract the LeaderSkill - multitransform", () => {
    equal(multiTransformEZACharacterData.LeaderSkill, "Super Class Ki +3 and HP, ATK & DEF +120%");
  });

  it("should be able to extract the LeaderSkill - transform", () => {
    equal(transformCharacterData.LeaderSkill, '"Beyond Super Saiyan" or "Movie Heroes" Category Ki +3 and HP, ATK & DEF +170%;plus an additional HP, ATK & DEF +30% for characters who also belong to the "Kamehameha" Category');
  });

  it("should be able to extract the LeaderSkill - EZA", () => {
    equal(EZAActiveCharacterData.LeaderSkill, "Recovers 3333 HP per Ki Sphere of character's Type obtained");
  });

  it("should be able to extract the LeaderSkill - standard", () => {
    equal(standardCharacterData.LeaderSkill, '"Worthy Rivals" Category Ki +4 and HP, ATK & DEF +150%;or Type Ki +4 and HP, ATK & DEF +100%');
  });
});

describe("EZALeaderSkill Extraction", function () {
  it("should be able to extract the EZALeaderSkill - multitransform", () => {
    equal(multiTransformEZACharacterData.EZALeaderSkill, "Super Class Ki +3 and HP, ATK & DEF +130%");
  });

  it("should be able to extract the EZALeaderSkill - transform", () => {
    equal(transformCharacterData.EZALeaderSkill, undefined);
  });

  it("should be able to extract the EZALeaderSkill - EZA", () => {
    equal(EZAActiveCharacterData.EZALeaderSkill, "Recovers 5555 HP per Ki Sphere of character's Type obtained");
  });

  it("should be able to extract the EZALeaderSkill - standard", () => {
    equal(standardCharacterData.EZALeaderSkill, undefined);
  });
});

describe("SuperAttack Extraction", function () {
  it("should be able to extract the SuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.SuperAttack, "Raises ATK & DEF[1] and causes immense damage to enemy");
  });

  it("should be able to extract the SuperAttack - transform", () => {
    equal(transformCharacterData.SuperAttack, 'Raises ATK & DEF[1] and causes colossal damage to enemy');
  });

  it("should be able to extract the SuperAttack - EZA", () => {
    equal(EZAActiveCharacterData.SuperAttack, "Causes colossal damage with a chance of stunning the enemy[1]");
  });

  it("should be able to extract the SuperAttack - standard", () => {
    equal(standardCharacterData.SuperAttack, 'Raises DEF for 1 turn[1] and causes colossal damage to enemy');
  });
});

describe("EZASuperAttack Extraction", function () {
  it("should be able to extract the EZASuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.EZASuperAttack, "Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]");
  });

  it("should be able to extract the EZASuperAttack - transform", () => {
    equal(transformCharacterData.EZASuperAttack, undefined);
  });

  it("should be able to extract the EZASuperAttack - EZA", () => {
    equal(EZAActiveCharacterData.EZASuperAttack, "Causes colossal damage with a medium chance of stunning the enemy[2]");
  });

  it("should be able to extract the EZASuperAttack - standard", () => {
    equal(standardCharacterData.EZASuperAttack, undefined);
  });
});

describe("UltraSuperAttack Extraction", function () {
  it("should be able to extract the UltraSuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.UltraSuperAttack, undefined);
  });

  it("should be able to extract the UltraSuperAttack - transform", () => {
    equal(transformCharacterData.UltraSuperAttack, 'Raises ATK & DEF[1] and causes mega-colossal damage to enemy');
  });

  it("should be able to extract the UltraSuperAttack - EZA", () => {
    equal(EZAActiveCharacterData.UltraSuperAttack, "Causes colossal damage with a medium chance of stunning the enemy[2]");
  });

  it("should be able to extract the UltraSuperAttack - standard", () => {
    equal(standardCharacterData.UltraSuperAttack, 'Causes mega-colossal damage to enemy and greatly lowers DEF[2]');
  });
});

describe("EZAUltraSuperAttack Extraction", function () {
  it("should be able to extract the EZAUltraSuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.EZAUltraSuperAttack, undefined);
  });

  it("should be able to extract the EZAUltraSuperAttack - transform", () => {
    equal(transformCharacterData.EZAUltraSuperAttack, undefined);
  });

  it("should be able to extract the EZAUltraSuperAttack - EZA", () => {
    equal(EZAActiveCharacterData.EZAUltraSuperAttack, "Greatly raises ATK for 1 turn[3] and causes colossal damage with a medium chance of stunning the enemy[2]");
  });

  it("should be able to extract the EZAUltraSuperAttack - standard", () => {
    equal(standardCharacterData.EZAUltraSuperAttack, undefined);
  });
});

describe("Passive Extraction", function () {
  it("should be able to extract the Passive - multitransform", () => {
    equal(multiTransformEZACharacterData.Passive, 'ATK & DEF +80%; reduces damage received by 21%; Transform when conditions are met');
  });

  it("should be able to extract the Passive - transform", () => {
    equal(transformCharacterData.Passive, "Activates the Entrance Animation at start of character's attacking turn (once only); guards all attacks within the same turn from start of turn; ATK & DEF +77%  and Ki +1 per Type Ki Sphere obtained for 7 turns from start of turn; ATK & DEF +120% and plus an additional Ki +1 per Type Ki Sphere obtained; chance of performing a critical hit +7% per  Ki Sphere obtained; launches an additional Super Attack when Ki is 20 or more; attacks effective against all types when Ki is 24")
  });

  it("should be able to extract the Passive - EZA", () => {
    equal(EZAActiveCharacterData.Passive, "Recovers 33% of damage dealt as HP;high chance[4] of reducing damage received by 55%");
  });

  it("should be able to extract the Passive - standard", () => {
    equal(standardCharacterData.Passive, 'ATK & DEF +70%; plus an additional ATK & DEF +4% each time Ki rises by 1 (up to 70%); Ki +3 when the name of an ally who is attacking in the same turn or an enemy includes "Goku" (Youth, Captain Ginyu, Jr., etc. excluded); plus an additional Ki +3 when there is a "Majin Buu Saga" Category ally whose name includes "Goku" attacking in the same turn');
  });
});

describe("EZAPassive Extraction", function () {
  it("should be able to extract the EZAPassive - multitransform", () => {
    equal(multiTransformEZACharacterData.EZAPassive, 'ATK & DEF +110%; Ki +3 plus an additional ATK +10% and DEF +40% when attacking Extreme Class enemies; reduces damage received by 21%; Transforms when conditions are met');
  });

  it("should be able to extract the EZAPassive - transform", () => {
    equal(transformCharacterData.EZAPassive, undefined)
  });

  it("should be able to extract the EZAPassive - EZA", () => {
    equal(EZAActiveCharacterData.EZAPassive, "High chance of Ki +3 and high chance[5] of an additional Ki +3; recovers 33% of damage dealt as HP; reduces damage received by 55%");
  });

  it("should be able to extract the EZAPassive - standard", () => {
    equal(standardCharacterData.EZAPassive, undefined);
  });
});

describe("ActiveSkill Extraction", function () {
  it("should be able to extract the ActiveSkill - multitransform", () => {
    equal(multiTransformEZACharacterData.ActiveSkill, undefined);
  });

  it("should be able to extract the ActiveSkill - transform", () => {
    equal(transformCharacterData.ActiveSkill, 'Transforms; Can be activated starting from the 4th turn from the start of battle (once only)')
  });

  it("should be able to extract the ActiveSkill - EZA", () => {
    equal(EZAActiveCharacterData.ActiveSkill, "All allies' ATK +33% for 1 turn");
  });

  it("should be able to extract the ActiveSkill - standard", () => {
    equal(standardCharacterData.ActiveSkill, 'Ki +1, ATK +59% and DEF +78% for 1 turn');
  });
});

describe("ActiveSkillCondition Extraction", function () {
  it("should be able to extract the ActiveSkillCondition - multitransform", () => {
    equal(multiTransformEZACharacterData.ActiveSkillCondition, undefined);
  });

  it("should be able to extract the ActiveSkillCondition - transform", () => {
    equal(transformCharacterData.ActiveSkillCondition, undefined)
  });

  it("should be able to extract the ActiveSkillCondition - EZA", () => {
    equal(EZAActiveCharacterData.ActiveSkillCondition, "Can be activated starting from the 3rd turn from start of battle (once only)");
  });

  it("should be able to extract the ActiveSkillCondition - standard", () => {
    equal(standardCharacterData.ActiveSkillCondition, 'Can be activated when there is a "Majin Buu Saga" Category ally whose name includes "Goku" attacking in the same turn, starting from the 3rd turn from the start of battle (once only)');
  });
});

describe("EZAActiveSkill Extraction", function () {
  it("should be able to extract the EZAActiveSkill - multitransform", () => {
    equal(multiTransformEZACharacterData.EZAActiveSkill, undefined);
  });

  it("should be able to extract the EZAActiveSkill - transform", () => {
    equal(transformCharacterData.EZAActiveSkill, undefined)
  });

  it("should be able to extract the EZAActiveSkill - EZA", () => {
    equal(EZAActiveCharacterData.EZAActiveSkill, "All allies' ATK +33% for 1 turn");
  });

  it("should be able to extract the EZAActiveSkill - standard", () => {
    equal(standardCharacterData.EZAActiveSkill, undefined);
  });
});


describe("EZAActiveSkillCondition Extraction", function () {
  it("should be able to extract the EZAActiveSkillCondition - multitransform", () => {
    equal(multiTransformEZACharacterData.EZAActiveSkillCondition, undefined);
  });

  it("should be able to extract the EZAActiveSkillCondition - transform", () => {
    equal(transformCharacterData.EZAActiveSkillCondition, undefined)
  });

  it("should be able to extract the EZAActiveSkillCondition - EZA", () => {
    equal(EZAActiveCharacterData.EZAActiveSkillCondition, "Can be activated starting from the 3rd turn from start of battle (once only)");
  });

  it("should be able to extract the EZAActiveSkillCondition - standard", () => {
    equal(standardCharacterData.EZAActiveSkillCondition, undefined);
  });
});

describe("TransformationCondition Extraction", function () {
  it("should be able to extract the TransformationCondition - multitransform", () => {
    equal(multiTransformEZACharacterData.TransformationCondition, "Transforms starting from the 3rd turn from the start of battle");
  });

  it("should be able to extract the TransformationCondition - transform", () => {
    equal(transformCharacterData.TransformationCondition, "Transforms; Can be activated starting from the 4th turn from the start of battle (once only)")
  });

  it("should be able to extract the TransformationCondition - EZA", () => {
    equal(EZAActiveCharacterData.TransformationCondition, undefined);
  });

  it("should be able to extract the TransformationCondition - standard", () => {
    equal(standardCharacterData.TransformationCondition, undefined);
  });
});

describe("Links Extraction", function () {
  it("should be able to extract the Links - multitransform", () => {
    deepEqual(multiTransformEZACharacterData.Links, ['All in the Family','Golden Warrior','Super Saiyan','Experienced Fighters','Kamehameha','Prepared for Battle','Fierce Battle']);
  });

  it("should be able to extract the Links - transform", () => {
    deepEqual(transformCharacterData.Links, ['Super Saiyan','Kamehameha','Warrior Gods','Godly Power','Prepared for Battle','Fierce Battle','Legendary Power'])
  });

  it("should be able to extract the Links - EZA", () => {
    deepEqual(EZAActiveCharacterData.Links, ['All in the Family','The Saiyan Lineage','Battlefield Diva','GT','The Innocents','Shattering the Limit','Legendary Power']);
  });

  it("should be able to extract the Links - standard", () => {
    deepEqual(standardCharacterData.Links, ['Saiyan Warrior Race','Prodigies','Super Saiyan','Royal Lineage','Golden Warrior','Fierce Battle','Legendary Power']);
  });
});

describe("Categories Extraction", function () {
  it("should be able to extract the Categories - multitransform", () => {
    deepEqual(multiTransformEZACharacterData.Categories, ['Realm of Gods','Super Saiyan 3','Pure Saiyans','Full Power','Transformation Boost',"Goku's Family",'Super Saiyans','Kamehameha','Super Saiyan 2','Turtle School','Mastered Evolution','Legendary Existence','Bond of Friendship','Accelerated Battle','Beyond Super Saiyan','Bond of Parent and Child']);
  });

  it("should be able to extract the Categories - transform", () => {
    deepEqual(transformCharacterData.Categories, ['Fusion','Realm of Gods','Pure Saiyans','Transformation Boost','Joined Forces','Movie Heroes','Kamehameha','Final Trump Card','Time Limit','Mastered Evolution','Beyond Super Saiyan','Fused Fighters','Bond of Parent and Child'])
  });

  it("should be able to extract the Categories - EZA", () => {
    deepEqual(EZAActiveCharacterData.Categories, ['Hybrid Saiyans','Dragon Ball Seekers',"Goku's Family",'Youth','Space-Traveling Warriors','GT Heroes','Bond of Friendship','Bond of Parent and Child']);
  });

  it("should be able to extract the Categories - standard", () => {
    deepEqual(standardCharacterData.Categories, ['Resurrected Warriors','Majin Buu Saga','Pure Saiyans',"Vegeta's Family",'Worthy Rivals','Otherworld Warriors','Super Saiyan 2','All-Out Struggle','Connected Hope','Gifted Warriors','Time Limit','Mastered Evolution','Battle of Fate','Beyond Super Saiyan','Bond of Parent and Child']);
  });
});

describe("KiMeter Extraction", function () {
  it("should be able to extract the KiMeter - multitransform", () => {
    deepEqual(multiTransformEZACharacterData.KiMeter, ['KiMeter 2 Green']);
  });

  it("should be able to extract the KiMeter - transform", () => {
    deepEqual(transformCharacterData.KiMeter, ['KiMeter 2 Green LR'])
  });

  it("should be able to extract the KiMeter - EZA", () => {
    deepEqual(EZAActiveCharacterData.KiMeter, ['KiMeter 2 Green LR','KiMeter 2 Green 10 Red LR']);
  });

  it("should be able to extract the KiMeter - standard", () => {
    deepEqual(standardCharacterData.KiMeter, ['KiMeter 2 Green LR']);
  });
});

describe("BaseHP Extraction", function () {
  it("should be able to extract the BaseHP - multitransform", () => {
    equal(multiTransformEZACharacterData.BaseHP, '3213');
  });

  it("should be able to extract the BaseHP - transform", () => {
    equal(transformCharacterData.BaseHP, '4992')
  });

  it("should be able to extract the BaseHP - EZA", () => {
    equal(EZAActiveCharacterData.BaseHP, "5087");
  });

  it("should be able to extract the BaseHP - standard", () => {
    equal(standardCharacterData.BaseHP, '5007');
  });
});

describe("MaxLevelHP Extraction", function () {
  it("should be able to extract the MaxLevelHP - multitransform", () => {
    equal(multiTransformEZACharacterData.MaxLevelHP, '10605');
  });

  it("should be able to extract the MaxLevelHP - transform", () => {
    equal(transformCharacterData.MaxLevelHP, '16475')
  });

  it("should be able to extract the MaxLevelHP - EZA", () => {
    equal(EZAActiveCharacterData.MaxLevelHP, "16788");
  });

  it("should be able to extract the MaxLevelHP - standard", () => {
    equal(standardCharacterData.MaxLevelHP, '16688');
  });
});

describe("FreeDupeHP Extraction", function () {
  it("should be able to extract the FreeDupeHP - multitransform", () => {
    equal(multiTransformEZACharacterData.FreeDupeHP, '12605');
  });

  it("should be able to extract the FreeDupeHP - transform", () => {
    equal(transformCharacterData.FreeDupeHP, '18475')
  });

  it("should be able to extract the FreeDupeHP - EZA", () => {
    equal(EZAActiveCharacterData.FreeDupeHP, "17988");
  });

  it("should be able to extract the FreeDupeHP - standard", () => {
    equal(standardCharacterData.FreeDupeHP, '18688');
  });
});

describe("RainbowHP Extraction", function () {
  it("should be able to extract the RainbowHP - multitransform", () => {
    equal(multiTransformEZACharacterData.RainbowHP, '15205');
  });

  it("should be able to extract the RainbowHP - transform", () => {
    equal(transformCharacterData.RainbowHP, '21075')
  });

  it("should be able to extract the RainbowHP - EZA", () => {
    equal(EZAActiveCharacterData.RainbowHP, "19788");
  });

  it("should be able to extract the RainbowHP - standard", () => {
    equal(standardCharacterData.RainbowHP, '22088');
  });
});

describe("BaseAttack Extraction", function () {
  it("should be able to extract the BaseAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.BaseAttack, '3629');
  });

  it("should be able to extract the BaseAttack - transform", () => {
    equal(transformCharacterData.BaseAttack, '5053')
  });

  it("should be able to extract the BaseAttack - EZA", () => {
    equal(EZAActiveCharacterData.BaseAttack, "3252");
  });

  it("should be able to extract the BaseAttack - standard", () => {
    equal(standardCharacterData.BaseAttack, '4748');
  });
});

describe("MaxLevelAttack Extraction", function () {
  it("should be able to extract the MaxLevelAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.MaxLevelAttack, '11978');
  });

  it("should be able to extract the MaxLevelAttack - transform", () => {
    equal(transformCharacterData.MaxLevelAttack, '16675')
  });

  it("should be able to extract the MaxLevelAttack - EZA", () => {
    equal(EZAActiveCharacterData.MaxLevelAttack, "10734");
  });

  it("should be able to extract the MaxLevelAttack - standard", () => {
    equal(standardCharacterData.MaxLevelAttack, '15825');
  });
});

describe("FreeDupeAttack Extraction", function () {
  it("should be able to extract the FreeDupeAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.FreeDupeAttack, '13978');
  });

  it("should be able to extract the FreeDupeAttack - transform", () => {
    equal(transformCharacterData.FreeDupeAttack, '18675')
  });

  it("should be able to extract the FreeDupeAttack - EZA", () => {
    equal(EZAActiveCharacterData.FreeDupeAttack, "11934");
  });

  it("should be able to extract the FreeDupeAttack - standard", () => {
    equal(standardCharacterData.FreeDupeAttack, '17825');
  });
});

describe("RainbowAttack Extraction", function () {
  it("should be able to extract the RainbowAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.RainbowAttack, '16978');
  });

  it("should be able to extract the RainbowAttack - transform", () => {
    equal(transformCharacterData.RainbowAttack, '22075')
  });

  it("should be able to extract the RainbowAttack - EZA", () => {
    equal(EZAActiveCharacterData.RainbowAttack, "13974");
  });

  it("should be able to extract the RainbowAttack - standard", () => {
    equal(standardCharacterData.RainbowAttack, '20825');
  });
});

describe("BaseDefence Extraction", function () {
  it("should be able to extract the BaseDefence - multitransform", () => {
    equal(multiTransformEZACharacterData.BaseDefence, '1621');
  });

  it("should be able to extract the BaseDefence - transform", () => {
    equal(transformCharacterData.BaseDefence, '2475')
  });

  it("should be able to extract the BaseDefence - EZA", () => {
    equal(EZAActiveCharacterData.BaseDefence, "2496");
  });

  it("should be able to extract the BaseDefence - standard", () => {
    equal(standardCharacterData.BaseDefence, '2674');
  });
});

describe("MaxDefence Extraction", function () {
  it("should be able to extract the MaxDefence - multitransform", () => {
    equal(multiTransformEZACharacterData.MaxDefence, '5350');
  });

  it("should be able to extract the MaxDefence - transform", () => {
    equal(transformCharacterData.MaxDefence, '8169')
  });

  it("should be able to extract the MaxDefence - EZA", () => {
    equal(EZAActiveCharacterData.MaxDefence, "8239");
  });

  it("should be able to extract the MaxDefence - standard", () => {
    equal(standardCharacterData.MaxDefence, '8913');
  });
});

describe("FreeDupeDefence Extraction", function () {
  it("should be able to extract the FreeDupeDefence - multitransform", () => {
    equal(multiTransformEZACharacterData.FreeDupeDefence, '7350');
  });

  it("should be able to extract the FreeDupeDefence - transform", () => {
    equal(transformCharacterData.FreeDupeDefence, '10169')
  });

  it("should be able to extract the FreeDupeDefence - EZA", () => {
    equal(EZAActiveCharacterData.FreeDupeDefence, "9439");
  });

  it("should be able to extract the FreeDupeDefence - standard", () => {
    equal(standardCharacterData.FreeDupeDefence, '10913');
  });
});

describe("RainbowDefence Extraction", function () {
  it("should be able to extract the RainbowDefence - multitransform", () => {
    equal(multiTransformEZACharacterData.RainbowDefence, '10750');
  });

  it("should be able to extract the RainbowDefence - transform", () => {
    equal(transformCharacterData.RainbowDefence, '13169')
  });

  it("should be able to extract the RainbowDefence - EZA", () => {
    equal(EZAActiveCharacterData.RainbowDefence, "10999");
  });

  it("should be able to extract the RainbowDefence - standard", () => {
    equal(standardCharacterData.RainbowDefence, '13513');
  });
});

describe("KiMultiplier Extraction", function () {
  it("should be able to extract the KiMultiplier - multitransform", () => {
    equal(multiTransformEZACharacterData.KiMultiplier, '12 Ki Multiplier is 150%; ');
  });

  it("should be able to extract the KiMultiplier - transform", () => {
    equal(transformCharacterData.KiMultiplier, '12 Ki Multiplier is 160%; 24 Ki Multiplier is 200%; SA Lv.20 raises SA Multiplier by an additional 30%')
  });

  it("should be able to extract the KiMultiplier - EZA", () => {
    equal(EZAActiveCharacterData.KiMultiplier, "12 Ki Multiplier is 140%; 24 Ki Multiplier is 200%; SA Lv.20 raises SA Multiplier by an additional 30%");
  });

  it("should be able to extract the KiMultiplier - standard", () => {
    equal(standardCharacterData.KiMultiplier, '12 Ki Multiplier is 150%; 24 Ki Multiplier is 200%; SA Lv.20 raises SA Multiplier by an additional 30%');
  });
});

describe("Tranformations Extraction", function () {
  it("should be able to extract the Transformation - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations.length, 4);
  });

  it("should be able to extract the Transformations - transform", () => {
    equal(transformCharacterData.Transformations.length, 1)
  });

  it("should be able to extract the Transformations - EZA", () => {
    equal(EZAActiveCharacterData.Transformations.length, 0);
  });

  it("should be able to extract the Transformations - standard", () => {
    equal(standardCharacterData.Transformations.length, 0);
  });
});

describe("Tranformation Names Extraction", function () {
  it("should be able to extract the Transformation Names - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedName, 'Super Saiyan 2 Goku');
    equal(multiTransformEZACharacterData.Transformations[1].TransformedName, 'Super Saiyan 3 Goku');
    equal(multiTransformEZACharacterData.Transformations[2].TransformedName, 'Super Saiyan God Goku');
    equal(multiTransformEZACharacterData.Transformations[3].TransformedName, 'Super Saiyan God SS Goku');
  });

  it("should be able to extract the Transformations Names - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedName, 'Super Saiyan God SS Goku & Super Saiyan God SS Vegeta')
  });
});

describe("Tranformation TransformedID Extraction", function () {
  it("should be able to extract the Transformation TransformedID - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedID, '41477');
    equal(multiTransformEZACharacterData.Transformations[1].TransformedID, '41478');
    equal(multiTransformEZACharacterData.Transformations[2].TransformedID, '41479');
    equal(multiTransformEZACharacterData.Transformations[3].TransformedID, '41480');
  });

  it("should be able to extract the Transformations TransformedID - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedID, '42239')
  });
});

describe("Tranformation TransformedClass Extraction", function () {
  it("should be able to extract the Transformation TransformedClass - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedClass, 'Super');
    equal(multiTransformEZACharacterData.Transformations[1].TransformedClass, 'Super');
    equal(multiTransformEZACharacterData.Transformations[2].TransformedClass, 'Super');
    equal(multiTransformEZACharacterData.Transformations[3].TransformedClass, 'Super');
  });

  it("should be able to extract the Transformations TransformedClass - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedClass, 'Super')
  });
});

describe("Tranformation TransformedType Extraction", function () {
  it("should be able to extract the Transformation TransformedType - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedType, 'AGL');
    equal(multiTransformEZACharacterData.Transformations[1].TransformedType, 'AGL');
    equal(multiTransformEZACharacterData.Transformations[2].TransformedType, 'AGL');
    equal(multiTransformEZACharacterData.Transformations[3].TransformedType, 'AGL');
  });

  it("should be able to extract the Transformations TransformedType - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedType, 'TEQ')
  });
});

describe("Tranformation TransformedSuperAttack Extraction", function () {
  it("should be able to extract the Transformation TransformedSuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedSuperAttack, 'Raises ATK & DEF[1] and causes immense damage to enemy');
    equal(multiTransformEZACharacterData.Transformations[1].TransformedSuperAttack, 'Raises ATK & DEF[1] and causes immense damage to enemy');
    equal(multiTransformEZACharacterData.Transformations[2].TransformedSuperAttack, 'Raises ATK & DEF[1] and causes immense damage to enemy');
    equal(multiTransformEZACharacterData.Transformations[3].TransformedSuperAttack, 'Causes immense damage with a great chance to stun the enemy[1]');
  });

  it("should be able to extract the Transformations TransformedSuperAttack - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedSuperAttack, 'Greatly raises ATK & DEF for 1 turn[1] and causes colossal damage to enemy')
  });
});

describe("Tranformation TransformedEZASuperAttack Extraction", function () {
  it("should be able to extract the Transformation TransformedEZASuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedEZASuperAttack, 'Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]');
    equal(multiTransformEZACharacterData.Transformations[1].TransformedEZASuperAttack, 'Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]');
    equal(multiTransformEZACharacterData.Transformations[2].TransformedEZASuperAttack, 'Raises ATK & DEF[1], causes immense damage to enemy and lowers DEF[2]');
    equal(multiTransformEZACharacterData.Transformations[3].TransformedEZASuperAttack, 'Raises ATK & DEF for 1 turn[2] and causes immense damage with a great chance of stunning the enemy[1]');
  });

  it("should be able to extract the Transformations TransformedEZASuperAttack - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedEZASuperAttack, undefined)
  });
});

describe("Tranformation TransformedUltraSuperAttack Extraction", function () {
  it("should be able to extract the Transformation TransformedUltraSuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedUltraSuperAttack, undefined);
    equal(multiTransformEZACharacterData.Transformations[1].TransformedUltraSuperAttack, undefined);
    equal(multiTransformEZACharacterData.Transformations[2].TransformedUltraSuperAttack, undefined);
    equal(multiTransformEZACharacterData.Transformations[3].TransformedUltraSuperAttack, undefined);
  });

  it("should be able to extract the Transformations TransformedUltraSuperAttack - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedUltraSuperAttack, "Massively raises ATK & DEF for 1 turn[2] and causes mega-colossal damage to enemy; disables enemy's action once within the turn")
  });
});

describe("Tranformation TransformedUltraSuperAttack Extraction", function () {
  it("should be able to extract the Transformation TransformedUltraSuperAttack - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedUltraSuperAttack, undefined);
    equal(multiTransformEZACharacterData.Transformations[1].TransformedUltraSuperAttack, undefined);
    equal(multiTransformEZACharacterData.Transformations[2].TransformedUltraSuperAttack, undefined);
    equal(multiTransformEZACharacterData.Transformations[3].TransformedUltraSuperAttack, undefined);
  });

  it("should be able to extract the Transformations TransformedUltraSuperAttack - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedUltraSuperAttack, "Massively raises ATK & DEF for 1 turn[2] and causes mega-colossal damage to enemy; disables enemy's action once within the turn")
  });
});
// TODO Transformed EZA Ultra Super Attack

describe("Tranformation TransformedPassive Extraction", function () {
  it("should be able to extract the Transformation TransformedPassive - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedPassive, "ATK +90% and DEF +60%; reduces damage received by 22%; Transform when conditions are met");
    equal(multiTransformEZACharacterData.Transformations[1].TransformedPassive, "ATK +100% and DEF +40%; reduces damage received by 23%; Transform when conditions are met");
    equal(multiTransformEZACharacterData.Transformations[2].TransformedPassive, "ATK +110% and DEF +20%; reduces damage received by 24%; Transform when conditions are met");
    equal(multiTransformEZACharacterData.Transformations[3].TransformedPassive, "ATK +120%; reduces damage received by 25%; Ki +12 and performs a critical hit (once only)");
  });

  it("should be able to extract the Transformations TransformedPassive - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedPassive, "ATK & DEF +177%; plus an additional Ki +2 per Type Ki Sphere obtained; chance of performing a critical hit and chance of evading enemy attacks (including Super Attack) +7% per  Ki Sphere obtained; attacks effective against all types when Ki is 16 or more; launches an additional Super Attack when Ki is 20 or more; medium chance[3] of performing a Critical hit; medium chance[4] of evading enemy's attack (including Super Attack)")
  });
});

describe("Tranformation TransformedEZAPassive Extraction", function () {
  it("should be able to extract the Transformation TransformedEZAPassive - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedEZAPassive, "ATK & DEF +120%; Ki +3 plus an additional ATK +20% and DEF +30% when attacking Extreme Class enemies; reduces damage received by 22%; Transforms when conditions are met");
    equal(multiTransformEZACharacterData.Transformations[1].TransformedEZAPassive, "ATK & DEF +130%; Ki +3 plus an additional ATK +30% and DEF +20% when attacking Extreme Class enemies; reduces damage received by 23%; Transforms when conditions are met");
    equal(multiTransformEZACharacterData.Transformations[2].TransformedEZAPassive, "ATK & DEF +140%; Ki +3 plus an additional ATK +40% and DEF +10% when attacking Extreme Class enemies; reduces damage received by 24%; Transforms when conditions are met");
    equal(multiTransformEZACharacterData.Transformations[3].TransformedEZAPassive, "ATK & DEF +150%; Ki +3 plus an additional ATK +50% when attacking Extreme Class enemies; reduces damage received by 25%; Ki +12 and performs a critical hit (once only)");
  });

  it("should be able to extract the Transformations TransformedEZAPassive - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedEZAPassive, undefined)
  });
});

describe("Tranformation TransformedActiveSkill Extraction", function () {
  it("should be able to extract the Transformation TransformedActiveSkill - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedActiveSkill, undefined);
    equal(multiTransformEZACharacterData.Transformations[1].TransformedActiveSkill, undefined);
    equal(multiTransformEZACharacterData.Transformations[2].TransformedActiveSkill, undefined);
    equal(multiTransformEZACharacterData.Transformations[3].TransformedActiveSkill, undefined);
  });

  it("should be able to extract the Transformations TransformedActiveSkill - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedActiveSkill, "Causes ultimate damage to enemy and all attack become critical hits for 1 turn")
  });
});

describe("Tranformation TransformedActiveSkillCondition Extraction", function () {
  it("should be able to extract the Transformation TransformedActiveSkillCondition - multitransform", () => {
    equal(multiTransformEZACharacterData.Transformations[0].TransformedActiveSkillCondition, undefined);
    equal(multiTransformEZACharacterData.Transformations[1].TransformedActiveSkillCondition, undefined);
    equal(multiTransformEZACharacterData.Transformations[2].TransformedActiveSkillCondition, undefined);
    equal(multiTransformEZACharacterData.Transformations[3].TransformedActiveSkillCondition, undefined);
  });

  it("should be able to extract the Transformations TransformedActiveSkillCondition - transform", () => {
    equal(transformCharacterData.Transformations[0].TransformedActiveSkillCondition, "Can be activated when HP is 50% or less or when facing only 1 enemy, whose HP is 50% or less (once only)")
  });
});

// TODO: Transformed EZA Active Skill + Condition


describe("Tranformation TransformedLinks Extraction", function () {
  it("should be able to extract the Transformation TransformedLinks - multitransform", () => {
    deepEqual(multiTransformEZACharacterData.Transformations[0].TransformedLinks, ['All in the Family','Golden Warrior','Super Saiyan','Experienced Fighters','Kamehameha','Prepared for Battle','Fierce Battle']);
    deepEqual(multiTransformEZACharacterData.Transformations[1].TransformedLinks, ['Limit-Breaking Form','Golden Warrior','Super Saiyan','Experienced Fighters','Kamehameha','Over in a Flash','Fierce Battle']);
    deepEqual(multiTransformEZACharacterData.Transformations[2].TransformedLinks, ['Godly Power','Warrior Gods','Super Saiyan','Shocking Speed','All in the Family','Over in a Flash','Fierce Battle']);
    deepEqual(multiTransformEZACharacterData.Transformations[3].TransformedLinks, ['Godly Power', 'Warrior Gods','Super Saiyan', 'Shocking Speed', 'All in the Family', 'Over in a Flash', 'Fierce Battle']);
  });

  it("should be able to extract the Transformations TransformedLinks - transform", () => {
    deepEqual(transformCharacterData.Transformations[0].TransformedLinks, ['Super Saiyan','Kamehameha','Warrior Gods','Godly Power','Prepared for Battle','Fierce Battle','Legendary Power'])
  });
});

describe("Tranformation TransformedLinks Extraction", function () {
  it("should be able to extract the Transformation TransformedLinks - multitransform", () => {
    deepEqual(multiTransformEZACharacterData.Transformations[0].TransformedLinks, ['All in the Family','Golden Warrior','Super Saiyan','Experienced Fighters','Kamehameha','Prepared for Battle','Fierce Battle']);
    deepEqual(multiTransformEZACharacterData.Transformations[1].TransformedLinks, ['Limit-Breaking Form','Golden Warrior','Super Saiyan','Experienced Fighters','Kamehameha','Over in a Flash','Fierce Battle']);
    deepEqual(multiTransformEZACharacterData.Transformations[2].TransformedLinks, ['Godly Power','Warrior Gods','Super Saiyan','Shocking Speed','All in the Family','Over in a Flash','Fierce Battle']);
    deepEqual(multiTransformEZACharacterData.Transformations[3].TransformedLinks, ['Godly Power', 'Warrior Gods','Super Saiyan', 'Shocking Speed', 'All in the Family', 'Over in a Flash', 'Fierce Battle']);
  });

  it("should be able to extract the Transformations TransformedLinks - transform", () => {
    deepEqual(transformCharacterData.Transformations[0].TransformedLinks, ['Super Saiyan','Kamehameha','Warrior Gods','Godly Power','Prepared for Battle','Fierce Battle','Legendary Power'])
  });
});