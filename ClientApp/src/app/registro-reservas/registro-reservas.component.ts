import { Component, OnInit } from '@angular/core';
import {VueloService} from '../services/vuelo.service';
import {Reserva} from '../models/reserva';
import { from } from 'rxjs';
@Component({
  selector: 'app-registro-reservas',
  templateUrl: './registro-reservas.component.html',
  styleUrls: ['./registro-reservas.component.css']
})
export class RegistroReservasComponent implements OnInit {

  constructor(private vueloService : VueloService) { }
  reserva: Reserva;
  ngOnInit() {
    this.reserva = {id: 0, codigo: 1,  Nombre:'',TipoSilla:false, NumeroSilla: 0}
    console.log('se inicializa el vuelo');

  }
  add():void{
    this.vueloService.addReserva(this.reserva)
    .subscribe(reserva =>{ alert('SE AGREGÓ UN NUEVO VUELO')});
  }

}
