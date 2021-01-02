import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Authentication } from 'src/app/models/Authentication';
import { LoginAuthService } from 'src/app/service/login-auth.service';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showRegister:string | null = '';

  registerForm = this.fb.group({

    firstNameNew:[''],
    lastNameNew:[''],
    EmailNew: [''],
    passwordNew: [''],
    rePasswordNew: ['']

  })
  
  customer$:Customer | null = null;

  constructor(private state:StateService,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private router:Router,
              private httpLogin:LoginAuthService) { }

  ngOnInit(): void {

    this.state.customer$.subscribe((customer) => this.customer$ = customer )

    this.route.paramMap.subscribe((param:ParamMap) => {
      
      this.showRegister = param.get('new');
    }) 
  }

  createNewCustomer()
  {
    const body = {
      email     : this.registerForm.value.EmailNew,
      password  : this.registerForm.value.passwordNew, 
      firstName : this.registerForm.value.firstNameNew,
      lastName  : this.registerForm.value.lastNameNew,
      roles     : "CUSTOMER",
      active    : true
    }

    console.log(body);

    this.httpLogin.httpCreateCustomer(body).subscribe((customer) =>{

      const authBody:Authentication = 
                          { username : body.email, 
                            password : body.password
                          }
      this.httpLogin.httpLogin(authBody).subscribe((jwtBody) =>{
        customer.jwt = jwtBody.jwt
        this.state.setCustomer(customer);
        this.router.navigate(['/mypages'])
      })
    })
  } 

}
