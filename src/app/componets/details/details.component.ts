import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
  private id = this.activatedRoute.snapshot.params['id'];

  public pokemon: any;
  public isLoading: boolean = false;
  public l:number = 0;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.detailsPokemon();
  }


  public detailsPokemon(){
    const pokemon = this.pokemonService.apiGetPokemons(`${this.urlPokemon}${this.id}`);

    forkJoin([pokemon]).subscribe(
      res =>{
        this.pokemon = res;
        this.isLoading = true;
        console.log(this.pokemon);

      }
    )

  }

  cathPokemon(){

    const numberPokemon = this.leadingZero(this.id);

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
