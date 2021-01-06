import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypagesComponent } from './mypages.component';

const routes: Routes = [
  { path: '', component: MypagesComponent },
  { path: ':view', component: MypagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypagesRoutingModule { }
