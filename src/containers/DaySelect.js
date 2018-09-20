import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import WeekDay from '../settings/WeekConst.js';

////// Actions
/////////////////////////
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import weekDaySelect from '../actions/index.js';

/**
 * Class represents a component that contains a whole week of meal-planning
 * it contains a framework for displaying contents of each day's content and actions
 */
class DaySelect extends Component {
  state = {
    selected: 0
  };

  /*
    renders a general selection bar that contains all days
     */
  renderTopBar = () => {
    const days = WeekDay.fullName;
    return days.map((_, index) => this.renderSelector(index));
  };

  /*
    renders a single day selection element
     */
  renderSelector = dayNumber => {
    const days = WeekDay.fullName;
    const { selected } = this.state;
    return (
      <Menu.Item
        key={days[dayNumber] + dayNumber}
        name={days[dayNumber]}
        active={selected === dayNumber}
        onClick={() => {
          this.props.weekDaySelect(dayNumber);
          this.setState({ selected: dayNumber });
        }}
      />
    );
  };

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
  { weekDaySelect }
)(DaySelect);
