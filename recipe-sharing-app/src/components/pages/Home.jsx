// src/pages/Home.jsx
import React from 'react';
import RecipeList from '../components/RecipeList';

const Home = () => {
  return (
    <div>
      <h1>All Recipes</h1>
      <RecipeList />
    </div>
  );
};

export default Home;
