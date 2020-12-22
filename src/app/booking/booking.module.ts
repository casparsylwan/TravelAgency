import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { DateComponent } from './steps/date/date.component';
import { SeatComponent } from './steps/seat/seat.component';
import { PaymentComponent } from './steps/payment/payment.component';
import { OrderCompletationComponent } from './order-completation/order-completation.component';


@NgModule({
  declarations: [BookingComponent, DateComponent, SeatComponent, PaymentComponent, OrderCompletationComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
