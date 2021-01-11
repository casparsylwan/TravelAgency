import { Customer } from "./Customer";

export interface SeatInterface {

    id?:number
    seatNumber:number | null;
    passanger:Customer | null;
    
}

export class Seat implements SeatInterface
{
    id?: number | undefined;
    seatNumber: number | null = null;
    passanger: Customer | null = null;



}