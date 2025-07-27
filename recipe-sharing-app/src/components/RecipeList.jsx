// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Needed for routing
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const { filteredRecipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description || recipe.content}</p>
            <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? '★ Unfavorite' : '☆ Favorite'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
