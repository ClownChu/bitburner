import { GameCondition } from "/monica/conditions/GameCondition.js"

export interface IGameAction {
    Id: string;
    Conditions: GameCondition[];
    Execute(): Promise<boolean>;
}