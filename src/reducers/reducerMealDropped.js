import actions from '../actions/actionTypes';
import { getMealNameAndId } from '../utils';

const reducerMealDropped = (data, state) => {
  const { destination, source, draggableId } = data;

  const { selected, meals } = state;
  if (!destination) {
    return;
  }
  if (
    source.droppableId === destination.droppableId
    && destination.index === source.index
  ) {
    return;
  }

  // from meal (e.g. breakfast)
  const [fromMealName, fromMealIdx] = getMealNameAndId(source.droppableId);
  const [toMealName, toMealIdx] = getMealNameAndId(destination.droppableId);

  console.log(`Moving item from ${fromMealName} to ${toMealName}`);

  const fromMeal = Array.from(meals[selected][fromMealIdx]); // e.g. breakfast
  const toMeal = Array.from(meals[selected][toMealIdx]);

  // ToDo: issue #6 - this will be avoided if copied, but new ID should be created
  fromMeal.splice(source.index, 1); // remove dragged item
  toMeal.splice(destination.index, 0, draggableId);
};

export default (state = 0, action) => {
  let payload;
  switch (action.type) {
    case actions.MEAL_WAS_DROPPED:
      payload = reducerMealDropped(action.payload, state);
      return payload;
    default:
      return state;
  }
};
