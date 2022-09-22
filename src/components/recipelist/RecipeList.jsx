import { Link } from "react-router-dom";

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {

if(recipes.length === 0) {
  return <h3>No recipes found...</h3>
}

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card-container">
          <div className="card">
            <h3>{recipe.title}</h3>
            <div className="cooking-time-wrapper">
              <img src="/clock.svg" width="20" />
              <p>{recipe.cookingTime}</p>
            </div>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`} className="recipe-button">
              <img src="/toque.svg" width="15" />
              <span>COOK THIS</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
