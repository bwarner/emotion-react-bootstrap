/* eslint-disable react/forbid-foreign-prop-types */
import React, { Component } from 'react';
import { cx } from 'emotion';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import {
  collapse,
  collapsing,
  show,
  navbarCollapse,
} from '@farvisionllc/emotion-bootstrap';
import {
  TransitionTimeouts,
  TransitionPropTypeKeys,
  TransitionStatuses,
} from '../utilities';

const propTypes = {
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

const defaultProps = {
  ...Transition.defaultProps,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse,
};

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: collapsing,
  [TransitionStatuses.ENTERED]: { collapse, show },
  [TransitionStatuses.EXITING]: collapsing,
  [TransitionStatuses.EXITED]: collapse,
};

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || collapse;
}

function getHeight(node) {
  return node.scrollHeight;
}

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null,
    };

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(
      (name) => {
        this[name] = this[name].bind(this);
      },
    );
  }

  onEntering(node, isAppearing) {
    this.setState({ height: getHeight(node) });
    this.props.onEntering(node, isAppearing);
  }

  onEntered(node, isAppearing) {
    this.setState({ height: null });
    this.props.onEntered(node, isAppearing);
  }

  onExit(node) {
    this.setState({ height: getHeight(node) });
    this.props.onExit(node);
  }

  onExiting(node) {
    // getting this variable triggers a reflow
    const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars, no-underscore-dangle
    this.setState({ height: 0 });
    this.props.onExiting(node);
  }

  onExited(node) {
    this.setState({ height: null });
    this.props.onExited(node);
  }

  render() {
    const {
      tag: Tag,
      isOpen,
      className,
      navbar,
      children,
      innerRef,
      ...otherProps
    } = this.props;

    const { height } = this.state;
    const transitionProps = pick(otherProps, TransitionPropTypeKeys);
    const childProps = omit(otherProps, TransitionPropTypeKeys);
    return (
      <Transition
        {...transitionProps}
        in={isOpen}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status) => {
          const collapseClass = getTransitionClass(status);
          const classes = cx(
            className,
            collapseClass,
            navbar && navbarCollapse,
          );
          const style = height === null ? null : { height };
          return (
            <Tag
              {...childProps}
              style={{ ...childProps.style, ...style }}
              className={classes}
              ref={this.props.innerRef}
            >
              {children}
            </Tag>
          );
        }}
      </Transition>
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
export default Collapse;
