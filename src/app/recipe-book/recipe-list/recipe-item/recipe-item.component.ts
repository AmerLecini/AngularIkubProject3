import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { RecipeListModel } from '../../recipe-list.mode';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent  {
 @Input() recipeData !: RecipeListModel;
}
  // ngOnInit(): void {
    // console.log('Oninit Executed');
    
  // }

  // ngDoCheck(): void {
    // console.log('Docheck Executed');
  // }

  // ngAfterViewChecked(): void {
    // console.log("View Checked Executed");
    
  // }

  // ngAfterViewInit(): void {
    // console.log("View Init Executed");
    
  // }

  // ngOnDestroy(): void {
    // console.log("On destroy executed");
    // }
