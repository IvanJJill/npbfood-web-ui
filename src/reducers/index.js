import { combineReducers } from 'redux';
import  MealsReducer from './reducerMeals';
import DaySelectedReducer from './reducerDaySelected';

const rootReducer = combineReducers({
    meals: MealsReducer,
    selected: DaySelectedReducer,
});

export default rootReducer;