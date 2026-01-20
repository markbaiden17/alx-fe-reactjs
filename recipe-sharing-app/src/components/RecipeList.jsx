import { Link } from 'react-router-dom';
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

    const displayRecipes = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            <h2>Recipe List</h2>
            {displayRecipes.length === 0 ? (
                <p>No recipes available.</p>
            ) : (
                displayRecipes.map(recipe => (
                    <div key={recipe.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #eee' }}>
                        <h3>
                            <Link to={`/recipe/${recipe.id}`} style={{ color: '#646cff', textDecoration: 'none' }}>
                                {recipe.title}
                            </Link>
                        </h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;