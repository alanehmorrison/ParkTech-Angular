enum TrailDifficulty{
    Easy = 1,
    Moderate,
    Challenging
}
export interface Trail{
    TrailId?: number;
    OwnerId?: number;
    TrailName: string;
    TrailDistance: number;
    Difficulty: TrailDifficulty;
    IsOpen: boolean;
    ParkId: number;
    ParkName?: string;
}