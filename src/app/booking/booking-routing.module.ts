import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import { PaymentComponent } from './steps/payment/payment.component';
import { SeatComponent } from './steps/seat/seat.component';

const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: 'seat', component: SeatComponent},
  { path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
