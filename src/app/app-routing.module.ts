import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

// criação de Router, rota inicial da site, fazendo que a rotas sejam informada na routing.modules.ts

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./poke-routes/poke-routes.module').then(p => p.PokeRoutesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// forRoot usado apenas na rota principal os de mais deve-se mudar de forRoot para forChild
