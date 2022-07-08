import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, ReplaySubject } from 'rxjs';
import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // recebendo array de pokemons

  public pokemons = new ReplaySubject<Pokemon[]>(1);

// chamada de Api pokemon
  constructor(private httpCliente: HttpClient) {

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    this.httpCliente.get<any>(apiUrl).pipe(map(value => value.results)).subscribe(this.pokemons);

   }


}
