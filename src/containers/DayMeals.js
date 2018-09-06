////// System libs
/////////////////////////
import React, { Component } from 'react';
import { connect } from 'react-redux';

////// Mock Data
/////////////////////////
import { MealNames } from '../test/meals_data';

////// UI
/////////////////////////
import MealRow from '../components/MealRow';

/**
 * Class represents a
 */
class DayMeals extends Component {
  render() {
    const { meals, selected } = this.props;
    return meals[selected].map((meal, idx) => {
      return (
        <MealRow
          key={idx + MealNames[meal.id]}
          mealName={MealNames[meal.id]}
          mealData={meal}
        />
      );
    });
  }
}

/**
 * Maps data from reducers to this.props to update the state of the App
 * @param {*} dispatch
 */
const mapStateToProps = state => {
  return {
    // Data from redux
    meals: state.meals,
    // Actions from redux
    selected: state.selected
  };
};

/**
 * Connecting data to this class
 */
export default connect(
  mapStateToProps,
  null
)(DayMeals);
