import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private recipes: Recipe[] =[
    {
       id: 'r1',
       title: ' vadapov',
       imageUrl: 'https://lorempixel.com/400/200',
       ingredients: ['chilli', 'pov', 'buttar']
    },
    {
     id: 'r2',
     title: ' Dabeli',
     imageUrl: 'https://lorempixel.com/400/201',
     ingredients: ['masala', 'pov', 'buttar']
    },
    {
     id: 'r3',
     title: ' Povbhagi',
     imageUrl: 'https://lorempixel.com/400/202',
     ingredients: ['vegetabel', 'pov', 'buttar']
     }
   ];
   
  constructor() { }
  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}
