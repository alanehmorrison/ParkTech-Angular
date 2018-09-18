enum TrailDifficulty{
    Easy = 1,
    Moderate,
    Challenging
}
export interface Trail{
    TrailId?: number;
    OwnerId?: number;
    TrailName: string;
    TrailDistrance: number;
    Difficulty: TrailDifficulty;
    IsOpen: boolean;
    ParkId: number;
}