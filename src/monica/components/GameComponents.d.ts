type GameComponent = {
    SKILL_LEVEL: SkillLevelComponents;
}

type SkillLevelComponents = {
    HACK;
    STR;
    DEF;
    DEX;
    AGI;
    CHA;
}

export const GameComponents: GameComponent = {
    SKILL_LEVEL = SkillLevelComponents
}