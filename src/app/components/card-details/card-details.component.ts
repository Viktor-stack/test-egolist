import {Component, OnDestroy, OnInit} from '@angular/core';
import {CocktailService} from "../../shared/services/cocktail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cocktail} from "../../shared/dto/Cocktail";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  itemId: number
  cocktail: Cocktail
  c: Cocktail
  error: string
  aSub: Subscription

  constructor(private cocktailService: CocktailService, private router: ActivatedRoute, private routers: Router) {
  }


  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.itemId = params['id']
    })

    this.aSub = this.cocktailService.getItemsById(Number(this.itemId)).subscribe(
      res => {
        Object.entries(res).forEach(key => {
          this.cocktail = key[1]
          console.log(this.cocktail);
        })
      }, () => {
        this.error = 'Что-то пошло не так'
      }
    )
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  back() {
    this.routers.navigate(['/'])
  }
}
