import { GameCondition } from "/monica/conditions/GameCondition.js"
import { GameComponent } from "/monica/components/GameComponents.js"

export class HackLevelCondition extends GameCondition {
    constructor(expectations:string) {
        super(
            `SKILL_LEVEL_CONDITION`,
            GameComponent.SKILL_LEVEL.HACK,
            expectations
        )
    }
}