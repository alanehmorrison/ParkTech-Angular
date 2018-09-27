import { Park } from "./Park";

enum Difficulty{
    Easy,
    Moderate,
    Challenging,
}

let DifficultyDisplay: { [index: number]: string} = {};
DifficultyDisplay[Difficulty.Easy] = "Easy";
DifficultyDisplay[Difficulty.Moderate] = "Moderate";
DifficultyDisplay[Difficulty.Challenging] = "Challenging";

export interface Trail{
    TrailID?: number;
    TrailName: string;
    TrailDistance: number;
    TrailDifficulty: Difficulty;
    IsOpen: boolean;
    ParkID: Park;
    ParkName?: Park;
}