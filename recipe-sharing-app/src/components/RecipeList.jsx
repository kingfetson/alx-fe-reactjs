// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const allRecipes = useRecipeStore((state) => state.recipes);
  const updateFilteredRecipes = useRecipeStore((state) => state.updateFilteredRecipes);

  // Initialize filtered list on component load
  useEffect(() => {
    updateFilteredRecipes();
  }, [allRecipes, updateFilteredRecipes]);

  return (
    <div>
      <h3>Recipe Results</h3>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong>: {recipe.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
