import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DayMealMenu from './DayMealMenu';
import WeekDaysMenu from './WeekDaysMenu';
import Dish from './Dish';
import meals from '../test/meals_data';

export default class Selection extends Component {
    state = {
        leftLen: 4,
        rightLen: 12
    }
    render() {
        const {leftLen, rightLen} = this.state;
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={leftLen}>

                        </Grid.Column>
                        <Grid.Column width={rightLen}>
                            <WeekDaysMenu/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={leftLen}>
                            <DayMealMenu/>
                        </Grid.Column>
                        <Grid.Column width={rightLen}>
                                <Dish meal={meals[0][0]}/>
                                <Dish meal={meals[0][1]} />
                                <Dish meal={meals[0][2]} />
                                <Dish meal={meals[0][3]} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}