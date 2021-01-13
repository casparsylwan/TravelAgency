import { Airport } from "./airport";
import { Plane } from "./plane";

export interface Offer 
{
    id:number | null;
    plane:Plane | null;
    fromAirport:Airport | null;
    toAirport:Airport | null;
    price:number;
    depatureDate:Date | null;
    paid:boolean;
    seatNumber:number;
}

export class OfferClass implements Offer{

    id:number | null = null;
    plane:Plane | null = null;
    fromAirport: Airport | null = null;
    toAirport: Airport | null = null;
    price: number = 0;
    depatureDate: Date | null = null;
    paid:boolean = false;
    seatNumber:number = -1;

    constructor(fromAirport:Airport, toAirport: Airport, price: number, depatureDate: Date ){}


}