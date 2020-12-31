import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  private baseUrl:string = 'https://travelagencyspringboot.herokuapp.com/api/v1';

  constructor(private http:HttpClient) { }

  public setUpCall():Observable<any>
  {
    
    return this.http.get(`${this.baseUrl}/ping`, {responseType:'text'})
  }

}
