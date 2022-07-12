import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { forkJoin } from 'rxjs';




@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {

  public setAllPokemons: any;
  public getAllPokemons: any;

  public whoPokemon: any;

  private urlName: string = 'https://pokeapi.co/api/v2/pokemon/';

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';



  constructor(public pokemonService: PokemonService){

  }

  // ao inicializar puxa função do service de mapeamento de pokemon e retorna esta informação para a pokemon-list

  ngOnInit(): void{
    this.pokemonService.AllPokemons.subscribe(
      res => {
          this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons ;
          console.log(this.setAllPokemons);
        }
        );
        this.detailsPokemon();
    }

    // recebe string de search e faz um retorno dos pokemons


    public getSearch(value: any){

      const filter = this.whoPokemon .filter((res: any)=>{
        console.log(value);

        if (isNaN(value)) {
          return !res.name.indexOf(value.toLocaleLowerCase()); // usano o name (toLocaleLowerCase()) deixa tudo em minusculo
        }
        return !res.url.indexOf(this.urlName+value); //usando o url pra retonar a chamada pelo numero
      })

      if(value===''){
        this.getAllPokemons = this.setAllPokemons;
      }

      else{
        this.getAllPokemons = filter;
        console.log(filter); // imprimir retorno de input no console

      }


    }


    public detailsPokemon(){

      const pokemon = this.pokemonService.SearcPokemons(`${this.urlPokemon}`);


      forkJoin([pokemon]).subscribe(
        res => {
          this.whoPokemon = res[0].results;
          console.log(this.whoPokemon);


        }
      )

    }

  }




