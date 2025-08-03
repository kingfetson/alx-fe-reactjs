// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h3>All Recipes</h3>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);
        return (
          <div key={recipe.id}>
            <strong>{recipe.title}</strong>: {recipe.description}
            <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
