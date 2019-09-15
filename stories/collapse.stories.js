import React, { Component } from 'react';
import { lead, display3 } from '@farvisionllc/emotion-bootstrap';
import Collapse from '../lib/collapse';
import { Button } from '../lib/button';
import Jumbotron from '../lib/jumbotron';
import Container from '../lib/layout/container';

class CollapseExample extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}
        >
          Toggle
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Jumbotron fluid>
            <Container>
              <h1 className={display3}>
Fluid jumbotron
              </h1>
              <p className={lead}>
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </Container>
          </Jumbotron>
        </Collapse>
      </div>
    );
  }
}

const CollapseStory = () => <CollapseExample />;

export default CollapseStory;
