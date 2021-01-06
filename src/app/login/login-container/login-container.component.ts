import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  showRegister:string | null = '';
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    
    this.route.paramMap.subscribe((param:ParamMap) => {
      
      this.showRegister = param.get('new');
    })
  }

}
