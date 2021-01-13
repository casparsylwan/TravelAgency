import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../shared/state.service';
import { SessionService } from './session.service';
import { TravelService } from './travel.service';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  private baseUrl:string = 'https://travelagencyspringboot.herokuapp.com/api/v1';

  constructor(
              private http:HttpClient,
              private travelServis:TravelService,
              private session:SessionService,
              private state:StateService
              ) { }

  public setUpCall():Observable<any>
  {
    this.session.getCustomerFromSessionStorage();
    this.travelServis.allAirports();
    this.travelServis.getAllPlanes().subscribe((planes) =>{
      this.state.addPlanes(planes);
    })
    return this.http.get(`${this.baseUrl}/ping`, {responseType:'text'})
  }


}
