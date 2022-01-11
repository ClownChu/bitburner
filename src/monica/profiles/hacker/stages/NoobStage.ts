import { GainRootAccessInNetwork } from "/monica/actions/GainRootAccessInNetwork.js"
import { IGameAction } from "/monica/definitions/IGameAction.js"
import { IGameStage } from "/monica/definitions/IGameStage.js"

export class NoobStage implements IGameStage {
    get Id(): string {
        return "HACKER_NOOB_STAGE"
    }

    get Actions(): IGameAction[] {
        return [
            new GainRootAccessInNetwork()
        ]
    }
}