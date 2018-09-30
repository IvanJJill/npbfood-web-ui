import actions from './actionTypes';

export const weekDaySelect = dayNubmer => {
  return {
    type: actions.WEEK_DAY_SELECTED,
    payload: dayNubmer
  };
};

export const mealDropped = (destination, source, draggableId) => {
  return {
    type: actions.MEAL_WAS_DROPPED,
    payload: { destination, source, draggableId }
  };
};
