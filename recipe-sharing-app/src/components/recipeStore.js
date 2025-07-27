// src/recipeStore.js
import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useRecipeStore = create((set, get) => ({
  recipes: [],                // All recipes
  searchTerm: '',             // For filtering
  filteredRecipes: [],        // Filtered results based on search

  // Add a recipe
  addRecipe: (title, content) => {
    const newRecipe = { id: nanoid(), title, content };
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Get a recipe by ID
  getRecipeById: (id) => get().recipes.find((r) => r.id === id),

  // Update a recipe
  updateRecipe: (id, updatedData) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedData } : recipe
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Delete a recipe
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Search
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filter logic
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Set initial recipe list (optional)
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },
}));

export default useRecipeStore;
