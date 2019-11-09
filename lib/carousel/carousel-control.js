/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import {
  carouselControlNext,
  carouselControlNextIcon,
  carouselControlPrev,
  carouselControlPrevIcon,
  srOnly,
} from '@farvisionllc/emotion-bootstrap';

const anchorMap = {
  next: carouselControlNext,
  prev: carouselControlPrev,
};

const iconMap = {
  next: carouselControlNextIcon,
  prev: carouselControlPrevIcon,
};

function handleKeyUp() {}

const CarouselControl = (props) => {
  const {
    direction,
    onClickHandler,
    directionText,
    className,
    onKeyUpHandler = handleKeyUp.bind(this),
  } = props;

  const anchorClasses = [className, anchorMap[direction]];

  const iconClasses = iconMap[direction];

  const screenReaderClasses = srOnly;

  return (
    <ClassNames>
      {({ cx }) => (
        <a
          role="button"
          className={cx(anchorClasses)}
          tabIndex="0"
          onClick={(e) => {
            e.preventDefault();
            onClickHandler();
          }}
          onKeyUp={onKeyUpHandler}
        >
          <span className={iconClasses} aria-hidden="true" />
          <span className={screenReaderClasses}>
            {directionText || direction}
          </span>
        </a>
      )}
    </ClassNames>
  );
};

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  onKeyUpHandler: PropTypes.func,
  directionText: PropTypes.string,
  className: PropTypes.string,
};

export default CarouselControl;
