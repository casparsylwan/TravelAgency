import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersAdminComponent } from './customers-admin/customers-admin.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MypageOfferComponent } from './mypage-offer/mypage-offer.component';

import { MypagesComponent } from './mypages.component';
import { SetupDestinationComponent } from './setup-destination/setup-destination.component';

const routes: Routes = [
  { path: '', component: MypagesComponent,
      children: [
        { path: 'newoffer', component: SetupDestinationComponent},
        { path: 'customer', component: CustomersAdminComponent},
        { path: 'orders' , component: MypageOfferComponent },
        { path: 'myorders' , component: MyOrdersComponent }
      ] }
  // ,
  // { path: 'view', component: MypagesComponent },
  // { path: ':view', component: MypagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypagesRoutingModule { }
