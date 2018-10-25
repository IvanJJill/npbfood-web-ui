import actions from '../actions/actionTypes';
import { getMealNameAndId } from '../utils';

export default (state = 0, action) => {
  switch (action.type) {
    case actions.MEAL_WAS_DROPPED:
      const payload = reducerMealDropped(state, action.payload);
      return payload;
    default:
      return state;
  }
};

const reducerMealDropped = (state, data) => {
  // this is a zahlushka
  return state;

  const { destination, source, draggableId } = data;

  const { selected, meals } = state;
  if (!destination) {
    return;
  }
  if (
    source.droppableId === destination.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  // from meal (e.g. breakfast)
  const [fromMealName, fromMealIdx] = getMealNameAndId(source.droppableId);
  const [toMealName, toMealIdx] = getMealNameAndId(destination.droppableId);

  console.log(`Moving item from ${fromMealName} to ${toMealName}`);

  const fromMeal = new Array.from(meals[selected][fromMealIdx]); // e.g. breakfast
  const toMeal = new Array.from(meals[selected][toMealIdx]);

  // ToDo: issue #6 - this will be avoided if copied, but new ID should be created
  fromMeal.splice(source.index, 1); // remove dragged item
  toMeal.splice(destination.index, 0, draggableId);
};
