import React from 'react';
import { GridColumn, GridRow, Card, Icon } from 'semantic-ui-react';
import Droppable from './DropWrapper';

import MealDishes from './MealDishes';

export default ({ mealName, mealData, id }) => {
  return (
    <GridRow columns="3">
      <GridColumn width={4} textAlign="right" verticalAlign="middle" size="23">
        <h3>{mealName}</h3>
      </GridColumn>
      <GridColumn width={1} textAlign="center" verticalAlign="middle">
        <Icon name="plus circle" size="large" color="green" />
      </GridColumn>
      <Droppable id={id} direction="horizontal">
        <GridColumn width={11}>
          <Card.Group itemsPerRow={4}>
            <MealDishes mealData={mealData} />
          </Card.Group>
        </GridColumn>
      </Droppable>
    </GridRow>
  );
};
