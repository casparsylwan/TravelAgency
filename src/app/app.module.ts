import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './base/home/home.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { LoginModule } from './login/login.module';
import { OffersModule } from './offers/offers.module';
import { StateService } from './shared/state.service';
// import { LoaderComponent } from './base/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    // LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    LoginModule,
    OffersModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
