enum Difficulty{
    Easy = 1,
    Moderate,
    Challenging
}
export interface Trail{
    TrailID?: number;
    OwnerID?: number;
    TrailName: string;
    TrailDistance: number;
    TrailDifficulty: Difficulty;
    IsOpen: boolean;
    ParkID: number;
    ParkName?: string;
}