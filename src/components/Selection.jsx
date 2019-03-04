import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';

import DayMeals from '../containers/DayMeals';
import DaySelect from '../containers/DaySelect';

/**
 * Class represents a weekly selection Component
 * It contains selectors for a day of the week as well as meals
 * Also displays all dayly meals and dishes
 */
class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftLen: 2,
      rightLen: 12
    };
  }
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

export default Selection;
