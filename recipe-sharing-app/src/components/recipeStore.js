import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
    })),

    // Add a new recipe
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),

    // Delete a recipe
    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id),
    })),

    // Update a recipe
    updateRecipe: (id, updateRecipe) => set(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === id ? { ...recipe, ...updateRecipe } : recipe
        ),
    })),
}));

export default useRecipeStore;