// src/models/meal.js
class Meal {
    constructor(
      id,
      categoryIds,
      name,
      price,
      difficulty,
      imageUrl,
      preparationTime,
      ingredients,
      instructions,
      isVegan,
      isVegetarian,
      isGlutenFree,
      isFavorite
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.name = name;
      this.price = price;
      this.difficulty = difficulty;
      this.imageUrl = imageUrl;
      this.preparationTime = preparationTime;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isGlutenFree = isGlutenFree;
      this.isFavorite = isFavorite;
    }
  }
  
  export default Meal;
  