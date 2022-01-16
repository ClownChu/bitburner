import { IGameCondition } from "/monica/definitions/IGameCondition.js"

export interface IGameAction {
    Id: string;
    Conditions: IGameCondition[];
    Execute(): Promise<boolean>;
}