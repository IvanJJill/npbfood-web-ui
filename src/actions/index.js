const weekDaySelect = dayNubmer => {
  return {
    type: 'WEEK_DAY_SELECTED',
    payload: dayNubmer
  };
};

export const mealDroped = id => {
  return {
    type: 'MEAL_WAS_DROPPED',
    payload: id
  };
};

export default weekDaySelect;
