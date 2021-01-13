import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Offer } from 'src/app/models/offer';
import { Seat } from 'src/app/models/seat';
import { TravelService } from 'src/app/service/travel.service';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  customer$:Customer | null = null;

  constructor(
    private state:StateService,
    private travelService:TravelService
    ) { }

  ngOnInit(): void {

    this.state.customer$.subscribe((customer) => this.customer$ = customer);

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

  isPaid(seat:any):string
  {
    console.log(seat);
    if(seat)
    {
      return "DONE"
    }
    else if(!seat)
    {
      return "Pending"; 
    }
    return '';
  }

  paySeat(seat:any)
  {
    if(this.customer$ != null)
    {
        this.travelService.payeSeat(seat.id, this.customer$.jwt).subscribe(()=>{
              seat.paid = true;
              console.log(seat);
            })
    }
    
  }

  removeDeal(deal:Offer, seat:{id:number | null, seatNumber:number})
  {
    console.log(deal);
    console.log(seat);
    console.log()
    if(this.customer$ != null && seat.id != null && deal.id !=null && this.customer$.email !=null && this.customer$.jwt !=null )
    {
      let email:string = this.customer$.email;
      let jwt:string = this.customer$.jwt;
      let travelOrders:{id:number, seatNumber:number, paid:boolean}[] =  [];
      let travelDeal:Offer[] = [];

        this.travelService.removeSeatFromCustomerAndTravel(this.customer$?.email, deal.id, seat.id, this.customer$.jwt).subscribe(()=>{
          console.log("SENT");
          this.travelService.getCustomersOrderId(email, jwt).subscribe((customerOrder)=> {
            customerOrder.forEach( product => {
              travelOrders.push({
                id: product.id,
                seatNumber: product.seatNumber,
                paid: product.paid
            })
            travelDeal.push(product.travel)    
            });
            if(this.customer$ != null){

              this.customer$.travelOrders = travelDeal
              this.customer$.orders = travelOrders
            }
            
            
          }) 
        },
        (err)=> {
          console.log(err);
        })
    }
    
    
  }


}
