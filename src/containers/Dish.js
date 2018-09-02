import React, { Component } from 'react';
import { Label, Segment, Grid } from 'semantic-ui-react';

import { connect } from 'react-redux';
/**
 * Class represent a single Dish display on a main selection screen
 */
class Dish extends Component {

    renderDayMeal = () => {
        const { meals, selected } = this.props;
        return (
            meals[selected].map((dishes, idx) => {
                return (
                    <Segment key={'' + selected + dishes.id + idx}>
                        {this.renderDishes(dishes.dishes, idx)}
                    </Segment>
                );
            })
        );
    }

    renderDishes = (dishes, id) => {
        return (dishes.map((dish, idx) => {
            return (
                <Label as='a' color='blue' image key={ id + idx + dish.name}>
                    <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                    {dish.name}
                    <Label.Detail>{dish.amount}</Label.Detail>
                </Label>);
        })
        )
    }

    render() {
        return (
            <Grid.Column>
                {this.renderDayMeal()}
            </Grid.Column>
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

export default connect(mapStateToProps, null)(Dish);