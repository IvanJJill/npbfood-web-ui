import React from 'react';
import PropTypes from 'prop-types';
import {
  GridColumn,
  GridRow,
  Card,
  Icon,
  Ref,
} from 'semantic-ui-react';
import { Droppable } from 'react-beautiful-dnd';

import MealDishes from './MealDishes';

const MealRow = ({ mealName, mealData, id }) => (
  <GridRow columns="3">
    <GridColumn width={4} textAlign="right" verticalAlign="middle" size="23">
      <h3>{mealName}</h3>
    </GridColumn>
    <GridColumn width={1} textAlign="center" verticalAlign="middle">
      <Icon name="plus circle" size="large" color="green" />
    </GridColumn>
    <Droppable droppableId={id} direction="horizontal">
      {provided => (
        <Ref innerRef={provided.innerRef} {...provided.droppableProps}>
          <GridColumn width={11}>
            <Card.Group itemsPerRow={4}>
              <MealDishes mealData={mealData} />
            </Card.Group>
            {provided.placeholder}
          </GridColumn>
        </Ref>
      )}
    </Droppable>
  </GridRow>
);

MealRow.propTypes = {
  mealName: PropTypes.string.isRequired,
  mealData: PropTypes.shape.isRequired,
  id: PropTypes.number.isRequired,
};

export default MealRow;
