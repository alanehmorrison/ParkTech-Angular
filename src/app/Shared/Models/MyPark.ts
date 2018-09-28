import { Park } from "./Park";
import { Trail } from "./Trail";

export enum MyTrailStatus{
    Completed = 1,
    Wishlist, 
    Favorite
}
export interface MyPark{
    MyParkID?: number;
    OwnerID?: number;
    ParkID: number;
    TrailID: number;
    MyTrailStatus: MyTrailStatus;
    StatusString?: string;
    ParkName: string;
    TrailName: string;
    TrailComment: string;
    Park?: Park;
    Trail?: Trail;
}