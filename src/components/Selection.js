////// System libs
/////////////////////////
import React, { Component } from 'react';

////// UI
/////////////////////////
import { Grid } from 'semantic-ui-react';

////// Components
/////////////////////////
import DaylyMealsNames from '../containers/DaylyMealsNames';
import WeekDaysMenu from '../containers/WeekDaysMenu';
import Dish from '../containers/Dish';


/**
 * Class represents a weekly selection Component
 * It contains selectors for a day of the week as well as meals
 * Also displays all dayly meals and dishes
 */
export default class Selection extends Component {
    state = {
        leftLen: 4,
        rightLen: 12
    }
    render() {
        const { leftLen, rightLen } = this.state;
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={leftLen}>
                            {/* ToDo: place user account controls here */}
                        </Grid.Column>
                        <Grid.Column width={rightLen}>
                            <WeekDaysMenu/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={leftLen}>
                            <DaylyMealsNames />
                        </Grid.Column>
                        <Grid.Column width={rightLen}>
                            <Dish />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
