/* globals document */
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  carousel,
  slide,
  carouselInner,
} from '@farvisionllc/emotion-bootstrap';
import CarouselItem from './carousel-item';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.hoverStart = this.hoverStart.bind(this);
    this.hoverEnd = this.hoverEnd.bind(this);
    this.state = {
      direction: 'right',
      indicatorClicked: false,
    };
  }

  getChildContext() {
    const { direction } = this.state;

    return { direction };
  }

  componentDidMount() {
    const { ride } = this.props;

    // Set up the cycle
    if (ride === 'carousel') {
      this.setInterval();
    }

    // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillReceiveProps(nextProps) {
    const { activeIndex } = this.props;
    const { indicatorClicked } = this.state;

    this.setInterval(nextProps);
    // Calculate the direction to turn
    if (activeIndex + 1 === nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else if (activeIndex - 1 === nextProps.activeIndex) {
      this.setState({ direction: 'left' });
    } else if (activeIndex > nextProps.activeIndex) {
      this.setState({
        direction: indicatorClicked ? 'left' : 'right',
      });
    } else if (activeIndex !== nextProps.activeIndex) {
      this.setState({
        direction: indicatorClicked ? 'right' : 'left',
      });
    }
    this.setState({ indicatorClicked: false });
  }

  componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  setInterval(props = this.props) {
    // make sure not to have multiple intervals going...
    this.clearInterval();
    if (props.interval) {
      this.cycleInterval = setInterval(() => {
        props.next();
      }, parseInt(props.interval, 10));
    }
  }

  clearInterval() {
    clearInterval(this.cycleInterval);
  }

  hoverStart(...args) {
    const { pause, mouseEnter } = this.props;

    if (pause === 'hover') {
      this.clearInterval();
    }
    if (mouseEnter) {
      mouseEnter(...args);
    }
  }

  hoverEnd(...args) {
    const { pause, mouseLeave } = this.props;

    if (pause === 'hover') {
      this.setInterval();
    }
    if (mouseLeave) {
      mouseLeave(...args);
    }
  }

  handleKeyPress(evt) {
    const { keyboard, previous, next } = this.props;

    if (keyboard) {
      if (evt.keyCode === 37) {
        previous();
      } else if (evt.keyCode === 39) {
        next();
      }
    }
  }

  renderItems(carouselItems, className) {
    const { slide: slideProp, activeIndex } = this.props;
    return (
      <div role="listbox" className={className}>
        {carouselItems.map((item, index) => {
          const isIn = index === activeIndex;
          return React.cloneElement(item, {
            in: isIn,
            slideProp,
          });
        })}
      </div>
    );
  }

  render() {
    const { slide: slideProp, className, children: childrenProp } = this.props;
    const outerClasses = cx(className, carousel, slideProp && slide);

    const innerClasses = cx(carouselInner);

    // filter out booleans, null, or undefined
    const children = childrenProp.filter(
      child => child !== null && child !== undefined && typeof child !== 'boolean',
    );

    const slidesOnly = children.every(child => child.type === CarouselItem);

    // Rendering only slides
    if (slidesOnly) {
      return (
        <div
          className={outerClasses}
          onMouseEnter={this.hoverStart}
          onMouseLeave={this.hoverEnd}
        >
          {this.renderItems(children, innerClasses)}
        </div>
      );
    }

    // Rendering slides and controls
    if (children[0] instanceof Array) {
      const carouselItems = children[0];
      const controlLeft = children[1];
      const controlRight = children[2];

      return (
        <div
          className={outerClasses}
          onMouseEnter={this.hoverStart}
          onMouseLeave={this.hoverEnd}
        >
          {this.renderItems(carouselItems, innerClasses)}
          {controlLeft}
          {controlRight}
        </div>
      );
    }

    // Rendering indicators, slides and controls
    const indicators = children[0];
    const wrappedOnClick = (e) => {
      if (typeof indicators.props.onClickHandler === 'function') {
        this.setState({ indicatorClicked: true }, () => {
          indicators.props.onClickHandler(e);
        });
      }
    };
    const wrappedIndicators = React.cloneElement(indicators, {
      onClickHandler: wrappedOnClick,
    });
    const carouselItems = children[1];
    const controlLeft = children[2];
    const controlRight = children[3];

    return (
      <div
        className={outerClasses}
        onMouseEnter={this.hoverStart}
        onMouseLeave={this.hoverEnd}
      >
        {wrappedIndicators}
        {this.renderItems(carouselItems, innerClasses)}
        {controlLeft}
        {controlRight}
      </div>
    );
  }
}

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  className: PropTypes.string,
};

Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
};

Carousel.childContextTypes = {
  direction: PropTypes.string,
};

export default Carousel;
