import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    // Add a new recipe
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),

    // Delete a recipe by id
    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id),
    })),

    // Update a recipe by id
    updateRecipe: (id, updateRecipe) => set(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === id ? { ...recipe, ...updateRecipe } : recipe
        ),
    })),
}));

export default useRecipeStore;