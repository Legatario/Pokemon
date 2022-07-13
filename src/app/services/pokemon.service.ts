import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // recebendo array de pokemons

  public pokemons = new ReplaySubject<Pokemon[]>(1);

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21';



// chamada de Api pokemon
  constructor(private httpCliente: HttpClient) {

    // const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30';

    // this.httpCliente.get<any>(apiUrl).pipe(map(value => value.results)).subscribe(this.pokemons);


   }

  //  mapeando pokemon por nome

   get AllPokemons():Observable<any>{
    return this.httpCliente.get<any>(this.url).pipe(
      tap( res => res),
      tap( res => {
        res.results.map( (resPokemons: any)=>{

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  // recendo todas as informações dos pokemons como id e type

  public apiGetPokemons( url: string):Observable<any>{
      return this.httpCliente.get<any>( url ).pipe(
        map(
          res =>
            res = res
        )
      )
  }

  // chamada flexivel de API, chamada async

  public SearcPokemons(url: string):Observable<any>{
    return this.httpCliente.get<any>(url).pipe(
      tap( res => res),
      tap( res => {
        res.results.map( (resPokemons: any)=>{

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  // função async
  // async callPokemons(url: string){
  //   const call = await this.httpCliente.get<any>(url).toPromise();

  //   return call
  // }



}


