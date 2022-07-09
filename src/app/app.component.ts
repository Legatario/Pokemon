import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  search: string = '';


  constructor(public pokemonService: PokemonService) {

  }


  public getSearch(value: string){
    this.search=value;
    console.log(value);
  }


}
