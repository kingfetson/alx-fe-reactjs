// src/store/recipeStore.jsx
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Pancakes', description: 'Fluffy and delicious' },
    { id: 2, title: 'Spaghetti', description: 'With tomato sauce' },
    // Add initial recipes here or start with an empty array
  ],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
