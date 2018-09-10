import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import { Ingredients } from '../test/meals_data';
import DishCardControls from './DishCardControls';

export default class DishCard extends Component {
  state = {
    expand: false,
    info: false,
    edit: false
  };

  onInfo = () => {
    return null;
  };

  onEdit = () => {
    return null;
  };

  render() {
    const { dish, idx } = this.props;
    return (
      <Card
        key={idx + dish.name}
        className="dish-card"
        style={{ width: '30%' }}
      >
        <Card.Content>
          <Image floated="left" size="mini" src={dish.image} circular />
          {/* <div style={{ float: "right" }}>
            <Icon circular bordered name="info" size="small" />
            <Icon circular bordered color="teal" name="setting" size="small" />
          </div> */}
          <DishCardControls dish={dish} />
          <Card.Header>{dish.name}</Card.Header>
          <Card.Meta>{dish.amount + 'g'}</Card.Meta>
          <Card.Description>
            {!!dish.ingredients
              ? dish.ingredients.map(i => Ingredients[i].name + ' ')
              : null}
          </Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
          <DishCardControls
            dish={dish}
            onExpand={() => this.onExpand}
            onInfo={() => this.onInfo}
            onEdit={() => this.onEdit}
          />
        </Card.Content> */}
      </Card>
    );
  }
}
