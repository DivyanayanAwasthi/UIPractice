import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }
  configUrl = 'assets/recipe.json';

getConfig() {
  return this.http.get('assets/recipe.json');
}

}