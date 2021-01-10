import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authentication } from '../models/Authentication';
import { Observable, throwError } from 'rxjs';
import { StateService } from '../shared/state.service';
import { Customer, CustomerAdminView } from '../models/Customer';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements OnInit{

 private baseUrl:string = "https://travelagencyspringboot.herokuapp.com/api/v1";
  

  constructor(
              private http:HttpClient,
              private state:StateService,
              private router:Router
              ) { }

  ngOnInit(): void {}

  httpLogin(body:Authentication):Observable<{jwt:string}>
  {
    return this.http.post<{jwt:string}>(`${this.baseUrl}/authenticate`,body);
  }

  httpGetCustomerAndSetState(email:string, jwt:string):void
  {
    this.httpGetCustomer(email, jwt).subscribe((customer) => {

      customer.jwt = jwt;
      this.state.setCustomer(customer);
        
    },
    (error) =>{
      console.log("ERROR: ", error)
      sessionStorage.removeItem('travelux')
      this.router.navigate(['/login']);

    })
  }

  updateCustomer(body:any, jwt:string):Observable<Customer>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });
    console.log("Body", body);
    return this.http.post<Customer>(`${this.baseUrl}/customer/update`, body, {headers: httpHeaders})
  }

  httpCreateCustomer(body:any):Observable<Customer>
  {
    return this.http.post<Customer>(`${this.baseUrl}/customer/new`, body);
  }

  httpGetCustomer(email:string, jwt:string):Observable<Customer>
  {
    
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.get<Customer>(`${this.baseUrl}/customer/${email}`, {headers: httpHeaders})
  }

  httpGetAllCustomers(jwt:string):Observable<CustomerAdminView[]>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.get<CustomerAdminView[]>("https://travelagencyspringboot.herokuapp.com/api/v1/customers/all", {headers: httpHeaders}) //`${this.baseUrl}/customers/all`
  }
}
