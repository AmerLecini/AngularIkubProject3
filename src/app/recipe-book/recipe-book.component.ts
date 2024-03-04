import { Component } from '@angular/core';
import { RecipeListModel } from './recipe-list.mode';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
  recipes: RecipeListModel[] = []

  onAddNewRecipe(recipe: RecipeListModel){
   this.recipes.push(recipe)
  }
}