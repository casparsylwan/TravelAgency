import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MypagesRoutingModule } from './mypages-routing.module';
import { MypagesComponent } from './mypages.component';
import { SetupDestinationComponent } from './setup-destination/setup-destination.component';


@NgModule({
  declarations: [MypagesComponent, SetupDestinationComponent],
  imports: [
    CommonModule,
    MypagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MypagesModule { }
