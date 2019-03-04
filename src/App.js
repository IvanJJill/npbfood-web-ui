import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import Selection from './components/Selection';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Selection />
        </Container>
      </div>
    );
  }
}
