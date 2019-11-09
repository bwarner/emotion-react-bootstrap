/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import PropTypes from 'prop-types';
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

  const listClasses = [className, carouselIndicators];

  return (
    <ClassNames>
      {({ cx }) => (
        <ol className={cx(listClasses)}>
          {items.map((item, idx) => (
            <li
              key={`${item.key || item.src}${item.caption}${item.altText}`}
              className={cx(`${activeIndex === idx ? active : ''}`)}
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
          ))}
        </ol>
      )}
    </ClassNames>
  );
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
