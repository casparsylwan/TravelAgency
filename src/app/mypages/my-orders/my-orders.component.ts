import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Offer } from 'src/app/models/offer';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  customer$:Customer | null = null;

  constructor(private state:StateService) { }

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

  isPaid(offer:Offer):string
  {
    if(offer.paid)
    {
      return "DONE"
    }
    else if(!offer.paid)
    {
      return "Pending"; 
    }
    return '';
  }


}
