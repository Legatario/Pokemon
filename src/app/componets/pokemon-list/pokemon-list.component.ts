import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {


  public getAllPokemons: any;


  constructor(public pokemonService: PokemonService){

  }

  ngOnInit(): void{
    this.pokemonService.AllPokemons.subscribe(
      res => {
          this.getAllPokemons = res.results;
          console.log()
        }
      );

    }

    public getSearch(value: string){
      console.log(value)
    }


  }



