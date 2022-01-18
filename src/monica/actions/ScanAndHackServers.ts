import { IGameAction } from "/monica/definitions/IGameAction.js"
import { GameCondition } from "/monica/conditions/GameCondition.js"

export class ScanAndHackServers implements IGameAction {
    get Id(): string {
        return `SCAN_AND_HACK_SERVERS`
    }

    get Conditions(): GameCondition[] {
        return []
    }

    private scanMaxDepth: number;
    
    constructor(scanMaxDepth: number) {
        this.scanMaxDepth = scanMaxDepth
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