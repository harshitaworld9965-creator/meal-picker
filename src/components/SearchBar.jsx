import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!query.trim()) return
    onSearch(query.trim())
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a meal… (try 'chicken')"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  )
}

export default SearchBar