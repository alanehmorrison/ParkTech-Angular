import { Park } from "./Park";

export enum Difficulty{
    Easy,
    Moderate,
    Challenging,
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