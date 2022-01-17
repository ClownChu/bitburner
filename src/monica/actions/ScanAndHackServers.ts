import { IGameAction } from "/monica/definitions/IGameAction.js"
import { GameCondition } from "/monica/conditions/GameCondition.js"

export class ScanAndHackServers implements IGameAction {
    get Id(): string {
        return `SCAN_AND_HACK_SERVERS`
    }

    get Conditions(): GameCondition[] {
        return []
    }

    private scanMaxDepth: int;
    
    constructor(scanMaxDepth: int) {
        this.scanMaxDepth = scanMaxDepth
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