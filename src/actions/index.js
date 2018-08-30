const weekDaySelect = (dayNubmer) => {
    return {
        type: 'WEEK_DAY_SELECTED',
        payload: dayNubmer,
    }
}

export default weekDaySelect;