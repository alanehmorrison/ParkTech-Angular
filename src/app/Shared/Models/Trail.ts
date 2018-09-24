import { Park } from "./Park";

enum Difficulty{
    Easy = 1,
    Moderate,
    Challenging
}
export interface Trail{
    TrailID: number;
    TrailName: string;
    TrailDistance: number;
    TrailDifficulty: Difficulty;
    IsOpen: boolean;
    ParkID: Park;
    ParkName?: Park;
}