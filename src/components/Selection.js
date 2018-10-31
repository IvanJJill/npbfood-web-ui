////// System libs
/////////////////////////
import React, { Component } from 'react';

////// UI
/////////////////////////
import { Grid } from 'semantic-ui-react';

////// Components
/////////////////////////
import DayMeals from '../containers/DayMeals';
import DaySelect from '../containers/DaySelect';

/**
 * Class represents a weekly selection Component
 * It contains selectors for a day of the week as well as meals
 * Also displays all dayly meals and dishes
 */
export default class Selection extends Component {
  state = {
    leftLen: 2,
    rightLen: 12
  };
  render() {
    const { leftLen, rightLen } = this.state;
    const { Row, Column } = Grid;
    return (
      <div>
        <Grid>
          <Row>
            <Column width={leftLen}>
              {/* ToDo: place user account controls here */}
            </Column>
            <Column width={rightLen}>
              <DaySelect />
            </Column>
            <Column width={leftLen} />
          </Row>
          {/* Displays All meals per selected day */}
          <DayMeals />
        </Grid>
      </div>
    );
  }
}
