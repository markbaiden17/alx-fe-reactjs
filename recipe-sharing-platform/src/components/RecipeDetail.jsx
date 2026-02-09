import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe that matches the ID from the URL
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center p-10">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <button 
        onClick={() => navigate('/')}
        className="mb-4 text-blue-500 hover:underline flex items-center"
      >
        ← Back to Home
      </button>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-10">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-6" 
        />
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 text-lg mb-8 italic">{recipe.summary}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Ingredients Section */}
          <section className="bg-blue-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fresh ingredients based on {recipe.title}</li>
              <li>Salt and pepper to taste</li>
              <li>2 tablespoons of olive oil</li>
            </ul>
          </section>

          {/* Instructions Section */}
          <section className="bg-white p-6 border-l-4 border-blue-500 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Prepare your workspace and wash all vegetables.</li>
              <li>Follow the traditional steps for {recipe.title}.</li>
              <li>Serve hot and enjoy!</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;