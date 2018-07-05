import React from 'react';
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
    <Description title="Buttons" summary="There are several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.">
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </Description>
  );
}

function Example2() {
  return (
    <Description title="Outline Buttons" summary="Buttons with clear background">
      <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Description>
  );
}

function Example3() {
  return (
    <Description title="Sizes" summary="Fancy larger or smaller buttons">
      <ButtonGroup size="lg">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup size="sm">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </Description>
  );
}


function Example4() {
  return (
    <Description title="Active State" summary="Active Buttons">
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
          Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Dropdown Link</DropdownItem>
            <DropdownItem>Dropdown Link</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    </Description>
  );
}

function Example5() {
  return (
    <Description title="Disabled State" summary="Disabled Buttons">
      <Button>1</Button>
      <Button>2</Button>
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Dropdown Link</DropdownItem>
        <DropdownItem>Dropdown Link</DropdownItem>
      </DropdownMenu>
      </ButtonDropdown>
    </Description>
  );
}

export default [
  { name: 'Buttons', story: Example1 },
  { name: 'Outline Buttons', story: Example2 },
  { name: 'Sizes', story: Example3 },
  { name: 'Active State', story: Example4 },
  { name: 'Disabled State', story: Example5 },
];
