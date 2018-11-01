import React, { Component } from 'react';
import { Card, Reveal } from 'semantic-ui-react';

import DraggedItem from './DragWrapper';

import CardMainView from './DishCardMainViev';
import CardPanelView from './DishCardPanelView';

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
    const { dish, idx, id } = this.props;
    const { expand, info, edit } = this.state;
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
