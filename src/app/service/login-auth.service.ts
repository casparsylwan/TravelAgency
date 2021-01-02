import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authentication } from '../models/Authentication';
import { Observable } from 'rxjs';
import { StateService } from '../shared/state.service';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements OnInit{

  baseUrl:string = "https://travelagencyspringboot.herokuapp.com/api/v1";
  

  constructor(
              private http:HttpClient,
              private state:StateService
              ) { }

  ngOnInit(): void {}

  httpLogin(body:Authentication):Observable<{jwt:string}>
  {
    return this.http.post<{jwt:string}>(`${this.baseUrl}/authenticate`,body);
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
}
