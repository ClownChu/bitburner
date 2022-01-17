import { GameComponent } from "/monica/components/GameComponents.js"

export abstract class GameCondition {
    protected _id: string = null
    get Id(): string {
        return null
    }

    protected _component: GameComponent = null
    get Component(): GameComponent {
        return this._component
    }

    protected _expectations: string = null
    get Expectations(): string {
        return this._expectations
    }

    constructor(id: string, component: GameComponent, expectations: string) {
        this._id = id
        this._component = component
        this._expectations = expectations
    }

    IsMet(): boolean {
        return true
    }
}