import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/dto/Cocktail";
import {CocktailService} from "../../shared/services/cocktail.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-cocktail',
  templateUrl: './card-cocktail.component.html',
  styleUrls: ['./card-cocktail.component.scss']
})
export class CardCocktailComponent implements OnInit {
  @Input('cocktail') cocktail: Cocktail;
  @Input('cocktailRandom') cocktailRandom: Cocktail;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  details() {
    this.router.navigate(['/cocktail-details/' + this.cocktail.idDrink])
  }
}
