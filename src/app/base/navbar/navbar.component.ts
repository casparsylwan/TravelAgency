import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  customer$:Customer | null = null;

  constructor(private state:StateService) { }

  ngOnInit(): void {

    this.state.customer$.subscribe((customer) => this.customer$ = customer )

  }

}
