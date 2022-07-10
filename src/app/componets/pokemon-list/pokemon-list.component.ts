import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {

  private setAllPokemons: any;
  public getAllPokemons: any;

  private urlName: string = 'https://pokeapi.co/api/v2/pokemon/';
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'



  constructor(public pokemonService: PokemonService){

  }

  ngOnInit(): void{
    this.pokemonService.AllPokemons.subscribe(
      res => {
          this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons;
          console.log(this.setAllPokemons);
        }
      );


    }

    // recebe string de search e faz um retorno dos pokemons

    public getSearch(value: any){
      const filter = this.setAllPokemons.filter((res: any)=>{
        console.log(value);

        if (isNaN(value)) {
          return !res.name.indexOf(value.toLocaleLowerCase());
        }
        return !res.url.indexOf(this.urlName+value.toLocaleLowerCase());
      })

      this.getAllPokemons = filter;
      console.log(this.urlName+value);
      console.log(filter);
    }


  }



  // return !res.name.indexOf(value.toLocaleLowerCase());
