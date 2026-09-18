function getIngredients(meal) {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (name && name.trim()) {
      ingredients.push({ name: name.trim(), measure: measure?.trim() || '' })
    }
  }
  return ingredients
}

function MealDetail({ meal, onClose }) {
  const ingredients = getIngredients(meal)

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(event) => event.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Close">×</button>

        <img className="detail-img" src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="detail-content">
          <h2 className="detail-title">{meal.strMeal}</h2>
          <div className="meal-card-tags">
            <span className="tag">{meal.strCategory}</span>
            <span className="tag tag-area">{meal.strArea}</span>
          </div>

          <h3 className="detail-heading">Ingredients</h3>
          <ul className="ingredient-list">
            {ingredients.map((item) => (
              <li key={item.name} className="ingredient-item">
                <span>{item.name}</span>
                <span className="ingredient-measure">{item.measure}</span>
              </li>
            ))}
          </ul>

          <h3 className="detail-heading">Instructions</h3>
          <p className="detail-instructions">{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  )
}

export default MealDetail