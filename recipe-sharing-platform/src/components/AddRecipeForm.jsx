import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    
    // Validation: Check if empty and if there are at least two items
    const ingredientList = ingredients.split('\n').filter(i => i.trim() !== '');
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients list is required.";
    } else if (ingredientList.length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }

    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Logic for submitting the data
      console.log({ title, ingredients: ingredients.split('\n'), steps });
      
      // Clear form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input 
            type="text"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500' : 'border-gray-300 focus:ring-blue-400'}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Classic Margherita Pizza"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients (one per line)</label>
          <textarea 
            rows="4"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500' : 'border-gray-300 focus:ring-blue-400'}`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredient 1&#10;Ingredient 2"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps Textarea */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea 
            rows="4"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.steps ? 'border-red-500' : 'border-gray-300 focus:ring-blue-400'}`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Step 1... Step 2..."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md md:w-auto md:px-10 block mx-auto"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;