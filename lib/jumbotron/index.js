import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import { jumbotron, jumbotronFluid } from 'emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

export default class Jumbotron extends Component {
  render() {
    const {
      className, tag: Tag, fluid, ...attributes
    } = this.props;

    const classes = cx(className, jumbotron, fluid ? jumbotronFluid : false);

    return <Tag {...attributes} className={classes} />;
  }
}

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;
