import { UpdateHacknetNodes } from "/monica/actions/UpdateHacknetNodes.js"
import { BuyHacknetNodes } from "/monica/actions/BuyHacknetNodes.js"
import { ScanAndHackServers } from "/monica/actions/ScanAndHackServers.js"
import { IGameAction } from "/monica/definitions/IGameAction.js"
import { IGameStage } from "/monica/definitions/IGameStage.js"
import { GameCondition } from "/monica/conditions/GameCondition.js"

export class NoobStage implements IGameStage {
    get Id(): string {
        return `HACKER_NOOB_STAGE`
    }

    get Objective(): string {
        return `Find and hack any server avaialable to make money`
    }

    get Coniditions(): GameCondition[] {
        return [

        ] as GameCondition[]
    }

    get Actions(): IGameAction[] {
        return [
            new ScanAndHackServers(1),
            new BuyHacknetNodes(10),
            new UpdateHacknetNodes(100, 16, 1)
        ] as IGameAction[]
    }
}