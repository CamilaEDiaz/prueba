import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegistroReservasComponent} from './registro-reservas/registro-reservas.component';
import {ConsultaReservasComponent} from './consulta-reservas/consulta-reservas.component';
import{EditarReservasComponent} from './editar-reservas/editar-reservas.component';
import { from } from 'rxjs';

const routes: Routes =[
  {
  path:'registroReservas',
  component:RegistroReservasComponent
  },

  {
  path:'consultaReservas',
  component:ConsultaReservasComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
