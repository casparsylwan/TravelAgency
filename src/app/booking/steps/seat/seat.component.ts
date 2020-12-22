import { Component, OnInit } from '@angular/core';
import { Chair } from 'src/app/models/Chair';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  constructor() { }

  chairs:Chair[] = [];
  windowLeft:Chair[] = [];
  aisle:Chair[] = [];
  windowRight:Chair[] = []; 

  ngOnInit(): void {

    this.generateSeats(42);
    this.rowSorter();

  }

  generateSeats( planeSize:number )
  {
    for(let i=0; i<planeSize; i++)
    {
      let chair:Chair = new Chair(i, i%7);
      this.chairs.push(chair)
      
    }
  }

    rowSorter()
  {
      this.windowLeft = this.chairs.filter(
        seat => seat.seatPlacment === 0 || 
                seat.seatPlacment === 1                        
        );

      this.aisle = this.chairs.filter(
        seat => seat.seatPlacment === 2 || 
                seat.seatPlacment === 3 ||
                seat.seatPlacment === 4
      )

      this.windowRight = this.chairs.filter(
        seat => seat.seatPlacment === 5 || 
                seat.seatPlacment === 6
      )
  }
}


