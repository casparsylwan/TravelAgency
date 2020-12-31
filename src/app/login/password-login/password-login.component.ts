import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Authentication } from 'src/app/models/Authentication';
import { Customer } from 'src/app/models/Customer';
import { LoginAuthService } from 'src/app/service/login-auth.service';
import { StateService } from 'src/app/shared/state.service';


@Component({
  selector: 'app-password-login',
  templateUrl: './password-login.component.html',
  styleUrls: ['./password-login.component.scss']
})
export class PasswordLoginComponent implements OnInit {
 
  message$:string = "";
  showLogin:string | null = '';

  loginForm = this.fb.group({

    Email: [''],
    password: ['']

  })

  constructor(private fb:FormBuilder,
              private state:StateService,
              private httpLogin:LoginAuthService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {

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
      this.state.setValue(jwt.jwt);
      this.message$ = jwt.jwt;

        this.httpLogin.httpGetCustomer(body.username, this.message$ ).subscribe((customer:Customer) =>{
        console.log(customer);
      })
    })

    

    
  }

  setElementRef()
  {
    this.state.setValue(this.loginForm.value.Email);
    
  }

}
