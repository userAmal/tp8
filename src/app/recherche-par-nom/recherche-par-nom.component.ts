
import { ReservationService } from '../reservation.service';
import { reservation } from './../model/reservation.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {

  searchTerm!: string;
  reservation! : reservation[];
  

  constructor(private ReservationService : ReservationService){}

  ngOnInit() : void{
    this.reservation = this. ReservationService.listereservations();
    console.log(this.reservation);
  }

}
