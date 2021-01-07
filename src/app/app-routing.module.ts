import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './base/home/home.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { LoggedinGuard } from './service/auth/loggedin.guard';
import { MypageRoleGuard } from './service/auth/mypage-role.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'login', component: LoginContainerComponent,  canActivate: [LoggedinGuard]},
  { path: 'login/:new', component: LoginContainerComponent,  canActivate: [LoggedinGuard]},
  { path: 'mypages', loadChildren: () => import('./mypages/mypages.module').then(m => m.MypagesModule), canActivate: [MypageRoleGuard] },
  { path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
