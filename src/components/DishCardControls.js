import React, { Component } from 'react';
import { Button, Icon, LabelGroup } from 'semantic-ui-react';

export default class DishCardControls extends Component {
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
    const { dish } = this.props;
    return (
      <div style={{ float: 'right' }}>
        <Button as="a" size="tiny" icon="info" circular />
        <Button as="a" size="tiny" icon="setting" circular color="teal" />
      </div>
    );
  }
}
