// src/store/recipeStore.js
import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  // Add a recipe
  addRecipe: (title, content) => {
    const newRecipe = { id: nanoid(), title, content };
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Get recipe by ID
  getRecipeById: (id) => get().recipes.find((r) => r.id === id),

  // Update recipe
  updateRecipe: (id, updatedData) => {
    const updated = get().recipes.map((r) =>
      r.id === id ? { ...r, ...updatedData } : r
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Delete recipe
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Set initial recipes
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  // Search
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filter recipes
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (r) =>
          state.favorites.includes(r.id) &&
          Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
