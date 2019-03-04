import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DragDropContext } from 'react-beautiful-dnd';

import { mealDropped } from '../actions/index';
import { getMealId } from '../utils';
import { MealNames } from '../test/meals_data';
import MealRow from '../components/MealRow';

/**
 * Class represents a
 */

const onDragEnd = (result) => {
  const { mealDropped } = props;
  const { destination, source, draggableId } = result;
  mealDropped(destination, source, draggableId);
};

const DayMeals = (props) => {
  const { meals, selected } = props;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {meals[selected].map((meal, idx) => 
          <MealRow
            key={`${meal.id}`}
            id={getMealId(MealNames[meal.id], idx)}
            mealName={MealNames[meal.id]}
            mealData={meal}
          />
      )}
    </DragDropContext>
  );
};

DayMeals.propTypes = {
  meals: PropTypes.shape({
  }).isRequired,
  selected: PropTypes.bool,
};

DayMeals.defaultProps = {
  selected: false,
};

/**
 * Maps data from reducers to this.props to update the state of the App
 * @param {*} dispatch
 */
const mapStateToProps = (state) => {
  return {
    // Data from redux
    meals: state.meals,
    // Actions from redux
    selected: state.selected,
  };
};

/**
 * Connecting data to this class
 */
export default connect(
  mapStateToProps,
  { mealDropped },
)(DayMeals);
