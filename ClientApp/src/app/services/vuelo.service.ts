import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import {Reserva} from '../models/reserva';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class VueloService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) 
  {

   }
   //POST: add a new reserva to the serve*/
addReserva (reserva: Reserva): Observable<Reserva> {
  return this.http.post<Reserva>(this.baseUrl+ 'api/Reserva', reserva, httpOptions)
  .pipe(tap((newReserva: Reserva)=> this.log(`added NewReserva w/ Cedula=${newReserva.codigo}`)),
  catchError(this.handleError<Reserva>('addReserva'))
  );
}

 //GET Reservas from the serve*/
 getAll(): Observable<Reserva[]>
 {
   return this.http.get<Reserva[]>(this.baseUrl+'api/Reserva').pipe( tap(_=>this.log('Se consulta la informacion')),
   catchError(this.handleError<Reserva[]>('getAll', []))
   );
 }

 //GET reserva by cedula. Willd 404  if id not found*/
 get(cedula: number): Observable<Reserva>{
   const url =` ${this.baseUrl + 'api/Reserva'}/${cedula}`;
   return this.http.get<Reserva>(url).pipe( tap(_ => this.log(`fetched task Cedula=${cedula}`)),
   catchError(this.handleError<Reserva>(`getReserva Cedula=${cedula}`))

   );
 }

   /**DELETE: delete the task from the serve */
   delete (reserva: Reserva | number): Observable<Reserva> {
     const Cedula= typeof reserva === 'number' ? reserva : reserva.codigo;
     const url = `${ this.baseUrl + 'api/Reserva'}/${Cedula}`;
     return this.http.delete<Reserva>(url, httpOptions) .pipe(tap(_=> this.log(`delete reserva cedula=${Cedula}`)),
     catchError(this.handleError<Reserva>('deleteReserva'))
     );
   }

   private handleError<T> (operation = 'operation', result?: T){
     return (error: any): Observable<T> =>{
       console.error(error);
       this.log(`${operation} failed: ${error.message}`);
       return of (result as T);
     }
   }

   private log(message: string){
     alert (`ReservaService: ${message}`);
   }
 
}

