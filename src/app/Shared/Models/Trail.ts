import { Park } from "./Park";

enum Difficulty{
    Easy = 1,
    Moderate,
    Challenging
}
export interface Trail{
    TrailName: string;
    TrailDistance: number;
    TrailDifficulty: Difficulty;
    IsOpen: boolean;
    ParkID: Park;
    ParkName?: Park;
}