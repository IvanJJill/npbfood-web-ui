import React from 'react';
import { Card, Image, Label, List } from 'semantic-ui-react';

export default ({ data }) => {
  return data.dishes.map((dish, idx) => (
    <Card key={idx + dish.name}>
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>{dish.name}</Card.Header>
        <Card.Meta>{dish.amount + 'g'}</Card.Meta>
        <Card.Description>Oat Flakes, Milk, Honey</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label as="a" color="teal" circular>
          Info
        </Label>
        <List horizontal relaxed>
          <List.Item />
          <List.Item content={dish.amount + 'g'} />
          <List.Item content={dish.portions + 'pts'} />

          {dish.ingredients ? (
            <List.Item color="grey">
              {dish.ingredients.length + ' ' + 'ing'}
            </List.Item>
          ) : null}
        </List>
      </Card.Content>
    </Card>
  ));
};
