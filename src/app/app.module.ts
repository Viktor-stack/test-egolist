import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './shared/layouts/main/main.component';
import {FormSearchComponent} from './components/form-search/form-search.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CardCocktailComponent} from './components/card-cocktail/card-cocktail.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormSearchComponent,
    HeaderComponent,
    CardCocktailComponent,
    CardDetailsComponent,
    CocktailListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
