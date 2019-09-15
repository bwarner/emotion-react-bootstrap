/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { carouselIndicators, active } from '@farvisionllc/emotion-bootstrap';

function handleKeyUp() {}

const CarouselIndicators = (props) => {
  const {
    items,
    activeIndex,
    onClickHandler,
    className,
    onKeyUpHandler = handleKeyUp.bind(this),
  } = props;

  const listClasses = cx(className, carouselIndicators);

  const indicators = items.map((item, idx) => (
    <li
      key={`${item.key || item.src}${item.caption}${item.altText}`}
      className={`${activeIndex === idx ? active : ''}`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onClickHandler(idx);
        }}
        onKeyUp={onKeyUpHandler}
      />
    </li>
  ));

  return <ol className={listClasses}>{indicators}</ol>;
};

CarouselIndicators.defaultProps = {
  onKeyUpHandler: () => {},
};

CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  onKeyUpHandler: PropTypes.func,
  className: PropTypes.string,
};

export default CarouselIndicators;
