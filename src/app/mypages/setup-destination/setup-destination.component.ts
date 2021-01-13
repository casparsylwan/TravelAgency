import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Airport } from 'src/app/models/airport';
import { Customer } from 'src/app/models/Customer';
import { Plane } from 'src/app/models/plane';
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
  planes$:Plane[] = [];

  planesRecieved:boolean = false;

  departureAirport:Airport = {name:'', country:'', city:''};

  arrivalAirport:Airport =    {name:'', country:'', city:''};

  thePlaneOfchoice:Plane = {name:'', numberOfSeats: 0 };

  departureDate:number = Date.now();
  arrivalDate:number = Date.now()
  price:number = 0;

  constructor(private fb:FormBuilder,
              private travelService:TravelService,
              private state:StateService,
              private router:Router
              ) { }

  airportForm = this.fb.group({

    airportName: [''],
    country: [''],
    city: [''],
    price:[0],
    departureDate:["2021-01-17T20:00"]

  })

  planeForm = this.fb.group({
    name:[''],
    numberOfSeats: [300]
  })

  ngOnInit(): void 
  {
    this.state.customer$.subscribe((customer) => {      
      this.customer$ = customer       
    });
    this.state.airports$.subscribe((airports) => this.airports$ = airports);
    this.state.airPlanes$.subscribe((plane) => this.planes$ = plane);

    
  }

  public createPlane()
  {
    if(this.customer$ != undefined)
    {
      const body = {
        name: this.planeForm.value.name,
        numberOfSeats: this.planeForm.value.numberOfSeats
      }
      
      this.travelService.createAirplane(body, this.customer$.jwt).subscribe((plane) => {

        this.state.addPlane(plane);
        this.planeForm.reset();
      })
    }

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
              this.airportForm.reset();
            })
        }
    }    
  }

  setDepartureAirport(airportFrom:Airport)
  {
    this.departureAirport = airportFrom;
  }

  setArrivalAirport(airportTo:Airport)
  {
    this.arrivalAirport = airportTo
  }

  setAirplaneOfChoice(plane:Plane)
  {
    this.thePlaneOfchoice = plane;
  }

  setPlaneText()
  {
    if(this.thePlaneOfchoice.numberOfSeats >0)
    {
      return this.thePlaneOfchoice.name + ", " +this.thePlaneOfchoice.numberOfSeats + " seats"
    }
    else
    {
      return '';
    }
     
  }

  resetTravelAirports()
  {
    this.departureAirport = {name:'', country:'', city:''};
    this.arrivalAirport   = {name:'', country:'', city:''};
  }

  registerTravel()
  {
  //  let timeMilliseconds = new Date().getTime() Math.floor(timeMilliseconds/1000)

    let body:any = { 
                     plane: this.thePlaneOfchoice,
                     fromAirport: this.departureAirport,
                     toAirport: this.arrivalAirport,
                     depatureDate: this.airportForm.value.departureDate, //,
                     price: this.airportForm.value.price
                    }
    
    if(this.customer$ != null)
    {
       this.travelService.createTravelOffer(body, this.customer$.jwt).subscribe((offer) => console.log(offer));
    }
    else
    {
      this.logout();
    }
    

  }

  logout()
  {
    const customer:Customer = new Customer('');
    this.state.setCustomer(customer);
    sessionStorage.removeItem('travelux')
    this.router.navigate(['/login'])
  }


}
