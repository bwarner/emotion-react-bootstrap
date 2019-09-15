import React from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from '../lib';
import Description from './description';

export class Example1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    const { dropdownOpen } = this.state;
    return (
      <Description
        title="Dropdowns"
        summary="The Dropdown component is used to pass the isOpen & toggle props via context to the following components: DropdownToggle, DropdownMenu. The DropdownToggle uses the Button component internally, meaning it also accepts all the props the Button component accepts."
      >
        <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Description>
    );
  }
}

export default [{ name: 'Dropdown', story: () => <Example1 /> }];
