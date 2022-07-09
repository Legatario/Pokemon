import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  @Input() search: string= '';


  public getAllPokemons: any;


  constructor(public pokemonService: PokemonService){

  }

  ngOnInit(): void{
    this.pokemonService.AllPokemons.subscribe(
      res => {
          this.getAllPokemons = res.results;
        }
      );

    }

    public getSearch(){
      const filter = this.getAllPokemons.filter ((res:any)=>{
        return !res.name.indexOf(this.search.toString);
      })
      this.getAllPokemons = filter;
    }


  }



