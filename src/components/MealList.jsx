import MealCard from './MealCard'

function MealList({ meals, onSelect }) {
  return (
    <div className="meal-grid">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default MealList