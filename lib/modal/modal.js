/* globals document */
/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash.omit';
import {
  modal,
  modalBackdrop,
  modalContent,
  modalDialog,
  modalDialogCentered,
  modalOpen,
  modalLg,
  modalSm,
} from '@farvisionllc/emotion-bootstrap';
import { Portal } from '../portal';
import Fade from '../fade';
import {
  keyCodes,
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  TransitionTimeouts,
} from '../utilities';

function noop() {}

const FadePropTypes = PropTypes.shape(Fade.propTypes);

const SizeMap = {
  lg: modalLg,
  sm: modalSm,
};

const propTypes = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SizeMap)),
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  external: PropTypes.node,
  fade: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal,
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade, // uses standard fade transition
  },
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    /* eslint-disable no-underscore-dangle */
    this._element = null;
    this._originalBodyPadding = null;
    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
    this.handleBackdropMouseUp = this.handleBackdropMouseUp.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);

    this.state = {
      isOpen: props.isOpen,
    };

    if (props.isOpen) {
      this.init();
    }
  }

  componentDidMount() {
    if (this.props.onEnter) {
      this.props.onEnter();
    }

    if (this.state.isOpen && this.props.autoFocus) {
      this.setFocus();
    }

    this._isMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && !this.props.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen && !this.state.isOpen) {
      this.init();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  }

  componentWillUnmount() {
    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this.state.isOpen) {
      this.destroy();
    }

    this._isMounted = false;
  }

  onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  }

  onClosed(node) {
    // so all methods get called before it is unmounted
    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);
    this.destroy();

    if (this._isMounted) {
      this.setState({ isOpen: false });
    }
  }

  setFocus() {
    if (
      this._dialog
      && this._dialog.parentNode
      && typeof this._dialog.parentNode.focus === 'function'
    ) {
      this._dialog.parentNode.focus();
    }
  }

  handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  }

  handleBackdropMouseUp(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      if (!this.props.isOpen || this.props.backdrop !== true) {
        return;
      }

      const container = this._dialog;

      if (e.target && !container.contains(e.target) && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }

  handleEscape(e) {
    if (
      this.props.isOpen
      && this.props.keyboard
      && e.keyCode === keyCodes.esc
      && this.props.toggle
    ) {
      this.props.toggle(e);
    }
  }

  init() {
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this._originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    if (!this.bodyClassAdded) {
      document.body.className = classNames(document.body.className, modalOpen);
      this.bodyClassAdded = true;
    }
  }

  destroy() {
    if (this._element) {
      document.body.removeChild(this._element);
      this._element = null;
    }

    if (this.bodyClassAdded) {
      const modalOpenClassName = modalOpen;
      // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
      const modalOpenClassNameRegex = new RegExp(
        `(^| )${modalOpenClassName}( |$)`,
      );
      document.body.className = document.body.className
        .replace(modalOpenClassNameRegex, ' ')
        .trim();
      this.bodyClassAdded = false;
    }

    setScrollbarWidth(this._originalBodyPadding);
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);
    const { size, contentClassName, children } = this.props;
    return (
      <div
        {...attributes}
        className={classNames(modalDialog, this.props.className, {
          [SizeMap[size]]: size,
          [modalDialogCentered]: this.props.centered,
        })}
        role="document"
        ref={(c) => {
          this._dialog = c;
        }}
      >
        <div className={classNames(modalContent, contentClassName)}>
          {children}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.isOpen) {
      const {
        wrapClassName,
        modalClassName,
        backdropClassName,
        isOpen,
        backdrop,
        role,
        labelledBy,
        external,
        innerRef,
      } = this.props;

      const modalAttributes = {
        onMouseDown: this.handleBackdropMouseDown,
        onMouseUp: this.handleBackdropMouseUp,
        onKeyUp: this.handleEscape,
        style: { display: 'block' },
        'aria-labelledby': labelledBy,
        role,
        tabIndex: '-1',
      };

      const hasTransition = this.props.fade;
      const modalTransition = {
        ...Fade.defaultProps,
        ...this.props.modalTransition,
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0,
      };
      const backdropTransition = {
        ...Fade.defaultProps,
        ...this.props.backdropTransition,
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0,
      };

      return (
        <Portal node={this._element}>
          <div className={wrapClassName}>
            <Fade
              {...modalAttributes}
              {...modalTransition}
              in={isOpen}
              onEntered={this.onOpened}
              onExited={this.onClosed}
              className={classNames(modal, modalClassName)}
              innerRef={innerRef}
            >
              {external}
              {this.renderModalDialog()}
            </Fade>
            <Fade
              {...backdropTransition}
              in={isOpen && !!backdrop}
              className={classNames(
                modalBackdrop,
                backdropClassName,
                'fadeModalBackdrop',
              )}
            />
          </div>
        </Portal>
      );
    }

    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
