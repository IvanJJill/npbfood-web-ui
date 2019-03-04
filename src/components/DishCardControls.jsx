import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const DishCardControls = (props) => {
  const { onInfo, onEdit } = props;
  return (
    <div style={{ float: 'right' }}>
      <Button as="a" size="tiny" icon="info" circular onClick={onInfo} />
      <Button
        as="a"
        size="tiny"
        icon="setting"
        circular
        color="teal"
        onClick={onEdit}
      />
    </div>
  );
};

DishCardControls.propTypes = {
  onInfo: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default DishCardControls;
