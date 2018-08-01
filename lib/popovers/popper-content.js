/* globals document */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Arrow, Popper as ReactPopper } from 'react-popper';
import { getTarget, DOMElement } from '../utilities';
import {
  bsPopoverAuto,
  bsPopoverBottom,
  bsPopoverLeft,
  bsPopoverRight,
  bsPopoverTop,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  tag: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    DOMElement,
  ]),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement])
    .isRequired,
  modifiers: PropTypes.object,
};

const defaultProps = {
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
};

const childContextTypes = {
  popperManager: PropTypes.object.isRequired,
};

const placementMap = {
  auto: bsPopoverAuto,
  bottom: bsPopoverBottom,
  left: bsPopoverLeft,
  right: bsPopoverRight,
  top: bsPopoverTop,
};

class PopperContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return {
      popperManager: {
        setTargetNode: this.setTargetNode,
        getTargetNode: this.getTargetNode,
      },
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    } else if (this._element) {
      // rerender
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.hide();
  }

  setTargetNode = node => {
    this.targetNode = node;
  };

  getTargetNode = () => {
    return this.targetNode;
  };

  getContainerNode() {
    return getTarget(this.props.container);
  }

  handlePlacementChange = data => {
    if (this.state.placement !== data.placement) {
      this.setState({ placement: data.placement });
    }
    return data;
  };

  handleProps() {
    if (this.props.container !== 'inline') {
      if (this.props.isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  hide() {
    if (this._element) {
      this.getContainerNode().removeChild(this._element);
      ReactDOM.unmountComponentAtNode(this._element);
      this._element = null;
    }
  }

  show() {
    this._element = document.createElement('div');
    this.getContainerNode().appendChild(this._element);
    this.renderIntoSubtree();
    if (
      this._element.childNodes &&
      this._element.childNodes[0] &&
      this._element.childNodes[0].focus
    ) {
      this._element.childNodes[0].focus();
    }
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element,
    );
  }

  renderChildren() {
    const {
      children,
      isOpen,
      flip,
      target,
      offset,
      fallbackPlacement,
      placementPrefix,
      arrowClassName: _arrowClassName,
      hideArrow,
      className,
      tag,
      container,
      modifiers,
      boundariesElement,
      ...attrs
    } = this.props;
    const arrowClassName = classNames('arrow', _arrowClassName);
    const placement = this.state.placement || attrs.placement;
    const popperClassName = classNames(className, placementMap[placement]);

    const extendedModifiers = {
      offset: { offset },
      flip: { enabled: flip, behavior: fallbackPlacement },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange,
      },
      ...modifiers,
    };

    return (
      <ReactPopper
        modifiers={extendedModifiers}
        {...attrs}
        component={tag}
        className={popperClassName}
        x-placement={placement}
      >
        {children}
        {!hideArrow && <Arrow className={arrowClassName} />}
      </ReactPopper>
    );
  }

  render() {
    this.setTargetNode(getTarget(this.props.target));

    if (this.props.container === 'inline') {
      return this.props.isOpen ? this.renderChildren() : null;
    }

    return null;
  }
}

PopperContent.propTypes = propTypes;
PopperContent.defaultProps = defaultProps;
PopperContent.childContextTypes = childContextTypes;

export default PopperContent;
