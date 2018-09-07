import React from 'react';
import { GridColumn, GridRow, Card, Icon } from 'semantic-ui-react';
import MealDishes from './MealDishes';

export default ({ mealName, mealData }) => {
  return (
    <GridRow columns="3">
      <GridColumn width={4} textAlign="right" verticalAlign="middle" size="23">
        <h3>{mealName}</h3>
      </GridColumn>
      <GridColumn width={1} textAlign="center" verticalAlign="middle">
        <Icon name="plus circle" size="large" color="green" />
      </GridColumn>
      <GridColumn width={11}>
        <Card.Group itemsPerRow={4}>
          <MealDishes data={mealData} />
        </Card.Group>
      </GridColumn>
    </GridRow>
  );
};
