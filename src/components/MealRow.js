import React from 'react';
import { GridColumn, GridRow, Card, Icon, Ref } from 'semantic-ui-react';
import { Droppable } from 'react-beautiful-dnd';

import MealDishes from './MealDishes';

export default ({ mealName, mealData, key }) => {
  return (
    <GridRow columns="3">
      <GridColumn width={4} textAlign="right" verticalAlign="middle" size="23">
        <h3>{mealName}</h3>
      </GridColumn>
      <GridColumn width={1} textAlign="center" verticalAlign="middle">
        <Icon name="plus circle" size="large" color="green" />
      </GridColumn>
      <Droppable droppableId={key}>
        {provided => (
          <Ref innerRef={provided.innerRef} {...provided.droppableProps}>
            <GridColumn width={11}>
              <Card.Group itemsPerRow={4}>
                <MealDishes data={mealData} />
              </Card.Group>
              {provided.placeholder}
            </GridColumn>
          </Ref>
        )}
      </Droppable>
    </GridRow>
  );
};
