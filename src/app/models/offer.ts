import { Airport } from "./airport";

export interface Offer 
{
    fromAirport:Airport | null;
    toAirport:Airport | null;
    price:number | null;
    depatureDate:Date | null;
}

export class OfferClass implements Offer{

    fromAirport: Airport | null = null;
    toAirport: Airport | null = null;
    price: number | null = null;
    depatureDate: Date | null = null;

    constructor(fromAirport:Airport, toAirport: Airport, price: number, depatureDate: Date ){}


}