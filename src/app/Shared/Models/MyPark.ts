import { Park } from "./Park";
import { Trail } from "./Trail";

enum MyTrailStatus{
    Completed = 1,
    Wishlist, 
    Favorite
}
export interface MyPark{
    MyParkID?: number;
    OwnerID?: number;
    ParkID: Park;
    TrailID: Trail;
    MyTrailStatus: MyTrailStatus;
    ParkName: string;
    TrailName: string;
    TrailComment: string;
    Park?: Park;
    Trail?: Trail;
}