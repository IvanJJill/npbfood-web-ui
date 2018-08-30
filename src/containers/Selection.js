import React, { Component } from 'react';

////// Reducers
/////////////////////////
import {connect} from 'react-redux';

////// UI
/////////////////////////
import { Grid } from 'semantic-ui-react';

////// Components
/////////////////////////
import DayMealMenu from '../components/DayMealMenu';
import WeekDaysMenu from '../components/WeekDaysMenu';
import Dish from '../components/Dish';

class Selection extends Component {
    state = {
        leftLen: 4,
        rightLen: 12
    }
    render() {
        const {leftLen, rightLen} = this.state;
        const { meals, selected} = this.props.meals;
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={leftLen}>

                        </Grid.Column>
                        <Grid.Column width={rightLen}>
                            <WeekDaysMenu selected={selected}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={leftLen}>
                            <DayMealMenu meals={meals}/>
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

const mapStateToProps = (state) => {
    return{
        meals: state.meals,
        selected: state.selected
    }
}

export default connect(mapStateToProps)(Selection);