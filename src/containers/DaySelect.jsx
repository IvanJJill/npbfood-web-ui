import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import WeekDay from '../settings/WeekConst';
import { weekDaySelect } from '../actions/index';

/**
 * Class represents a component that contains a whole week of meal-planning
 * it contains a framework for displaying contents of each day's content and actions
 */
class DaySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };

    this.renderTopBar = this.renderTopBar.bind(this);
    this.renderSelector = this.renderSelector.bind(this);
  }

  /*
    renders a general selection bar that contains all days
     */
  renderTopBar() {
    const days = WeekDay.fullName;
    return days.map((_, index) => this.renderSelector(index));
  }

  /*
    renders a single day selection element
     */
  renderSelector(dayNumber) {
    const days = WeekDay.fullName;
    const { selected } = this.state;
    // const { weekDaySelect } = this.props;
    return (
      <Menu.Item
        key={days[dayNumber] + dayNumber}
        name={days[dayNumber]}
        active={selected === dayNumber}
        onClick={() => {
          weekDaySelect(dayNumber);
          this.setState({ selected: dayNumber });
        }}
      />
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary position="">
          {this.renderTopBar()}
        </Menu>
      </div>
    );
  }
}

/**
 * Connecting actions to this class
 */
export default connect(
  null,
  { weekDaySelect },
)(DaySelect);
