import { Park } from "./Park";

export enum Difficulty{
    Easy = 1,
    Moderate = 2,
    Challenging = 3,
}

export interface Trail{
    TrailID?: number;
    TrailName: string;
    TrailDistance: number;
    TrailDifficulty: Difficulty;
    IsOpen: boolean;
    ParkID: Park;
    ParkName?: Park;
}