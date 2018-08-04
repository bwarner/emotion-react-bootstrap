import React, { Component } from 'react';
import Dropdown from './dropdown';

export default class UncontrolledDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    return (
      <Dropdown
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        {...this.props}
      />
    );
  }
}
