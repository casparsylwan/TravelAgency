import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../models/Authentication';
import { Customer } from '../models/Customer';
import { StateService } from '../shared/state.service';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
              private loginHttp:LoginAuthService,
              private router:Router) { }

  setCustomerInSessionStorage(customer:Customer)
  {
    sessionStorage.setItem('travelux', JSON.stringify(customer));
  }

  getCustomerFromSessionStorage()
  {
    
    const customerStr = sessionStorage.getItem('travelux');
    
    if(customerStr)
    {
      let customerObj:Customer = JSON.parse(customerStr);
      
      this.loginHttp.httpGetCustomerAndSetState(customerObj.email, customerObj.jwt)
        
    }
    
    

  }

  logoutFromSession()
  {
    sessionStorage.removeItem('travelux');
  }
}
