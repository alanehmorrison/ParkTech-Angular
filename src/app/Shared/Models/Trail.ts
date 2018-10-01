import { Park } from "./Park";

export enum Difficulty{
    Easy = 1,
    Moderate = 2,
    Challenging = 3,
}

export enum Condition{
    Open = 1,
    Closed = 2,
    Construction = 3,
    Weather = 4,
}

export interface Trail{
    TrailID?: number;
    TrailName: string;
    TrailDistance: number;
    TrailDifficulty?: Difficulty;
    TrailDiff?: string;
    TrailCondition: Condition;
    TempCondition?: string;
    ParkID: Park;
    ParkName?: Park;
}