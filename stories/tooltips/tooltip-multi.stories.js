/* eslint jsx-a11y/anchor-is-valid: 0, react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Tooltip } from '../../index';

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle = () => {
    const { tooltipOpen } = this.state;
    this.setState({
      tooltipOpen: !tooltipOpen,
    });
  };

  render() {
    return (
      <span>
        <Button
          className="mr-1"
          color="secondary"
          id={`Tooltip-${this.props.id}`}
        >
          {this.props.item.text}
        </Button>
        <Tooltip
          placement={this.props.item.placement}
          isOpen={this.state.tooltipOpen}
          target={`Tooltip-${this.props.id}`}
          toggle={this.toggle}
        >
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}

class TooltipExampleMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
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
        {this.state.tooltips.map((tooltip, i) => (
          <TooltipItem key={i} item={tooltip} id={i} />
        ))}
      </div>
    );
  }
}

export default TooltipExampleMulti;
