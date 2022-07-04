import { equal } from "assert";
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
    equal(transformCharacterData.Name, "Super Saiyan God Goku; Super Saiyan God Vegeta");
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

