import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private jwt: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public jwt$: Observable<string> = this.jwt.asObservable();

  

  constructor() { }

  setValue(value:string)
  {
    this.jwt.next(value);
  }
}
