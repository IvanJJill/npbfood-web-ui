import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Reveal } from 'semantic-ui-react';

import DraggedItem from './DragWrapper';

import CardMainView from './DishCardMainViev';
import CardPanelView from './DishCardPanelView';

export default class DishCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      info: false,
      edit: false,
    };

    this.onInfo = this.onInfo.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onInfo() {
    const { expand, info } = this.state;
    this.setState({ expand: !(info && expand), info: !info, edit: false });
  }

  onEdit() {
    const { expand, edit } = this.state;
    this.setState({ expand: !(edit && expand), edit: !edit, info: false });
  }

  render() {
    const { dish, idx, id } = this.props;
    return (
      <DraggedItem id={id} index={idx} key={idx + dish.name}>
        <Card className="dish-card">
          <Reveal animated="move down">
            <Reveal.Content visible>
              <CardMainView
                dish={dish}
                onInfo={this.onInfo}
                onEdit={this.onEdit}
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <CardPanelView dish={dish} />
            </Reveal.Content>
          </Reveal>
        </Card>
      </DraggedItem>
    );
  }
}

DishCard.propTypes = {
  dish: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
