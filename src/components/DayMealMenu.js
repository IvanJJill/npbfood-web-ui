import React, { Component } from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import { MealNames } from '../test/meals_data';

import {connect} from 'react-redux';

class DayMealMenu extends Component {

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


const mapStateToProps = (state) => {

    return {
        // Data from redux
        meals: state.meals,
        // Actions from redux
        selected: state.selected
    }
}

export default connect(mapStateToProps, null)(DayMealMenu);