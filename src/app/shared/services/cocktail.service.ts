import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cocktail} from "../dto/Cocktail";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private baseUrlSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
  private baseUrlLookup = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
  private baseUrlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  constructor(private http: HttpClient) {
  }


  public getSearchByName(name: string): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.baseUrlSearch + `?s=${name}`)
  }

  public getItemsById(id: number): Observable<Cocktail> {
    return this.http.get<Cocktail>(this.baseUrlLookup + id)
  }

  public getRandomItems(): Observable<Cocktail> {
    return this.http.get<Cocktail>(this.baseUrlRandom)
  }
}
