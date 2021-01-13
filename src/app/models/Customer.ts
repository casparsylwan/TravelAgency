import { Offer, OfferClass } from "./offer";

export class Customer{

    jwt:string = '';

    email:string = '';

    firstName:string = '';

    lastName:string = '';

    roles:string = 'CUSTOMER';

    orders:{id:number, seatNumber:number, paid:boolean}[] = []

    travelOrders:OfferClass[] = []

    constructor(jwt:string){}

}

export class CustomerAdminView extends Customer{

    password:string | null = '1234';
}