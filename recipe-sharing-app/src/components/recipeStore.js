// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Pancakes', description: 'Fluffy and delicious' },
    { id: 2, title: 'Spaghetti', description: 'With tomato sauce' },
    { id: 3, title: 'Salad', description: 'Fresh and healthy' },
  ],

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
