import React, { Component } from 'react';
import { Label, Segment } from 'semantic-ui-react';

/**
 * Class represent a single Dish display on a main selection screen
 */
export default class Dish extends Component {
    state = {
        dishes: null // dish to render
    }

    componentWillMount = () => {
        const dishes = this.props.meal;
        this.setState({ dishes });
    }

    renderDish = () => {
        const dishes = this.state.dishes.dishes;
        return (dishes.map((dish, idx) => {
            return (
                <Label as='a' color='blue' image key={idx + dish.name}>
                    <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                    {dish.name}
                    <Label.Detail>{dish.amount}</Label.Detail>
                </Label>);
        })
        )
    }

    render() {
        return (
            <Segment>
                {this.renderDish()}
            </Segment>
        )
    }
}