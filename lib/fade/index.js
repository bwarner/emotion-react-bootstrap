/* eslint-disable react/forbid-foreign-prop-types */
// TODO: find a way not to reference foreign prop types
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';

import { fade, show } from '@farvisionllc/emotion-bootstrap';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { TransitionPropTypeKeys, TransitionTimeouts } from '../utilities';

const propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

export const FadeShape = PropTypes.shape(propTypes);

const defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  baseClass: fade,
  baseClassActive: show,
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
};

function Fade(props) {
  const {
    tag: Tag,
    baseClass,
    baseClassActive,
    className,
    children,
    innerRef,
    ...otherProps
  } = props;

  const transitionProps = pick(otherProps, TransitionPropTypeKeys);
  const childProps = omit(otherProps, TransitionPropTypeKeys);

  return (
    <Transition {...transitionProps}>
      {(status) => {
        const isActive = status === 'entered';
        const classes = classNames(
          className,
          baseClass,
          isActive && baseClassActive,
        );
        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        );
      }}
    </Transition>
  );
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
