import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '../lib';
import Description from './description';

function Example1() {
  return (
    <Description
      title="Button Group"
      summary="There are several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control."
    >
      <ButtonGroup>
        <Button>
Left
        </Button>
        <Button>
Middle
        </Button>
        <Button>
Right
        </Button>
      </ButtonGroup>
    </Description>
  );
}

function Example2() {
  return (
    <Description title="Button Toolbar" summary="Buttons with clear background">
      <ButtonToolbar>
        <ButtonGroup>
          <Button>
1
          </Button>
          <Button>
2
          </Button>
          <Button>
3
          </Button>
          <Button>
4
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>
5
          </Button>
          <Button>
6
          </Button>
          <Button>
7
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>
8
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Description>
  );
}

function Example3() {
  return (
    <Description title="Sizing" summary="Fancy larger or smaller buttons">
      <ButtonGroup size="lg">
        <Button>
Left
        </Button>
        <Button>
Middle
        </Button>
        <Button>
Right
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>
Left
        </Button>
        <Button>
Middle
        </Button>
        <Button>
Right
        </Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button>
Left
        </Button>
        <Button>
Middle
        </Button>
        <Button>
Right
        </Button>
      </ButtonGroup>
    </Description>
  );
}

class Example extends Component {
  static propTypes = {
    dropdownOpen: PropTypes.bool,
    vertical: PropTypes.bool,
  };

  static defaultProps = {
    dropdownOpen: false,
    vertical: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: props.dropdownOpen,
    };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    return (
      <Description title="Nesting" summary="Active Buttons">
        <ButtonGroup vertical={this.props.vertical}>
          <Button>
1
          </Button>
          <Button>
2
          </Button>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
Dropdown Link
              </DropdownItem>
              <DropdownItem>
Dropdown Link
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
      </Description>
    );
  }
}

export default [
  { name: 'Button Group', story: Example1 },
  { name: 'Button Toolbar', story: Example2 },
  { name: 'Sizing', story: Example3 },
  { name: 'Nesting', story: () => <Example /> },
  { name: 'Vertical variation', story: () => <Example vertical /> },
];
