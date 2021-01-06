import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Airport } from 'src/app/models/airport';
import { Customer } from 'src/app/models/Customer';
import { TravelService } from 'src/app/service/travel.service';
import { StateService } from 'src/app/shared/state.service';

@Component({
  selector: 'app-setup-destination',
  templateUrl: './setup-destination.component.html',
  styleUrls: ['./setup-destination.component.scss']
})
export class SetupDestinationComponent implements OnInit {

  customer$:Customer | null = null;
  airports$:Airport[] = [];

  constructor(private fb:FormBuilder,
              private travelService:TravelService,
              private state:StateService) { }

  airportForm = this.fb.group({

    airportName: [''],
    country: [''],
    city: ['']

  })

  ngOnInit(): void 
  {
    this.state.customer$.subscribe((customer) => this.customer$ = customer );
    this.state.airports$.subscribe((airports) => this.airports$ = airports);
  }

  public createAirport()
  {

    if(this.customer$ != undefined)
    {
      
      const body:Airport = {
                              name :    this.airportForm.value.airportName,
                              country : this.airportForm.value.country,
                              city :    this.airportForm.value.city
                            
                            }
                            
      if(this.customer$?.jwt.length > 5 )
      {
        this.travelService.newAirport(body, this.customer$.jwt).subscribe((airport) => 
        {
          this.state.addAirport(airport);


        })

    }

    }

    
  }


}
