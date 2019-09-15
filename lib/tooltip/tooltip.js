/* globals document */
/* eslint-disable no-underscore-dangle, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash.omit';
import { tooltip, show, tooltipInner } from '@farvisionllc/emotion-bootstrap';
import PopperContent from '../popper-content/popper-content';
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
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250,
};

const defaultProps = {
  isOpen: false,
  hideArrow: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: () => {},
};

class Tooltip extends React.Component {
  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.addTargetEvents();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltip = (e) => {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
    this._showTimeout = setTimeout(
      this.show.bind(this, e),
      this.getDelay('show'),
    );
  };

  onMouseLeaveTooltip = (e) => {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(
      this.hide.bind(this, e),
      this.getDelay('hide'),
    );
  };

  onMouseOverTooltipContent = () => {
    if (this.props.autohide) {
      return;
    }
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
  };

  onMouseLeaveTooltipContent = (e) => {
    if (this.props.autohide) {
      return;
    }
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    e.persist();
    this._hideTimeout = setTimeout(
      this.hide.bind(this, e),
      this.getDelay('hide'),
    );
  };

  onEscKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  };

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return Number.isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  addTargetEvents = () => {
    this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
    this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
    this._target.addEventListener('keydown', this.onEscKeyDown, true);
    this._target.addEventListener('focusin', this.show, true);
    this._target.addEventListener('focusout', this.hide, true);

    ['click', 'touchstart'].forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
  };

  removeTargetEvents = () => {
    this._target.removeEventListener(
      'mouseover',
      this.onMouseOverTooltip,
      true,
    );
    this._target.removeEventListener(
      'mouseout',
      this.onMouseLeaveTooltip,
      true,
    );
    this._target.addEventListener('keydown', this.onEscKeyDown, true);
    this._target.addEventListener('focusin', this.show, true);
    this._target.addEventListener('focusout', this.hide, true);

    ['click', 'touchstart'].forEach(event => document.removeEventListener(event, this.handleDocumentClick, true));
  };

  handleDocumentClick = (e) => {
    if (e.target === this._target || this._target.contains(e.target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.toggle(e);
      }
    } else if (
      this.props.isOpen
      && e.target.getAttribute('role') !== 'tooltip'
    ) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      this._hideTimeout = setTimeout(
        this.hide.bind(this, e),
        this.getDelay('hide'),
      );
    }
  };

  toggle = (e) => {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle(e);
    }
  }

  hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle(e);
    }
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(propTypes));
    const classes = classNames(tooltipInner, this.props.innerClassName);

    const popperClasses = classNames(tooltip, show, this.props.className);

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
        <div
          {...attributes}
          ref={this.props.innerRef}
          className={classes}
          role="tooltip"
          aria-hidden={this.props.isOpen}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
          onFocus={this.onMouseOverTooltipContent}
          onBlur={this.onMouseLeaveTooltipContent}
          onKeyDown={this.onEscKeyDown}
        />
      </PopperContent>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
