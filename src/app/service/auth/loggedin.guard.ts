import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { StateService } from 'src/app/shared/state.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate{

  customer$:Customer | null = null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.state.customer$.subscribe((customer) => this.customer$ = customer )
      if(this.customer$ == null)
      {
        console.log("null: ", this.customer$)
        return true;
      }
      if(this.customer$.jwt.length<3)
      {
        console.log( "Auth1",this.customer$.jwt)
        return true;
      }
      else
      {
        console.log( "Auth2",this.customer$.jwt)
        return this.router.navigate(['/mypages'])
      }
  }

  constructor(private state:StateService, private router:Router){}
  
}
