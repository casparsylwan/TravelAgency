import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-completation',
  templateUrl: './order-completation.component.html',
  styleUrls: ['./order-completation.component.scss']
})
export class OrderCompletationComponent implements OnInit {

  path:Route[] = [];

  url:string = ''
  

  constructor( private router:Router) { }

  ngOnInit(): void {
    
    this.url = this.router.url;
    this.router.events.forEach(event =>{
      
      if(event instanceof NavigationEnd)
      {
        this.url = event.url;
      }
    })
  }

  setDateActive():string
  {
    if(this.url == '/booking/date')
    {
      return 'active';
    } 
    else
    {
      return '';
    }
   
  }

  setSeatActive():string
  {
    if(this.url == '/booking/seat')
    {
      return 'active';
    } 
    else
    {
      return '';
    }
   
  }

  setPaymentActive():string
  {
    if(this.url == '/booking/payment')
    {
      return 'active';
    } 
    else
    {
      return '';
    }
   
  }


}


