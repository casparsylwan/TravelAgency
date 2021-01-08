import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { LoginAuthService } from 'src/app/service/login-auth.service';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-customers-admin',
  templateUrl: './customers-admin.component.html',
  styleUrls: ['./customers-admin.component.scss']
})
export class CustomersAdminComponent implements OnInit {

  customer$:Customer | null = null;
  customers:Customer[] = [];
  getAllBoolean:boolean = false;

  constructor(
              private loginAuth:LoginAuthService,
              private state:StateService
              ) { }

  ngOnInit(): void {

    this.state.customer$.subscribe((customer) => {
      
      this.customer$ = customer;
      if(!this.getAllBoolean)
      {
        this.getAllCustomers();
      }
    
    })
  }

  getAllCustomers()
  {
    if(this.customer$ != null && this.customer$.jwt.length>5)
    {
      this.loginAuth.httpGetAllCustomers(this.customer$.jwt).subscribe((customers) =>{
        this.customers = customers;
        console.log(customers)
      },
        (error) =>{
           console.log(error.status) 
      })
      this.getAllBoolean = true;
    }
    
   
  }


}
