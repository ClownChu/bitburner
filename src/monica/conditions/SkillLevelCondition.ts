import { IGameCondition } from "/monica/definitions/IGameCondition.js"
import { GameComponents, SkillLevelComponents } from "/monica/components/GameComponents.js"

export class SkillLevelCondition implements IGameCondition {
    get Id(): string {
        return `SKILL_LEVEL_CONDITION`
    }

    get Component(): GameComponents {
        return GameComponent.SKILL_LEVEL
    }

    private skillLevelComponent: SkillLevelComponents
    constructor(skillLevelComponent: SkillLevelComponents) {
        this.skillLevelComponent = skillLevelComponent
    }
}