import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { carouselIndicators, active } from '@farvisionllc/emotion-bootstrap';

const CarouselIndicators = (props) => {
  const {
    items, activeIndex, onClickHandler, className,
  } = props;

  const listClasses = cx(className, carouselIndicators);

  const indicators = items.map((item, idx) => (
    <li
      key={`${item.key || item.src}${item.caption}${item.altText}`}
      onClick={(e) => {
        e.preventDefault();
        onClickHandler(idx);
      }}
      className={`${activeIndex === idx ? active : ''}`}
    />
  ));

  return (
    <ol className={listClasses}>
      {indicators}
    </ol>
  );
};

CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CarouselIndicators;
