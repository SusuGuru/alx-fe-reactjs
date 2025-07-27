import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Replace all recipes (used to reset or load recipes)
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export default useRecipeStore;
