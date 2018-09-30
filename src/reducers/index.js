import { combineReducers } from 'redux';
import MealsReducer from './reducerMeals';
import DaySelectedReducer from './reducerDaySelected';
import ReducerMealDropped from './reducerMealDropped';

const rootReducer = combineReducers({
  meals: MealsReducer,
  selected: DaySelectedReducer,
  mealDropped: ReducerMealDropped
});

export default rootReducer;
