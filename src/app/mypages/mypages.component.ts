import { Component, OnInit } from '@angular/core';
import { Airport } from '../models/airport';
import { Customer } from '../models/Customer';
import { TravelService } from '../service/travel.service';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-mypages',
  templateUrl: './mypages.component.html',
  styleUrls: ['./mypages.component.scss']
})
export class MypagesComponent implements OnInit {

  headingsAdmin:string = "New travel destination";

  customer$:Customer | null = null;

  constructor(
    private ts:TravelService,
    private state:StateService
    ) { }

  ngOnInit(): void {

    this.state.customer$.subscribe((customer) => this.customer$ = customer);
  }

}
