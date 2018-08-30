import meals from '../test/meals_data'

export default (day, mealNum) => {
    return meals[day][mealNum];
}