import { useState } from "react";
import useRecipeStore from "./recipeStore";

// A form for editing an exiting recipe
const EditRecipeForm = ({ recipeId, onclose }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [title, setTitle] = useState(recipe?.title || "");
    const [description, setDescription] = useState(recipe?.description || "");

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe(recipeId, { title, description });
        if (onclose) onclose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Edit Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Edit Description"
            />
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;