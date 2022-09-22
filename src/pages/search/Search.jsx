import { useSearchParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

// styles
import "./Search.css"

// components
import RecipeList from '../../components/recipelist/RecipeList'

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams('')
  const query = searchParams.get('q')

  const url = `http://localhost:3000/recipes?q=${query}`
  const {error, isPending, data} = useFetch(url)

  return (
    <div className="search-page">
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>)
      }
      {  
        data && <RecipeList recipes={data} />
      }
    </div>
  )
}
