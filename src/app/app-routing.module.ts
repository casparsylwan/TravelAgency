import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './base/home/home.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'login', component: LoginContainerComponent},
  { path: 'login/:new', component: LoginContainerComponent },
  { path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
