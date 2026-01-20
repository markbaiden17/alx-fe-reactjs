import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(recipeId))
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found!</p>
        <Link to="/">Back to List</Link>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <Link to="/" style={{ fontSize: '0.9rem' }}>← Back to Home</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
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