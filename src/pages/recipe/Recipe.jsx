import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "@/hooks/useFetch"

// styles
import "./Recipe.css"

export default function Recipe() {
  const { id } = useParams()
  const { data: recipe, isPending, error } = useFetch("http://localhost:3000/recipes/" + id)
  const navigate = useNavigate()

  useEffect(() => {
    if(error) {
      setTimeout(() => {
        navigate(-1)
      }, 2000)
    }
  }, [error])

  return (
    <>
      {error && <p className="error">{error}</p>}
      {isPending && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>)
      }
      {  
        recipe && (
          <div className="recipe">
            <h2 className="page-title">{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
              {recipe.ingredients.map(ing => <li key={ing}>{ ing }</li>)}
            </ul>
            <p className="method">{recipe.method}</p>
          </div>
        )
      }
    </>
  )
}
