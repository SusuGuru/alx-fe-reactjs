// src/pages/RecipeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      {/* You can add Delete button here later */}
    </div>
  );
};

export default RecipeDetail;
