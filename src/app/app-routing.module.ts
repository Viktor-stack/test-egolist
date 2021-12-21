import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./shared/layouts/main/main.component";
import {CardCocktailComponent} from "./components/card-cocktail/card-cocktail.component";
import {CardDetailsComponent} from "./components/card-details/card-details.component";
import {CocktailListComponent} from "./components/cocktail-list/cocktail-list.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: CocktailListComponent},
      {path: 'cocktail-details/:id', component: CardDetailsComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
