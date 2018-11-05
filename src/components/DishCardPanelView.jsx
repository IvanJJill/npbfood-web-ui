import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import { Ingredients } from '../test/meals_data';

const panelView = props => {
  const { dish } = props;
  return (
    <Card.Content>
      <Image centered fluid size="medium" src={dish.image} />
      <Card.Header>{dish.name}</Card.Header>
      <Card.Meta>{dish.amount + 'g'}</Card.Meta>
      <Card.Description>
        {!!dish.ingredients
          ? dish.ingredients.map(i => Ingredients[i].name + ' ')
          : null}
      </Card.Description>
    </Card.Content>
  );
};

export default panelView;
