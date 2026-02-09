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
              {/* Mapping through ingredients */}
              {recipe.ingredients ? (
                recipe.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))
              ) : (
                <li>Ingredients for {recipe.title} coming soon!</li>
              )}
            </ul>
          </section>

          <section className="bg-white p-6 border-l-4 border-blue-500 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
            <div className="text-gray-700 leading-relaxed">
                {/* Display instructions or a placeholder if not available */}
              <p>{recipe.instructions || "Follow the standard preparation steps."}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;