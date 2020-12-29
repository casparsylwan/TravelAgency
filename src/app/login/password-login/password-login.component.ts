import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-password-login',
  templateUrl: './password-login.component.html',
  styleUrls: ['./password-login.component.scss']
})
export class PasswordLoginComponent implements OnInit {
 

  loginForm = this.fb.group({

    Email: [''],
    password: ['']

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.setElementRef();
    
  }

  setElementRef()
  {
    
    
  }

}
