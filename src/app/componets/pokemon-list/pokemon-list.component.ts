import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { forkJoin } from 'rxjs';




@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {

  // chamadas de API
  public setAllPokemons: any;
  public getAllPokemons: any;
  public localAllPokemons?: any;
  public whoPokemon: any;

  // URLS
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon/';
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

  // variaveis
  private offset = 20
  public isLoading: boolean = false;
  public show: boolean = true;




  constructor(public pokemonService: PokemonService){

  }

  // ao inicializar puxa função do service de mapeamento de pokemon e retorna esta informação para a pokemon-list

  ngOnInit(): void{

    this.pokemonService.AllPokemons.subscribe(
      res => {
          this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons;
          this.LocalStorie();
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
        this.show = true;
      }

      else{
        this.getAllPokemons = filter;
        console.log(filter); // imprimir retorno de input no console
        this.show = false
      }


    }

    // função para fazer a procura com todos os 151 pokemons

    public detailsPokemon(){

      const pokemon = this.pokemonService.SearcPokemons(`${this.urlPokemon}`);

      forkJoin([pokemon]).subscribe(
        res => {
          this.whoPokemon = res[0].results;

        }
      )

    }
    // Salvando dados no localStorage

    public LocalStorie(){

      const setResults = JSON.stringify(this.getAllPokemons);

      localStorage.setItem('name', 'Luis');
      localStorage.setItem('email', 'l.phillipe.d@gmail.com');
      localStorage.setItem('results', setResults);
      let name = localStorage.getItem('name');
      console.log(`Hello, ${ name }!`);

      this.localAllPokemons = localStorage.getItem('results');
      this.localAllPokemons = (JSON.parse(this.localAllPokemons));




    }

    // adiciona + 20 pokemons na listagem, ele faz uma nova requisição a api
    public setOff(){

        if(this.offset < 140){

          this.offset= this.offset+20;
          console.log(this.offset);
        }
        else{
          this.offset = 151; //limite de 151 pokemons
        }

        // nova requisção

        const urlmore: string = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${this.offset}`;

        const pokemon = this.pokemonService.SearcPokemons(`${urlmore}`);

        forkJoin([pokemon]).subscribe(
          res => {
            this.getAllPokemons = res[0].results;

          }
        )
    }


  }




