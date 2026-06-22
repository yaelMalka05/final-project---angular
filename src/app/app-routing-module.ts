import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Login } from './component/login/login';
import { OrderTickets } from './component/order-tickets/order-tickets';
import { OurAnimals } from './component/our-animals/our-animals';
import { PersonalArea } from './component/personal-area/personal-area';

const routes: Routes = [
  {path:'home', component:Home},
  {path:'login', component:Login},
  {path:'order-tickets', component:OrderTickets},
  {path:'our-animals', component:OurAnimals},
  {path:'personal-area', component:PersonalArea}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
