import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RecipeListModel } from '../recipe-list.mode';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes : RecipeListModel[]=[]
  }