/* eslint jsx-a11y/anchor-is-valid: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Tooltip } from '../../index';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

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
    const { tooltipOpen } = this.state;

    return (
      <div>
        <p>
          Somewhere in here is a
          {' '}
          <a href="#" id="TooltipExample">
            tooltip
          </a>
          .
        </p>
        <Tooltip
          placement="right"
          isOpen={tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}
        >
          Hello world!
        </Tooltip>
      </div>
    );
  }
}
