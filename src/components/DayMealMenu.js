import React, { Component } from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import meals, { MealNames } from '../test/meals_data';

export default class DayMealMenu extends Component {
    state = {
        meals: {},
    };

    componentWillMount = () => {
        this.setState({ meals });
    }

    onSelect = () => {
        return;
    }

    renderMeals = (day) => {
        const items = this.state.meals;
        return items[day].map(
                (meal, idx) => <MenuItem
                key={idx + day + MealNames[meal.id]}
                name={MealNames[meal.id]}
            />)
    }

    render() {
        return (
            <Menu pointing secondary vertical>
                {this.renderMeals(0)}
            </Menu>
        )
    }
}