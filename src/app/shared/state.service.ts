import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Airport } from '../models/airport';
import { Customer } from '../models/Customer';
import { Plane } from '../models/plane';
import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private customer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(new Customer(''))
  public customer$:Observable<Customer> = this.customer.asObservable();

  private airports: BehaviorSubject<Airport[]> = new BehaviorSubject<Airport[]>([]);
  public airports$:Observable<Airport[]> = this.airports.asObservable();

  private airPlanes: BehaviorSubject<Plane[]> = new BehaviorSubject<Plane[]>([]);
  public airPlanes$: Observable<Plane[]> = this.airPlanes.asObservable();

  //private session:SessionService
  constructor() { }

  
  setCustomer(customer:Customer):void
  {
     console.log("STATE::", customer);
     const customerTemp:Customer = new Customer('');
     customerTemp.jwt = customer.jwt;
     customerTemp.firstName = customer.firstName;
     customerTemp.lastName = customer.lastName;
     customerTemp.email = customer.email;
     customerTemp.roles = customer.roles;

     customerTemp.travelOrders = customer.travelOrders
     customerTemp.orders = customer.orders;
    console.log('T:',customerTemp.orders)
     this.customer.next(customerTemp);
    
  }

  addPlane(plane:Plane)
  {
    
    const planesTemp = [...this.airPlanes.value, plane]
    this.airPlanes.next(planesTemp);

  }

  addPlanes(planes:Plane[])
  {
    const airPlanesTemp = this.airPlanes.value;
    const planesTemp = [...this.airPlanes.value, ...planes]
    this.airPlanes.next(planesTemp);
    // this.airPlanes.fid
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
