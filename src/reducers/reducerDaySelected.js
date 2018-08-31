export default (state = null, action) => {
    switch(action.type){
        case 'WEEK_DAY_SELECTED':
        return action.payload;
        default:
        return 0;
    }

    return state;
}