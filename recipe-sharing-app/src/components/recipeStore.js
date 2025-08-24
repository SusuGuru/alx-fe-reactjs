import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // Add a recipe
  addRecipe: (title, description) => {
    const newRecipe = { id: nanoid(), title, description };
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
  },

  // Update recipe
  updateRecipe: (id, updatedData) => {
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
    }));
  },

  // Delete recipe
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    }));
  },

  // Get recipe by ID
  getRecipeById: (id) => get().recipes.find((r) => r.id === id),
}));

export default useRecipeStore;
