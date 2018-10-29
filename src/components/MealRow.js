import React from 'react';
import { GridColumn, GridRow, Card, Icon } from 'semantic-ui-react';
import Droppable from './DropWrapper';

import MealDishes from './MealDishes';

export default ({ mealName, mealData, id }) => {
  return (
    <GridRow columns="3">
      <GridColumn width={2} textAlign="center" verticalAlign="middle">
        <Icon name="plus circle" size="large" color="green" />
      </GridColumn>
      <Droppable id={id} direction="horizontal">
        <GridColumn width={14} className="mealRow">
          <div className="background">{mealName}</div>
          <Card.Group itemsPerRow={4}>
            <MealDishes mealData={mealData} />
          </Card.Group>
        </GridColumn>
      </Droppable>
    </GridRow>
  );
};
