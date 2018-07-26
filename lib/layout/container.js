import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { container, containerFluid } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const Container = (props) => {
  const {
    className, fluid, tag: Tag, ...attributes
  } = props;

  const classes = cx(className, fluid ? containerFluid : container);

  return <Tag {...attributes} className={classes} />;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
