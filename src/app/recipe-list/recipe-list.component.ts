import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';




@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  selectedRecipe: Recipe;
  public recipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getConfig().subscribe(data => {
      this.recipes = data;
    });
  }

  onSelect(recipe: Recipe): void {
   this.selectedRecipe = recipe;
   }
}
