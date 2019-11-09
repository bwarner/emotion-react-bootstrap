/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/core';
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
      <ClassNames>
        {({ cx }) => (
          <a className={cx([alertLink, className])} href={href}>
            {children}
          </a>
        )}
      </ClassNames>
    );
  }
}

AlertLink.propTypes = propTypes;
