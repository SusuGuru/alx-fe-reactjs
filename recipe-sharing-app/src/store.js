import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  removeRecipe: (title) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.title !== title),
    })),
}));

export default useRecipeStore;
