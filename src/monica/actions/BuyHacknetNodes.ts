import { IGameAction } from "/monica/definitions/IGameAction.js"
import { IGameCondition } from "/monica/definitions/IGameCondition.js"

export class BuyHacknetNodes implements IGameAction {
    get Id(): string {
        return `BUY_HACKNET_NODES`
    }

    get Conditions(): IGameCondition[] {
        return []
    }

    private expectedNodesCount: int;
    
    constructor(expectedNodesCount: int) {
        this.expectedNodesCount = expectedNodesCount
    }

    Execute(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (profile === undefined) {
                reject(
                    new Error(`Stage could not be executed.`)
                )
            }
            resolve(profile)
        })
    }
}