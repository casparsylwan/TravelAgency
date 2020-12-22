import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import { DateComponent } from './steps/date/date.component';
import { PaymentComponent } from './steps/payment/payment.component';
import { SeatComponent } from './steps/seat/seat.component';

const routes: Routes = [
  { path: '', component: BookingComponent,
    children: [
    { path: 'date', component: DateComponent,
      data: { animationState: 'One' }},
    { path: 'seat', component: SeatComponent,
      data: { animationState: 'Two' }},
    { path: 'payment', component: PaymentComponent,
      data: { animationState: 'Three' }},
    

    ] },

  { path: '**', redirectTo: '' ,component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
