import { IGameAction } from "/monica/definitions/IGameAction.js"
import { GameCondition } from "../conditions/GameCondition.js"

export class BuyHacknetNodes implements IGameAction {
    get Id(): string {
        return `BUY_HACKNET_NODES`
    }

    get Conditions(): GameCondition[] {
        return []
    }

    private expectedNodesCount: number;
    
    constructor(expectedNodesCount: number) {
        this.expectedNodesCount = expectedNodesCount
    }

    Execute(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true)
            reject(
                new Error(`Stage could not be executed.`)
            )
        })
    }
}