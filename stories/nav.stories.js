/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from '../lib/nav';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from '../lib';

const NavExample = () => (
  <div>
    <p>
List Based
    </p>
    <Nav>
      <NavItem>
        <NavLink href="#">
Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
Another Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
    <hr />
    <p>
Link Based
    </p>
    <Nav>
      <NavLink href="#">
Link
      </NavLink>
      {' '}
      <NavLink href="#">
Link
      </NavLink>
      {' '}
      <NavLink href="#">
Another Link
      </NavLink>
      {' '}
      <NavLink disabled href="#">
        Disabled Link
      </NavLink>
    </Nav>
  </div>
);

class NavPills extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>
              Link
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
Header
              </DropdownItem>
              <DropdownItem disabled>
Action
              </DropdownItem>
              <DropdownItem>
Another Action
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
Another Action
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">
Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
Another Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

class NavTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    const { dropdownOpen } = this.state;

    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>
              Link
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
Header
              </DropdownItem>
              <DropdownItem disabled>
Action
              </DropdownItem>
              <DropdownItem>
Another Action
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
Another Action
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">
Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
Another Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

class NavVertical extends Component {
  render() {
    return (
      <div>
        <p>
List Based
        </p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">
Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
Another Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>
Link based
        </p>
        <Nav vertical>
          <NavLink href="#">
Link
          </NavLink>
          {' '}
          <NavLink href="#">
Link
          </NavLink>
          {' '}
          <NavLink href="#">
Another Link
          </NavLink>
          {' '}
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </Nav>
      </div>
    );
  }
}

export default [
  { name: 'Simple', story: () => <NavExample /> },
  { name: 'Pills', story: () => <NavPills /> },
  { name: 'Tabs', story: () => <NavTabs /> },
  { name: 'Vertical', story: () => <NavVertical /> },
];
