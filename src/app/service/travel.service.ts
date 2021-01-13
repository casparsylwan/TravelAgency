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

  getAllPlanes():Observable<Plane[]>
  {

    // const httpHeaders = new HttpHeaders({
    //   'content-type' : 'application/json',
    //   'Authorization': 'Bearer '+ jwt
    // });

    return this.http.get<Plane[]>(`${this.baseUrl}/airplanes/all`)
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

  public getCustomersOffers(travelOrders:number[], jwt:string):Observable<Offer[]>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });
    
    return this.http.post<Offer[]>(`${this.baseUrl}/travel/customer`,travelOrders , {headers: httpHeaders})
  }

  public getCustomersOrderId(email:string, jwt:string):Observable<{id:number, seatNumber:number, paid:boolean, travel:Offer}[]>
  {

    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.get<{id:number, seatNumber:number, paid:boolean, travel:Offer}[]>(`${this.baseUrl}/travel/customerorder/${email}`, {headers: httpHeaders})
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


  public buyTravelSeat(body:any, jwt:string, travelId:number):Observable<Customer>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });
    return this.http.post<Customer>(`${this.baseUrl}/seat/new/${travelId}`, body, {headers: httpHeaders})

  }

  public payeSeat(id:number, jwt:string):Observable<void>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });

    return this.http.get<void>(`${this.baseUrl}/seat/pay/${id}`, {headers: httpHeaders})

  }

  removeSeatFromCustomerAndTravel(email:string ,travelId:number, seatId:number ,jwt:string):Observable<void>
  {
    const httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+ jwt
    });
    console.log("DELETE");
    return this.http.delete<void>(`${this.baseUrl}/delete/seat/${seatId}/${travelId}/${email}`, {headers: httpHeaders})
  }



}
