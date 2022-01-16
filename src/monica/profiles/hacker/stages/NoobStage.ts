import { UpdateHacknetNodes } from "/monica/actions/UpdateHacknetNodes.js"
import { BuyHacknetNodes } from "/monica/actions/BuyHacknetNodes.js"
import { ScanAndHackServers } from "/monica/actions/ScanAndHackServers.js"
import { IGameAction } from "/monica/definitions/IGameAction.js"
import { IGameStage } from "/monica/definitions/IGameStage.js"
import { IGameCondition } from "/monica/definitions/IGameCondition.js"

export class NoobStage implements IGameStage {
    get Id(): string {
        return `HACKER_NOOB_STAGE`
    }

    get Objective(): string {
        return `Find and hack any server avaialable to make money`
    }

    get Coniditions(): IGameCondition[] {
        return [
            
        ] as IGameCondition[]
    }

    get Actions(): IGameAction[] {
        return [
            new ScanAndHackServers(1),
            new BuyHacknetNodes(5),
            new UpdateHacknetNodes(100, 16, 1)
        ] as IGameAction[]
    }
}