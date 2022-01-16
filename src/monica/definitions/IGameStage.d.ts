import { IGameAction } from "/monica/definitions/IGameAction.js"
import { IGameCondition } from "/monica/definitions/IGameCondition.js"

export interface IGameStage {
    Id: string;
    Objective: string;
    Coniditions: IGameCondition[];
    Actions: IGameAction[];
}