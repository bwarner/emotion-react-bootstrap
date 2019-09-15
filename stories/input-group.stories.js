import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '../index';

const Example1 = () => (
  <div>
    <InputGroup>
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <Input
            addon
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Check it out" />
    </InputGroup>
    <br />
    <InputGroup>
      <Input placeholder="username" />
      <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>$</InputGroupText>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Dolla dolla billz yo!" />
      <InputGroupAddon addonType="append">
        <InputGroupText>$</InputGroupText>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input placeholder="Amount" type="number" step="1" />
      <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
  </div>
);

export const Example2 = () => (
  <div>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>To the Left!</InputGroupText>
      </InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append">
        <InputGroupText>To the Right!</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>To the Left!</InputGroupText>
      </InputGroupAddon>
      <Input placeholder="and..." />
      <InputGroupAddon addonType="append">
        <InputGroupText>To the Right!</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

const Example3 = () => (
  <div>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup size="sm">
      <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
      <Input />
    </InputGroup>
  </div>
);

export class Example4 extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
    };
  }

  toggleDropDown() {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  }

  toggleSplit() {
    const { splitButtonOpen } = this.state;
    this.setState({
      splitButtonOpen: !splitButtonOpen,
    });
  }

  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button>I&apos;m a button</Button>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggleDropDown}
          >
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={this.state.splitButtonOpen}
            toggle={this.toggleSplit}
          >
            <Button outline>Split Button</Button>
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input placeholder="and..." />
          <InputGroupAddon addonType="append">
            <Button color="secondary">I&apos;m a button</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default [
  { name: 'Input Group', story: Example1 },
  { name: 'Addon', story: Example2 },
  { name: 'Addon Sizing', story: Example3 },
  { name: 'Buttons / Dropdowns', story: () => <Example4 /> },
];
