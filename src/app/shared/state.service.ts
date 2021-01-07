import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Airport } from '../models/airport';
import { Customer } from '../models/Customer';
import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private customer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(new Customer(''))
  public customer$:Observable<Customer> = this.customer.asObservable();

  private airports: BehaviorSubject<Airport[]> = new BehaviorSubject<Airport[]>([]);
  public airports$:Observable<Airport[]> = this.airports.asObservable();

  //private session:SessionService
  constructor() { }

  
  setCustomer(customer:Customer):void
  {
     
     const customerTemp:Customer = new Customer('');
     customerTemp.jwt = customer.jwt;
     customerTemp.firstName = customer.firstName;
     customerTemp.lastName = customer.lastName;
     customerTemp.email = customer.email;
     customerTemp.roles = customer.roles;
     
     this.customer.next(customerTemp);
    // this.session.setCustomerInSessionStorage(customerTemp);
  }

  addAirport(airport:Airport)
  {
    const airportTemp = this.airports.value;
    const airportUpdate = [...airportTemp, airport];
    this.airports.next(airportUpdate);

  }

  addAirports(airports:Airport[])
  {
    const airportTemp = this.airports.value;
    const airportUpdate = [...airportTemp, ...airports];
    
    this.airports.next(airportUpdate);

  }
}
