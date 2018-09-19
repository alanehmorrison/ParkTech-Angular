import { Park } from "./Park";
import { Trail } from "./Trail";

enum MyTrailStatus{
    Completed = 1,
    Wishlist, 
    Favorite
}
export interface MyPark{
    MyParkId?: number;
    OwnerId?: number;
    ParkId: number;
    TrailId: number;
    MyTrailStatus: MyTrailStatus;
    Park: Park;
    Trail: Trail;
}