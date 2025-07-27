// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
