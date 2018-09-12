export default (state = 0, action) => {
  switch (action.type) {
    case 'WEEK_DAY_SELECTED':
      return action.payload;
    default:
      return state;
  }
};
