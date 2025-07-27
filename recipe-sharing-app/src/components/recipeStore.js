import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (title, content) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { id: nanoid(), title, content }
      ]
    })),
  getRecipeById: (id) =>
    (get().recipes.find((recipe) => recipe.id === id))
}));

export default useRecipeStore;
