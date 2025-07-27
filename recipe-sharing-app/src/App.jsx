// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './pages/RecipeDetail';
import { useRecipeStore } from './store/recipeStore'; // ✅ adjust if your store path is different

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    // Simulated fetch of recipes
    const mockRecipes = [
      { id: 1, title: 'Jollof Rice', description: 'Spicy and tasty' },
      { id: 2, title: 'Banku & Tilapia', description: 'Ghanaian classic' },
      { id: 3, title: 'Pancakes', description: 'Quick and easy' }
    ];
    setRecipes(mockRecipes);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/add">Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
};

export default App;
