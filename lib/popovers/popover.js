/* globals document */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash.omit';
import { show, popover } from '@farvisionllc/emotion-bootstrap';
import PopperContent from './popper-content';
import { getTarget, DOMElement, PopperPlacements } from '../utilities';

const propTypes = {
  placement: PropTypes.oneOf(PopperPlacements),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement])
    .isRequired,
  container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]),
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  placementPrefix: PropTypes.string,
  toggle: PropTypes.func,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const DEFAULT_DELAYS = {
  show: 0,
  hide: 0,
};

const defaultProps = {
  isOpen: false,
  hideArrow: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: () => {},
};

class Popover extends React.Component {
  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.handleProps();
  }

  componentDidUpdate() {
    this.handleProps();
  }

  componentWillUnmount() {
    this.clearShowTimeout();
    this.clearHideTimeout();
    this.removeTargetEvents();
  }

  getRef = (ref) => {
    this._popover = ref;
  };

  getDelay = (key) => {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return Number.isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  };

  show = () => {
    this.clearHideTimeout();
    this.addTargetEvents();
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
    }
  };

  hide = () => {
    this.clearShowTimeout();
    this.removeTargetEvents();
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
    }
  };

  handleDocumentClick = (e) => {
    if (
      e.target !== this._target
      && !this._target.contains(e.target)
      && e.target !== this._popover
      && !(this._popover && this._popover.contains(e.target))
    ) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen) {
        this.toggle(e);
      }
    }
  };

  addTargetEvents = () => {
    ['click', 'touchstart'].forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
  };

  removeTargetEvents = () => {
    ['click', 'touchstart'].forEach(event => document.removeEventListener(event, this.handleDocumentClick, true));
  };

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(propTypes));
    const classes = classNames('popover-inner', this.props.innerClassName);
    const popperClasses = classNames(popover, show, this.props.className);

    return (
      <PopperContent
        className={popperClasses}
        target={this.props.target}
        isOpen={this.props.isOpen}
        hideArrow={this.props.hideArrow}
        placement={this.props.placement}
        placementPrefix={this.props.placementPrefix}
        container={this.props.container}
        modifiers={this.props.modifiers}
        offset={this.props.offset}
      >
        <div {...attributes} className={classes} ref={this.getRef} />
      </PopperContent>
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
