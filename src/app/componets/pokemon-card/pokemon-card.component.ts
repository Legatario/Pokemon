import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input('pokemon')
  pokemon?: Pokemon;


  @Input()
  number: number = 0;

  l: number = 0;

  // chama img pokemon atraves do ID

  cathPokemon(){
    const numberPokemon = this.leadingZero(this.pokemon?.status.id);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberPokemon}.png`;

  }

  // retornar 1 ou dois zero para integrar na imagem assim mostrando o pokemon com o memos numero de seu ID, sem estes 000 ele não puxa a imagem

  leadingZero(str: string | number, size = 3) : string {
    let s = String(str);
    while (s.length < (size || 2)){
      s = '0'+ s;
    }
    return s;
  }



}
