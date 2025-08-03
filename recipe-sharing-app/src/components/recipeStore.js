// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Pancakes', description: 'Fluffy and delicious' },
    { id: 2, title: 'Spaghetti', description: 'With tomato sauce' },
    { id: 3, title: 'Salad', description: 'Fresh and healthy' },
  ],

  // ✅ Search state
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ✅ Filtered recipes (derived state)
  filteredRecipes: [],

  // ✅ Update filtered recipes dynamically
  updateFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  setRecipes: (recipes) => set({ recipes }),
  addRecipe: (recipe) =>
    set((state) => ({
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
