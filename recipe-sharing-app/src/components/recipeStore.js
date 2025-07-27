import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // ✅ Add a new recipe
  addRecipe: (title, content) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: nanoid(), title, content }
      ]
    })),

  // ✅ Get a recipe by ID
  getRecipeById: (id) =>
    get().recipes.find((recipe) => recipe.id === id),

  // ✅ Update a recipe
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),

  // ✅ Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    }))
}));

export default useRecipeStore;
