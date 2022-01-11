import { IGameAction } from "/monica/definitions/IGameAction.js"

export interface IGameStage {
    Id: string;
    Actions: IGameAction[];
}