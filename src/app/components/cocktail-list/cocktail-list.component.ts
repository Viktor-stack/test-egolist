import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/dto/Cocktail";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail;
  private isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  getCocktails(cocktails: Cocktail[]) {
    this.isLoading = true
    Object.entries(cocktails).forEach(key => {
      this.cocktails = key[1];
    })
  }

  getRandomCocktail(cocktail: Cocktail) {
    Object.entries(cocktail).forEach(key => {
      this.cocktails = key[1];
    })
  }
}
