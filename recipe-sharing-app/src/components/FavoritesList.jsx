import useRecipeStore from './recipeStore'; 

const FavoriteList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites);
  const allRecipes = useRecipeStore(state => state.recipes);

  const favoriteRecipes = favoritesIds.map(id =>
    allRecipes.find(recipe => recipe.id === id)
  ).filter(recipe => recipe !== undefined);

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', margin: '10px 0' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriteList;