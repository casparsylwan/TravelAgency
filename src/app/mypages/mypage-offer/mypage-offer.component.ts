import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Offer, OfferClass } from 'src/app/models/offer';
import { Seat } from 'src/app/models/seat';
import { LoginAuthService } from 'src/app/service/login-auth.service';
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
  travelToBuy:Offer | null = null;

  seatForm = this.fb.group({
    seatNumber: []
  })

  constructor(
    private travelService:TravelService,
    private state:StateService,
    private router:Router,
    private fb:FormBuilder
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
        console.log(offer);
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

  delteOffer(offer:Offer):void
  {
    if(this.customer$?.jwt && offer?.id != null)
    {
      this.travelService.deleteTravelOffer(offer,this.customer$.jwt, offer.id).subscribe(()=>{
        this.offers = [];
        this.getOffers();
      },
      (err) =>{
        console.log(err);
      })
      
      
    }
  }

  addTravelToList( travel:Offer )
  {
    this.travelToBuy = travel;
  }

  buyTravel(deal:Offer)
  {
    if(this.customer$?.orders == null && this.customer$ != null)
    {
      this.customer$.orders = []
    }

    let seat:Seat = new Seat();
    seat.passanger = this.customer$
    seat.seatNumber = this.seatForm.value.seatNumber;

    if(this.customer$?.jwt != null && this.customer$?.email != undefined && this.customer$?.jwt != undefined && deal != null && deal.id != null)
    {
      let jwt = this.customer$.jwt
      let email = this.customer$.email
      let travelOrders:{id:number, seatNumber:number, paid:boolean}[] =  [];
      let travelDeal:Offer[] = [];

      this.travelService.buyTravelSeat(seat, this.customer$?.jwt, deal?.id).subscribe((customer)=>{
        
        this.travelService.getCustomersOrderId(email, jwt).subscribe((customerOrder)=> {
          console.log(customerOrder)
          customerOrder.forEach( product => {
            travelOrders.push({
              id: product.id,
              seatNumber: product.seatNumber,
              paid: product.paid
          })
          travelDeal.push(product.travel)    
          });
          if(this.customer$ != null)
          {
            this.customer$.travelOrders = travelDeal
            this.customer$.orders = travelOrders
            this.router.navigate(['/mypages/myorders'])
          }
          
        })
      })
      
    }
    
    
  }

}
