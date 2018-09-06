import React from 'react';
import { GridColumn, GridRow } from 'semantic-ui-react';
import MealDishes from './MealDishes';

export default ({ mealName, mealData }) => {
  return (
    <GridRow>
      <GridColumn width={4}>{mealName}</GridColumn>
      <GridColumn width={12}>
        <MealDishes data={mealData} />
      </GridColumn>
    </GridRow>
  );
};
