import { Component, OnInit } from '@angular/core';
import { SetupService } from './service/setup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TravelAgency';

  constructor(private setup:SetupService){}

  ngOnInit(): void {
    
    this.getInitalValues();

  }

  getInitalValues():void
  {
    this.setup.setUpCall().subscribe((value) =>{
      
      this.title = value;
    })
  }

}
