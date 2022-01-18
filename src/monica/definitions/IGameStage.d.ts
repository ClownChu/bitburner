import { IGameAction } from "/monica/definitions/IGameAction.js"
import { GameCondition } from "/monica/conditions/GameCondition.js"

export interface IGameStage {
    Id: string;
    Objective: string;
    Coniditions: GameCondition[];
    Actions: IGameAction[];
}