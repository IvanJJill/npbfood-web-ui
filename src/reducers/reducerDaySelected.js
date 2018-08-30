export default (state = null, action) => {
    switch(action.type){
        case 'WEEK_DAY_SELECTED':
        return action.payload;
    }

    return state;
}