import React, { Component } from 'react';
import { Card, Image, Ref } from 'semantic-ui-react';

import { Draggable } from 'react-beautiful-dnd';

import { Ingredients } from '../test/meals_data';
import DishCardControls from './DishCardControls';

export default class DishCard extends Component {
  state = {
    expand: false,
    info: false,
    edit: false
  };

  onInfo = () => {
    const { expand, info } = this.state;
    this.setState({ expand: !(info && expand), info: !info, edit: false });
  };

  onEdit = () => {
    const { expand, edit } = this.state;
    this.setState({ expand: !(edit && expand), edit: !edit, info: false });
  };

  render() {
    const { dish, idx } = this.props;
    const { expand, info, edit } = this.state;
    console.log('Ahoj!' + dish.name);
    return (
      <Draggable draggableId={idx + dish.name} index={idx}>
        {provided => (
          <Ref innerRef={provided.innerRef}>
            <Card
              key={idx + dish.name}
              className="dish-card"
              style={{ width: '30%' }}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <Card.Content>
                <Image floated="left" size="mini" src={dish.image} circular />
                <DishCardControls onEdit={this.onEdit} onInfo={this.onInfo} />
                <Card.Header>{dish.name}</Card.Header>
                <Card.Meta>{dish.amount + 'g'}</Card.Meta>
                <Card.Description>
                  {!!dish.ingredients
                    ? dish.ingredients.map(i => Ingredients[i].name + ' ')
                    : null}
                </Card.Description>
              </Card.Content>
              {expand && (
                <Card.Content extra>
                  {info ? dish.name : edit ? 'EDIT BUTTONS' : null}
                </Card.Content>
              )}
            </Card>
          </Ref>
        )}
      </Draggable>
    );
  }
}
