// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./pages/Home";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import EditRecipeForm from "./components/EditRecipeForm"; // ✅ Must exist
import useRecipeStore from "./store/recipeStore"; // ✅ Correct import

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const mockRecipes = [
      { id: 1, title: "Jollof Rice", description: "Spicy and tasty" },
      { id: 2, title: "Banku & Tilapia", description: "Ghanaian classic" },
      { id: 3, title: "Pancakes", description: "Quick and easy" },
    ];
    setRecipes(mockRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>🍲 Recipe Sharing App</h1>

        {/* ✅ Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/add" style={{ marginRight: "10px" }}>
            Add Recipe
          </Link>
        </nav>

        {/* ✅ Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} /> {/* ✅ Added */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
