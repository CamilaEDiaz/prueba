import { Component, OnInit } from '@angular/core';
import {VueloService} from '../services/vuelo.service';
import {Reserva} from '../models/reserva';
import { from } from 'rxjs';
@Component({
  selector: 'app-consulta-reservas',
  templateUrl: './consulta-reservas.component.html',
  styleUrls: ['./consulta-reservas.component.css']
})
export class ConsultaReservasComponent implements OnInit {
  reservas : Reserva[];
  constructor(private vueloService: VueloService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.vueloService.getAll().subscribe(reservas=> this.reservas=reservas);
  }

}
