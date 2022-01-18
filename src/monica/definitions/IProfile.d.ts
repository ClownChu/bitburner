import { IGameStage } from "/monica/definitions/IGameStage.js"

export interface IProfile {
    get Stage(): IGameStage | undefined;
    get CanBeExecuted(): boolean;
    Execute(): Promise<boolean>;
}