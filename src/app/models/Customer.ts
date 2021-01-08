import { OfferClass } from "./offer";

export class Customer{

    jwt:string = '';

    email:string = '';

    firstName:string = '';

    lastName:string = '';

    roles:string = 'CUSTOMER';

    orders:OfferClass[] = []

    constructor(jwt:string){}

}