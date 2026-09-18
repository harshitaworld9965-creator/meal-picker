import MealCard from './MealCard'

function MealList({ meals }) {
  return (
    <div className="meal-grid">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  )
}

export default MealList