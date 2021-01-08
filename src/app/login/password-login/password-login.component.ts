import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Authentication } from 'src/app/models/Authentication';
import { Customer } from 'src/app/models/Customer';
import { LoginAuthService } from 'src/app/service/login-auth.service';
import { SessionService } from 'src/app/service/session.service';
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


        this.httpLogin.httpGetCustomer(body.username, jwt.jwt ).subscribe((customer:Customer) =>{

          customer.jwt = jwt.jwt;
          this.state.setCustomer(customer);
          sessionStorage.setItem('travelux', JSON.stringify(this.customer$))
          this.router.navigate(['/mypages'])
      })
    })

    

    
  }

}