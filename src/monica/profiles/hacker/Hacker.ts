import { IGameStage } from '/monica/definitions/IGameStage.js'
import { IProfile } from '/monica/definitions/IProfile.js'
import { NoobStage } from '/monica/profiles/hacker/stages/NoobStage.js'

export class Hacker implements IProfile {
    protected _stage?: IGameStage
    get Stage(): IGameStage | undefined {
        return this._stage
    }

    get CanBeExecuted(): boolean {
        return true
    }

    constructor() {
        this.getCurrentProfileStage()
    }

    getCurrentProfileStage(): void {
        this._stage = new NoobStage()
    }

    async Execute(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true)
            reject(`Failed`)
        })
    }
}