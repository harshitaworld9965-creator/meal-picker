import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import SearchBar from './components/SearchBar'
import MealList from './components/MealList'
import './App.css'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const url = searchTerm ? `${BASE_URL}${searchTerm}` : null
  const { data, loading, error } = useFetch(url)

  const meals = data?.meals

  return (
    <div className="app">
      <header className="header">
        <h1>🍳 Meal Picker</h1>
        <p className="app-intro">Find something delicious to cook.</p>
      </header>

      <SearchBar onSearch={setSearchTerm} />

      {loading && <p className="status">Loading…</p>}
      {error && <p className="status">Something went wrong: {error}</p>}
      {meals === null && <p className="status">No meals found. Try another search.</p>}
      {meals && <MealList meals={meals} />}
    </div>
  )
}

export default App