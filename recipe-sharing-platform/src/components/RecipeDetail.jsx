import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Recipe not found...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
