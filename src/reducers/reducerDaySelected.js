import actions from '../actions/actionTypes';

export default (state = 0, action) => {
  switch (action.type) {
    case actions.WEEK_DAY_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
