/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import {
  Button, Popover, PopoverHeader, PopoverBody,
} from '../../index';

export class Example extends React.Component {
  constructor(props) {
    super(props);
    const mountPopover = process.env.NODE_ENV !== 'test';
    this.state = {
      popoverOpen: false,
      mountPopover,
    };
  }

  toggle = () => {
    const { popoverOpen } = this.state;
    this.setState({
      popoverOpen: !popoverOpen,
    });
  };

  render() {
    const { mountPopover } = this.state;
    return (
      mountPopover && (
        <div>
          <Button id="Popover1" onClick={this.toggle}>
            Launch Popover
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target="Popover1"
            toggle={this.toggle}
          >
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </PopoverBody>
          </Popover>
        </div>
      )
    );
  }
}

export default function example() {
  return <Example />;
}
