import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // private jwt: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // public jwt$: Observable<string> = this.jwt.asObservable();

  private customer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(new Customer(''))
  public customer$:Observable<Customer> = this.customer.asObservable();

  constructor() { }

  // setJwt(value:string)
  // {
  //   this.jwt.next(value);
  // }

  setCustomer(customer:Customer):void
  {
     const customerTemp:Customer = new Customer('');
     customerTemp.jwt = customer.jwt;
     customerTemp.firstName = customer.firstName;
     customerTemp.lastName = customer.lastName;
     customerTemp.email = customer.email;
    // this.customer$.subscribe((cust)=>{
    //   console.log("cust ", cust);
    // })
    // console.log("setCustomer", customer);
     this.customer.next(customerTemp);
    
  }
}
