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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NorthIndianComponent,
    SouthIndianComponent,
    DrinksComponent,
    DessertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
