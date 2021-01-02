import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private customer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(new Customer(''))
  public customer$:Observable<Customer> = this.customer.asObservable();

  constructor() { }

  
  setCustomer(customer:Customer):void
  {
     console.log("Logout: ", customer);
     const customerTemp:Customer = new Customer('');
     customerTemp.jwt = customer.jwt;
     customerTemp.firstName = customer.firstName;
     customerTemp.lastName = customer.lastName;
     customerTemp.email = customer.email;
    
     this.customer.next(customerTemp);
    
  }
}
