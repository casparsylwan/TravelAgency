import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypagesRoutingModule } from './mypages-routing.module';
import { MypagesComponent } from './mypages.component';


@NgModule({
  declarations: [MypagesComponent],
  imports: [
    CommonModule,
    MypagesRoutingModule
  ]
})
export class MypagesModule { }
