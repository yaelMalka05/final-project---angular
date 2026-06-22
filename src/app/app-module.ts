import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { Home } from './component/home/home';
import { Login } from './component/login/login';
import { OrderTickets } from './component/order-tickets/order-tickets';
import { OurAnimals } from './component/our-animals/our-animals';
import { PersonalArea } from './component/personal-area/personal-area';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    OrderTickets,
    OurAnimals,
    PersonalArea
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
