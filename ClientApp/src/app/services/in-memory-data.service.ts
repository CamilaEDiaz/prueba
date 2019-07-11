import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Reserva} from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb(){
  const Reserva =[
    {id: 1065845791, Nombre: 'Camila Espinosa', TipoSilla: 'ejecutiva', NumeroSilla: 12},
    {id: 1066789542, Nombre: 'Jose Dussan', TipoSilla: 'ejecutiva', NumeroSilla: 15},
    {id: 1067895334, Nombre: 'Jefferson Ruiz', TipoSilla: 'ejecutiva', NumeroSilla: 2}
  ];
  return {Reserva};
}

getCedula(reservas: Reserva[]): number{
  return reservas.length > 0 ? Math.max(...reservas.map(Reserva => Reserva.id)) + 1 : 11;

}
}
