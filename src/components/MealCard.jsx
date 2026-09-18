function MealCard({ meal, onSelect }) {
  return (
    <article className="meal-card" onClick={() => onSelect(meal)}>
      <img className="meal-card-img" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-card-body">
        <h3 className="meal-card-title">{meal.strMeal}</h3>
        <div className="meal-card-tags">
          <span className="tag">{meal.strCategory}</span>
          <span className="tag tag-area">{meal.strArea}</span>
        </div>
      </div>
    </article>
  )
}

export default MealCard