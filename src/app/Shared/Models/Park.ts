enum State{
    AL =1, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY
}
export interface Park{
    
    ParkID?: number;
    OwnerID?: number;
    ParkName: string;
    ParkCost: number;
    ParkAddress: string;
    ParkCity: string;
    ParkState: State;
    ParkZip: number;
    ParkPhone: string;
    ParkWebsite: string;
    ParkDescription: string;

}