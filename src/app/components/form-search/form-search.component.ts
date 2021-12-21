import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgModel, Validators} from "@angular/forms";
import {CocktailService} from "../../shared/services/cocktail.service";
import {Cocktail} from "../../shared/dto/Cocktail";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit, OnDestroy {
  form: FormGroup;
  aSub: Subscription
  cocktails: Cocktail
  error: string;
  @Output('cocktails') cocktailsArr = new EventEmitter<Cocktail[]>()
  @Output('cocktail') cocktailArr = new EventEmitter<Cocktail>()

  constructor(private formBuilder: FormBuilder, private cocktailService: CocktailService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]]
    })
  }

  formSubmit() {
    this.error = ''
    if (this.form.invalid) {
      return;
    }
    this.aSub = this.cocktailService.getSearchByName(this.form.value.name).subscribe(
      (res: Cocktail[]) => {
        this.cocktailsArr.emit(res)
        Object.entries(res).forEach(key => {
          this.form.reset()
          if (key[1] === null) {
            this.error = 'Ничего не найдено'
          }
        })
      }
    )
  }

  getRandomCocktail() {
    this.aSub = this.cocktailService.getRandomItems().subscribe(
      (res: Cocktail) => {
        this.cocktailArr.emit(res)
      }
    )
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }


}
