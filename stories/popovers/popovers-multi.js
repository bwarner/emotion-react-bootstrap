/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { mr1 } from '@farvisionllc/emotion-bootstrap';
import {
  Button, Popover, PopoverHeader, PopoverBody,
} from '../../index';

class PopoverItem extends React.Component {
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
        <span>
          <Button
            className={mr1}
            color="secondary"
            id={`Popover-${this.props.id}`}
            onClick={this.toggle}
          >
            {this.props.item.text}
          </Button>
          <Popover
            placement={this.props.item.placement}
            isOpen={this.state.popoverOpen}
            target={`Popover-${this.props.id}`}
            toggle={this.toggle}
          >
            <PopoverHeader>
Popover Title
            </PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </PopoverBody>
          </Popover>
        </span>
      )
    );
  }
}

class PopoverExampleMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popovers: [
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'right',
          text: 'Right',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.popovers.map((popover, i) => (
          <PopoverItem key={i} item={popover} id={i} />
        ))}
      </div>
    );
  }
}

export default function () {
  return <PopoverExampleMulti />;
}
