/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { alertLink } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default class AlertLink extends Component {
  render() {
    const { className, children, href } = this.props;

    return (
      <a css={[alertLink, className]} href={href}>
        {children}
      </a>
    );
  }
}

AlertLink.propTypes = propTypes;
