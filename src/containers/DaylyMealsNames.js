////// System libs
/////////////////////////
import React, { Component } from 'react';
import {connect} from 'react-redux';

////// Mock Data
/////////////////////////
import { MealNames } from '../test/meals_data';

////// App components
/////////////////////////
import { Menu, MenuItem } from 'semantic-ui-react';


/**
 * Class represents a 
 */
class DaylyMealsNames extends Component {

    onSelect = () => {
        return;
    }

    renderMeals = (day) => {
        const items = this.props.meals;
        return items[day].map(
                (meal, idx) => <MenuItem
                key={idx + day + MealNames[meal.id]}
                name={MealNames[meal.id]}
            />)
    }

    render() {
        return (
            <Menu pointing secondary vertical>
                {this.renderMeals(this.props.selected)}
            </Menu>
        )
    }
}

/**
 * Maps data from reducers to this.props to update the state of the App
 * @param {*} dispatch 
 */
const mapStateToProps = (state) => {

    return {
        // Data from redux
        meals: state.meals,
        // Actions from redux
        selected: state.selected
    }
}

/**
 * Connecting data to this class
 */
export default connect(mapStateToProps, null)(DaylyMealsNames);