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

    favorites: [],
    addFavorite: (recipeId) => set(state => ({ 
        favorites: [...state.favorites, recipeId] 
    })),
    removeFavorite: (recipeId) => set(state => ({ 
        favorites: state.favorites.filter(id => id !== recipeId) 
    })),

    recommendations: [],
    generateRecommendations: () => set(state => {
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),

    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),

    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id),
    })),

    updateRecipe: (id, updateRecipe) => set(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === id ? { ...recipe, ...updateRecipe } : recipe
        ),
    })),
}));

export default useRecipeStore;