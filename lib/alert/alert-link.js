import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import { alertLink } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default class AlertLink extends Component {
  render() {
    const { className, children, href } = this.props;

    const classes = cx(alertLink, className);

    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
}

AlertLink.propTypes = propTypes;
