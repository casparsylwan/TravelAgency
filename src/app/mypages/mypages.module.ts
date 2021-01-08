import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MypagesRoutingModule } from './mypages-routing.module';
import { MypagesComponent } from './mypages.component';
import { SetupDestinationComponent } from './setup-destination/setup-destination.component';
import { MypageOfferComponent } from './mypage-offer/mypage-offer.component';
import { CustomersAdminComponent } from './customers-admin/customers-admin.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


@NgModule({
  declarations: [MypagesComponent, SetupDestinationComponent, MypageOfferComponent, CustomersAdminComponent, MyOrdersComponent],
  imports: [
    CommonModule,
    MypagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MypagesModule { }
