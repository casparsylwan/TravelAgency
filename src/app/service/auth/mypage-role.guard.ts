import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { StateService } from 'src/app/shared/state.service';

@Injectable({
  providedIn: 'root'
})
export class MypageRoleGuard implements CanActivate {

  customer$:Customer | null = null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.state.customer$.subscribe((customer) => this.customer$ = customer )
      let tokenStr = sessionStorage.getItem('travelux')

      if(this.customer$ == null || tokenStr == null)
      {
        return this.router.navigate(['/login']);
      }
      else if(JSON.parse(tokenStr).jwt.length > 2)
      {
        return true;
      }
      else if(this.customer$.jwt.length < 2)
      {
        
        return this.router.navigate(['/login']);
      }
      else
      {
        return true;
      }    
  }

  constructor(private state:StateService, private router:Router){}
  
}
