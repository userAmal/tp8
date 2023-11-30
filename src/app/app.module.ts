import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ReservationComponent from './reservation/reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { LoginComponent } from './login/login.component';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import {SearchFilterPipe} from "./search-filter.pipe";
import {RechercheParNomComponent} from "./recherche-par-nom/recherche-par-nom.component";
import {RechercheParTypeComponent} from "./recherche-par-type/recherche-par-type.component";



@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    AddReservationComponent,
    UpdateReservationComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParNomComponent,
    RechercheParTypeComponent,
    SearchFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
