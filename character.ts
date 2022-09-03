export interface Character {
    Name: string,
    Title: string,
    MaxLevel: number,
    MaxSALevel: number,
    Rarity: Rarities,
    Class: Classes,
    Type: Types,
    Cost: number,
    ID: string,
    ImageURL: string,
    LeaderSkill: string,
    EZALeaderSkill?: string,
    SuperAttack: string,
    EZASuperAttack?: string,
    UltraSuperAttack?: string,
    EZAUltraSuperAttack?: string,
    Passive: string,
    EZAPassive?: string,
    ActiveSkill?: string,
    ActiveSkillCondition?: string,
    EZAActiveSkill?: string,
    EZAActiveSkillCondition?: string,
    TransformationCondition?: string,
    Links: string[],
    Categories: string[],
    KiMeter: string[],
    BaseHP: number,
    MaxLevelHP: number,
    FreeDupeHP: number,
    RainbowHP: number,
    BaseAttack: number,
    MaxLevelAttack: number,
    FreeDupeAttack: number,
    RainbowAttack: number,
    BaseDefence: number,
    MaxDefence: number,
    FreeDupeDefence: number,
    RainbowDefence: number,
    KiMultiplier: string,
    Transformations?: Transformation[]
}

export enum Classes {
    Super = "Super",
    Extreme = "Extreme"
}

export enum Types {
    PHY = "PHY",
    STR = "STR",
    AGL = "AGL",
    TEQ = "TEQ",
    INT = "INT"
}

export enum Rarities {
    UR = "UR",
    LR = "LR"
}

export interface Transformation {
    TransformedName: string,
    TransformedID: string,
    TransformedClass: Classes,
    TransformedType: Types,
    TransformedSuperAttack: string,
    TransformedEZASuperAttack?: string,
    TransformedUltraSuperAttack?: string,
    TransformedEZAUltraSuperAttack?: string,
    TransformedPassive: string,
    TransformedEZAPassive?: string,
    TransformedActiveSkill?: string,
    TransformedActiveSkillCondition?: string,
    TransformedLinks:string[],
}