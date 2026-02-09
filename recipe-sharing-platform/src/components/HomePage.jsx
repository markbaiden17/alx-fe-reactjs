import { useState, useEffect } from 'react';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating data fetch from local JSON
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Recipe Sharing Platform
        </h1>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
        <div 
          key={recipe.id} 
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
        <div className="bg-gray-200 h-48 w-full">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">{recipe.title}</h2>
          <p className="text-gray-600 leading-relaxed">{recipe.summary}</p>
          <button className="mt-4 text-indigo-600 font-bold hover:text-indigo-800">
            View Recipe
          </button>
        </div>
        </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default HomePage;