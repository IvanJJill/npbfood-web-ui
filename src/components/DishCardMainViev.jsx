import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import DishCardControls from './DishCardControls';

const mainView = props => {
  const { dish, onInfo, onEdit } = props;
  return (
    <Card.Content>
      <Image floated="left" size="mini" src={dish.image} circular />
      <DishCardControls onEdit={onEdit} onInfo={onInfo} />
      <Card.Header>{dish.name}</Card.Header>
      <Card.Meta>{dish.amount + 'g'}</Card.Meta>
    </Card.Content>
  );
};

export default mainView;
