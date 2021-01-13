import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Authentication } from 'src/app/models/Authentication';
import { Customer, CustomerAdminView } from 'src/app/models/Customer';
import { Offer } from 'src/app/models/offer';
import { LoginAuthService } from 'src/app/service/login-auth.service';
import { SessionService } from 'src/app/service/session.service';
import { TravelService } from 'src/app/service/travel.service';
import { StateService } from 'src/app/shared/state.service';


@Component({
  selector: 'app-password-login',
  templateUrl: './password-login.component.html',
  styleUrls: ['./password-login.component.scss']
})
export class PasswordLoginComponent implements OnInit {
 
  showLogin:string | null = '';
  customer$:Customer | null = null;

  loginForm = this.fb.group({

    Email: [''],
    password: ['']

  })

  constructor(
              private fb:FormBuilder,
              private state:StateService,
              private httpLogin:LoginAuthService,
              private travelService:TravelService,
              private route:ActivatedRoute,
              private router:Router,
              private session:SessionService
              ) { }

  ngOnInit(): void {

    this.state.customer$.subscribe((customer) => this.customer$ = customer)

    this.route.paramMap.subscribe((param:ParamMap) => {     
    this.showLogin = param.get('new');
    })
    
  }

  loginHttp()
  {
    let body:Authentication = { 
                                username : this.loginForm.value.Email,
                                password : this.loginForm.value.password
                              }

    this.httpLogin.httpLogin(body).subscribe((jwt) =>{


        this.httpLogin.httpGetCustomer(body.username, jwt.jwt ).subscribe((customer:CustomerAdminView) =>{

          console.log("LoGiN: ", customer);
          customer.jwt = jwt.jwt;
          let travelOrders:{id:number, seatNumber:number, paid:boolean}[] =  [];
          let travelDeal:Offer[] = [];
          
          this.travelService.getCustomersOrderId(customer.email, customer.jwt).subscribe((customerOrder)=> {

            customerOrder.forEach( product => {
              travelOrders.push({
                id: product.id,
                seatNumber: product.seatNumber,
                paid: product.paid
            })
            travelDeal.push(product.travel)    
            });
            customer.travelOrders = travelDeal
            customer.orders = travelOrders
            this.state.setCustomer(customer);
            sessionStorage.setItem('travelux', JSON.stringify(this.customer$))
            this.router.navigate(['/mypages/myorders'])
          })

          // let travelOrders:number[] =[];
          // customer.travelOrders.forEach((order) => {
          //   if(order?.id != null)
          //   {
          //     travelOrders.push(order.id)
          //   }
            
          // })
          // this.travelService.getCustomersOffers(travelOrders, jwt.jwt).subscribe((orders) =>{
    
            
          //   this.state.setCustomer(customer);
          //   sessionStorage.setItem('travelux', JSON.stringify(this.customer$))
          //   this.router.navigate(['/mypages'])
          // })          
      })
    })

    

    
  }

}
