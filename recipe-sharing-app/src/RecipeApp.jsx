// src/components/RecipeApp.jsx
import React, { useState } from 'react';
import useRecipeStore from '../store'; // adjust the path if needed

function RecipeApp() {
  const { recipes, addRecipe, removeRecipe } = useRecipeStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title && description) {
      addRecipe(title, description); // ✅ fixed argument structure
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🍲 Recipe Sharing App</h1>

      <input
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Add Recipe</button>

      <ul>
        {recipes.map((r, index) => (
          <li key={index}>
            <strong>{r.title}</strong>: {r.description}
            <button onClick={() => removeRecipe(r.title)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeApp;
