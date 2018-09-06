import React from 'react';
import { GridColumn, GridRow, Divider, Icon } from 'semantic-ui-react';
import MealDishes from './MealDishes';

export default ({ mealName, mealData }) => {
  return (
    <GridRow>
      <GridColumn width={4} textAlign="right" verticalAlign="middle" size="23">
        <h3>{mealName}</h3>
      </GridColumn>
      <Divider vertical />
      <GridColumn width={1} textAlign="center" verticalAlign="middle">
        <Icon name="plus circle" size="large" color="green" />
      </GridColumn>
      <GridColumn width={11}>
        <MealDishes data={mealData} />
      </GridColumn>
    </GridRow>
  );
};
