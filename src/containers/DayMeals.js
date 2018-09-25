////// System libs
/////////////////////////
import React, { Component } from 'react';
import { connect } from 'react-redux';

////// Utils
/////////////////////////
import { getMealId, getMealNameAndId } from '../utils';

////// Mock Data
/////////////////////////
import { MealNames } from '../test/meals_data';

////// UI
/////////////////////////
import { DragDropContext } from 'react-beautiful-dnd';

import MealRow from '../components/MealRow';

/**
 * Class represents a
 */

class DayMeals extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const [meal, mealIdx] = getMealNameAndId(destination.droppableId);

    const row = this.props.meals[mealIdx]; // meal day
    console.log(meal, row);
  };

  render() {
    const { meals, selected } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {meals[selected].map((meal, idx) => {
          return (
            <MealRow
              key={idx + '' + meal.id}
              id={getMealId(MealNames[meal.id], idx)}
              mealName={MealNames[meal.id]}
              mealData={meal}
            />
          );
        })}
      </DragDropContext>
    );
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
