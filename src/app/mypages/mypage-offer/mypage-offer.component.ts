import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Offer, OfferClass } from 'src/app/models/offer';
import { TravelService } from 'src/app/service/travel.service';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-mypage-offer',
  templateUrl: './mypage-offer.component.html',
  styleUrls: ['./mypage-offer.component.scss']
})
export class MypageOfferComponent implements OnInit {

  customer$:Customer | null = null;
  offers:Offer[] = []
  offersCall:boolean = false;

  constructor(
    private travelService:TravelService,
    private state:StateService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.state.customer$.subscribe((customer)=>{
      this.customer$ = customer
      if(!this.offersCall && this.customer$.jwt.length > 6)
      {
        this.offersCall = true;
        this.getOffers();
        console.log("SENT: ", customer);
      }
    } );
    
  }

  public getOffers()
  {
    console.log("get offers ", this.customer$?.jwt)
    if(this.customer$?.jwt)
    {
      this.travelService.getAllTravelOffers(this.customer$.jwt).subscribe((offer) => {
        this.offers = [...this.offers, ...offer]

      console.log(this.offers);
    },
    (error)=> {
      console.log(error);
      this.logout()
    })
    }
    else
    {
      
    } 
  }

  logout()
  {
    const customer:Customer = new Customer('');
    this.state.setCustomer(customer);
    sessionStorage.removeItem('travelux')
    this.router.navigate(['/login'])
  }

  createDate(date:Date | null)
  {
    if(date==null)
    {
      return null
    }
    let timeObj = new Date(date)
    let time = timeObj.getFullYear() +'-'+ this.pad((timeObj.getMonth() +1 ),2) + '-' + this.pad(timeObj.getDate(),2)  + ' ' + timeObj.getHours()+":"+ this.pad(timeObj.getMinutes(),2) 
    return time;
  }

  pad(n:number, len:number) {
    let l = Math.floor(len)
    let sn = '' + n
    let snl = sn.length
    if(snl >= l) return sn
    return '0'.repeat(l - snl) + sn
  }

}
