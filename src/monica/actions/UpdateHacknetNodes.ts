import { IGameAction } from "/monica/definitions/IGameAction.js"
import { IGameCondition } from "/monica/conditions/GameCondition.js"

export class UpdateHacknetNodes implements IGameAction {
    get Id(): string {
        return `UPDATE_HACKNET_NODES`
    }

    get Conditions(): IGameCondition[] {
        return []
    }

    private expectedNodesLevel: int;
    private expectedNodesRAM: int;
    private expectedNodesCores: int;
    
    constructor(expectedNodesLevel: int, expectedNodesRAM: int, expectedNodesCores: int) {
        this.expectedNodesLevel = expectedNodesLevel
        this.expectedNodesRAM = expectedNodesRAM
        this.expectedNodesCores = expectedNodesCores
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