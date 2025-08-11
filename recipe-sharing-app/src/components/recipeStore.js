// src/components/recipeStore.js
import { create } from 'zustand';

<<<<<<< HEAD
export const useRecipeStore = create((set) => ({
  // ✅ Initial recipes list (you can start empty if fetching from API)
=======
export const useRecipeStore = create((set, get) => ({
>>>>>>> 3733d4e708853e2b0c45fb4c1ed0082085dfb5ec
  recipes: [
    { id: 1, title: 'Pancakes', description: 'Fluffy and delicious' },
    { id: 2, title: 'Spaghetti', description: 'With tomato sauce' },
<<<<<<< HEAD
=======
    { id: 3, title: 'Salad', description: 'Fresh and healthy' },
>>>>>>> 3733d4e708853e2b0c45fb4c1ed0082085dfb5ec
  ],
<<<<<<< HEAD

  /**
   * ✅ Set all recipes at once
   * Useful when fetching data from an API
   */
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  /**
   * ✅ Add a new recipe
   */
  addRecipe: (recipe) =>
=======

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ✅ Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ✅ Recommendations
  recommendations: [],
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

  // Existing actions
  setRecipes: (recipes) => set({ recipes }),
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),
  updateRecipe: (updatedRecipe) =>
>>>>>>> 3733d4e708853e2b0c45fb4c1ed0082085dfb5ec
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
