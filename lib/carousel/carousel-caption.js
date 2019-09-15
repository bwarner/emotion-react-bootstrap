import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  carouselCaption,
  dNone,
  dMdBlock,
} from '@farvisionllc/emotion-bootstrap';

const CarouselCaption = (props) => {
  const { captionHeader, captionText, className } = props;
  const classes = cx(className, carouselCaption, dNone, dMdBlock);

  return (
    <div className={classes}>
      <h3>{captionHeader}</h3>
      <p>{captionText}</p>
    </div>
  );
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes.string,
  captionText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CarouselCaption;
