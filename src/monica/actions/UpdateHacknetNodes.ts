import { IGameAction } from "/monica/definitions/IGameAction.js"
import { GameCondition } from "/monica/conditions/GameCondition.js"

export class UpdateHacknetNodes implements IGameAction {
    get Id(): string {
        return `UPDATE_HACKNET_NODES`
    }

    get Conditions(): GameCondition[] {
        return []
    }

    private expectedNodesLevel: number;
    private expectedNodesRAM: number;
    private expectedNodesCores: number;
    
    constructor(expectedNodesLevel: number, expectedNodesRAM: number, expectedNodesCores: number) {
        this.expectedNodesLevel = expectedNodesLevel
        this.expectedNodesRAM = expectedNodesRAM
        this.expectedNodesCores = expectedNodesCores
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