import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  //peticion get heroes
  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>( `${this.baseUrl}/heroes` );
  }

  //peticion get heroe por id
  getHeroeXId( id: string ):Observable<Heroe>{
    return this.http.get<Heroe>( `${this.baseUrl}/heroes/${ id }` );
  }

  //peticion get para sugerencias
  getSugerencias( termino:string) : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }

  //peticion post para agregar superheroes
  agregarHeroe( heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe);
  }

   //peticion put para actualizr superheroes
   actualizarHeroe( heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe);
  }
}
