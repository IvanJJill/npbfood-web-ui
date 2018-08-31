import React, { Component } from 'react';

////// UI
/////////////////////////
import { Grid } from 'semantic-ui-react';

////// Components
/////////////////////////
import DayMealMenu from '../components/DayMealMenu';
import WeekDaysMenu from '../components/WeekDaysMenu';
import Dish from '../components/Dish';

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

                        </Grid.Column>
                        <Grid.Column width={rightLen}>
                            <WeekDaysMenu/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={leftLen}>
                            <DayMealMenu />
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
