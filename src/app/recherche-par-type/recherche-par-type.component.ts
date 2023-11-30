import {ReservationService} from '../reservation.service';
import {reservation} from '../model/reservation.model';
import {Component, OnInit} from '@angular/core';
import {Type} from '../model/type.model'
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
})
export class RechercheParTypeComponent implements OnInit {
  idtype!: number;
  reservations!: reservation[];
  types!: Type[]

  constructor(private reservationservice: ReservationService, public authService: AuthService) {}
    ngOnInit()
  :
    void {
      this.types = this.reservationservice.listetypes();
      console.log(this.types);
    }
    onChange()
    {
      this.reservations = this.reservationservice.recherchepartype(this.idtype);
    }

  supprimerreservation(r: reservation)
  {
    //console.log(r);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.reservationservice.supprimerreservation(r);
  }

  }
