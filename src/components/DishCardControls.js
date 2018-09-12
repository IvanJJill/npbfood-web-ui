import React from 'react';
import { Button } from 'semantic-ui-react';

const DishCardControls = props => {
  return (
    <div style={{ float: 'right' }}>
      <Button as="a" size="tiny" icon="info" circular onClick={props.onInfo} />
      <Button
        as="a"
        size="tiny"
        icon="setting"
        circular
        color="teal"
        onClick={props.onEdit}
      />
    </div>
  );
};

export default DishCardControls;
