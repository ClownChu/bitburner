import { IGameAction } from "/monica/definitions/IGameAction.js"
import { IGameCondition } from "/monica/definitions/IGameCondition.js"

export class GainRootAccessInNetwork implements IGameAction {
    get Id(): string {
        return "GAIN_ROOT_ACCESS_IN_NETWORK"
    }

    get Conditions(): IGameCondition[] {
        return []
    }
}