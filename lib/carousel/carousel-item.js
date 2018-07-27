/* globals CustomEvent */
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { cx } from 'emotion';
import {
  carouselItem,
  active,
  carouselItemNext,
  carouselItemPrev,
} from '@farvisionllc/emotion-bootstrap';
import { TransitionTimeouts, TransitionStatuses } from '../utilities';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startAnimation: false,
    };

    this.onEnter = this.onEnter.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onEnter(node, isAppearing) {
    const { onEnter } = this.props;

    this.setState({ startAnimation: false });
    onEnter(node, isAppearing);
  }

  onEntering(node, isAppearing) {
    const { onEntering } = this.props;
    const { offsetHeight: offsetHeightFromNode } = node.offsetHeight;

    // getting this variable triggers a reflow
    const offsetHeight = offsetHeightFromNode;
    this.setState({ startAnimation: true });
    onEntering(node, isAppearing);
    return offsetHeight;
  }

  onExit(node) {
    const { onExit } = this.props;

    this.setState({ startAnimation: false });
    onExit(node);
  }

  onExiting(node) {
    const { onExiting } = this.props;

    this.setState({ startAnimation: true });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    onExiting(node);
  }

  onExited(node) {
    const { onExited } = this.props;

    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    onExited(node);
  }

  render() {
    const {
      in: isIn,
      children,
      slide,
      tag: Tag,
      className,
      ...transitionProps
    } = this.props;

    const { startAnimation } = this.state;

    return (
      <Transition
        {...transitionProps}
        enter={slide}
        exit={slide}
        in={isIn}
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        {(status) => {
          const { direction } = this.context;
          const isActive =
            status === TransitionStatuses.ENTERED
            || status === TransitionStatuses.EXITING;
          const directionClassName =
            (status === TransitionStatuses.ENTERING
              || status === TransitionStatuses.EXITING)
            && startAnimation
            && (direction === 'right'
              ? 'carousel-item-left'
              : 'carousel-item-right');
          const orderClassName =
            status === TransitionStatuses.ENTERING
            && (direction === 'right' ? carouselItemNext : carouselItemPrev);
          const itemClasses = cx(className, carouselItem, orderClassName);

          return (
            <Tag
              className={`${itemClasses} ${
                isActive ? active : ''
              } ${directionClassName || ''} `}
            >
              {children}
            </Tag>
          );
        }}
      </Transition>
    );
  }
}

CarouselItem.propTypes = {
  ...Transition.propTypes,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  in: PropTypes.bool,
  children: PropTypes.node,
  slide: PropTypes.bool,
  className: PropTypes.string,
};

CarouselItem.defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true,
};

CarouselItem.contextTypes = {
  direction: PropTypes.string,
};

export default CarouselItem;
