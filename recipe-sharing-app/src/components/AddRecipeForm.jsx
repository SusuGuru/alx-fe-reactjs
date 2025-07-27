// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from '../store';

function AddRecipeForm() {
  const [recipe, setRecipe] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.trim()) {
      addRecipe(recipe.trim());
      setRecipe('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Enter a recipe"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
