
import { ReservationService } from '../reservation.service';
import { reservation } from './../model/reservation.model';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css'],
  providers: [DatePipe]
})
export class RechercheParNomComponent {

  searchTerm: string = '';
  reservations! : reservation[];


  constructor(private reservationservice : ReservationService, public authService: AuthService){}

  ngOnInit() : void{
    this.reservations = this. reservationservice.listereservations();
    console.log(this.reservations);
  }

  supprimerreservation(r: reservation)
  {
    //console.log(r);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.reservationservice.supprimerreservation(r);
  }

}
