import { Component, OnInit } from '@angular/core';
import { Airport } from '../models/airport';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'app-mypages',
  templateUrl: './mypages.component.html',
  styleUrls: ['./mypages.component.scss']
})
export class MypagesComponent implements OnInit {

  headingsAdmin:string = "New travel destination";

  constructor(private ts:TravelService) { }

  ngOnInit(): void {
  }

}
