// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // Initial recipes
  recipes: [
    { id: 1, title: 'Pancakes', description: 'Fluffy and delicious' },
    { id: 2, title: 'Spaghetti', description: 'With tomato sauce' },
  ],

  // ✅ Added for search functionality
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Existing actions
  setRecipes: (recipes) => set({ recipes }),

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
