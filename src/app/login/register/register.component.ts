import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
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
              private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.state.customer$.subscribe((customer) => this.customer$ = customer )

    this.route.paramMap.subscribe((param:ParamMap) => {
      
      this.showRegister = param.get('new');
    })

    
    
  }

}
