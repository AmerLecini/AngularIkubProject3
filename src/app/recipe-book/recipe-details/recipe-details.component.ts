import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { RecipeListModel } from '../recipe-list.mode';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent{
  @Output() recipeAdded = new EventEmitter<RecipeListModel>(); 
  
  formData : RecipeListModel = { name: '', imageUrl: '', description: '' };

 newRecipe(){
 console.log(this.formData);
 this.recipeAdded.emit(this.formData);
 this.formData = { name: '', imageUrl: '', description: '' };
 
}
}


