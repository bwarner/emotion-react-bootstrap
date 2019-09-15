import React, { Component } from 'react';
import Tooltip from './tooltip';

export default class UncontrolledTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    return (
      <Tooltip
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        {...this.props}
      />
    );
  }
}
