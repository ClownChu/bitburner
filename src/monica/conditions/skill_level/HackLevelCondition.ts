import { GameCondition } from "/monica/conditions/GameCondition.js"
import { GameComponents } from "/monica/components/GameComponents.js"

export class HackLevelCondition extends GameCondition {
    constructor(expectations:string) {
        super(
            `SKILL_LEVEL_CONDITION`,
            GameComponents.SKILL_LEVEL.HACK,
            expectations
        )

        this.skillLevelComponent = GameComponents.SKILL_LEVEL.HACK
    }
}