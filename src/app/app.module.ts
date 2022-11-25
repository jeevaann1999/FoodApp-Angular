import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NorthIndianComponent } from './north-indian/north-indian.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DessertsComponent } from './desserts/desserts.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignUpComponent
  },
  {
    path:"northindian",
    component:NorthIndianComponent
  },
  {
    path:"southindian",
    component:SouthIndianComponent
  },
  {
    path:"drinks",
    component:DrinksComponent
  },
  {
    path:"desserts",
    component:DessertsComponent
  },
  {
    path:"order",
    component:OrderNowComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NorthIndianComponent,
    SouthIndianComponent,
    DrinksComponent,
    DessertsComponent,
    OrderNowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
