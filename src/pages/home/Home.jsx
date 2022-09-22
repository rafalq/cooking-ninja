import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

// components
import RecipeList from "@/components/recipelist/RecipeList"

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>)
      }
      {data && <RecipeList recipes={data} />}
    </div>
  )
}