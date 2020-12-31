import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  jwt$:string = "";

  registerForm = this.fb.group({

    firstNameNew:[''],
    lastNameNew:[''],
    EmailNew: [''],
    passwordNew: [''],
    rePasswordNew: ['']

  })
  

  constructor(private state:StateService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.state.jwt$.subscribe(value => this.jwt$ = value);
  }

}
