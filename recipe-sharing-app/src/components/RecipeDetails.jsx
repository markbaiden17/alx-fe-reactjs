import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(recipeId))
  );

  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found!</p>
        <Link to="/">Back to List</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    }
    else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <Link to="/" style={{ fontSize: '0.9rem' }}>← Back to Home</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={toggleFavorite}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
      
      <hr />

      <h3>Actions</h3>
      <EditRecipeForm recipe={recipe} />
      <div style={{ marginTop: '10px' }}>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;