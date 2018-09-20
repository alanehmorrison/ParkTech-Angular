enum TrailDifficulty{
    Easy = 1,
    Moderate,
    Challenging
}
export interface Trail{
    TrailID?: number;
    OwnerID?: number;
    TrailName: string;
    TrailDistance: number;
    Difficulty: TrailDifficulty;
    IsOpen: boolean;
    ParkID: number;
    ParkName?: string;
}