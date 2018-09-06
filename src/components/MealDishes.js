import React from 'react';
import { Label } from 'semantic-ui-react';

export default ({ data }) => {
  return data.dishes.map((dish, idx) => (
    <Label as="a" color="blue" image key={idx + dish.name}>
      <img src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
      {dish.name}
      <Label.Detail>{dish.amount}</Label.Detail>
    </Label>
  ));
};
