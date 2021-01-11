import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../models/airport';
import { Customer } from '../models/Customer';
import { Offer } from '../models/offer';
import { Plane } from '../models/plane';
import { StateService } from '../shared/state.service';

@Injectable({
  providedIn: 'root'
})
export class TravelService implements OnInit{

  private baseUrl:string = 'https://travelagencyspringboot.herokuapp.com/api/v1';
  private admin$:Customer | null = null;

  constructor(private http:HttpClient,
              private state:StateService ) { }
  ngOnInit(): void {
    
    this.state.customer$.subscribe((customer) => this.admin$ = customer )
  }

  public allAirports()
  {
    
    this.http.get<Airport[]>(`${this.baseUrl}/airports/all`).subscribe((airports) =>{
      this.state.addAirports(airports);
      
    })
  }

  public newAirport(body:Airport, jwt:string):Observable<Airport>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.post<Airport>(`${this.baseUrl}/airport/new`, body, {headers: httpHeaders})
  }

  getAllPlanes(jwt:string):Observable<Plane[]>
  {

    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.get<Plane[]>(`${this.baseUrl}/airplanes/all`, {headers: httpHeaders})
  }

  createAirplane(body:Plane ,jwt:string):Observable<Plane>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.post<Plane>(`${this.baseUrl}/airplane/new`, body, {headers: httpHeaders})

  }

  public getAllTravelOffers(jwt:string):Observable<Offer[]>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });
    return this.http.get<Offer[]>(`${this.baseUrl}/travel/all`, {headers: httpHeaders})
  }

  public createTravelOffer(body:Offer, jwt:string):Observable<Offer>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

      return this.http.post<Offer>(`${this.baseUrl}/travel/new`,body , {headers: httpHeaders})
  }

  public deleteTravelOffer(body:Offer, jwt:string, id:number):Observable<void>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

      return this.http.post<void>(`${this.baseUrl}/travel/delete/${id}`, JSON.stringify(body)  , {headers: httpHeaders})
  }


  public buyTravelSeat(body:any, jwt:string):Observable<Customer>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.post<Customer>(`${this.baseUrl}/customer/update`, body, {headers: httpHeaders})

  }



}
