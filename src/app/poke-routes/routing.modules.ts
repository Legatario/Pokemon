import { DetailsComponent } from './../componets/details/details.component';
import { PokemonListComponent } from './../componets/pokemon-list/pokemon-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// infromando as rotas

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },

  // details recebe como parametro o ID
  {
    path: 'details/:id',
    component: DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
