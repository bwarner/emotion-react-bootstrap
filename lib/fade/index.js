import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { cx } from 'emotion';

import { fade, show } from 'emotion-bootstrap';
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
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

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
    cssModule,
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
        const classes = cx(className, baseClass);
        return (
          <Tag
            className={`${classes} ${isActive && baseClassActive}`}
            {...childProps}
            ref={innerRef}
          >
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
