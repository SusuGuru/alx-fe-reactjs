import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addRecipe(title, content);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Instructions"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
