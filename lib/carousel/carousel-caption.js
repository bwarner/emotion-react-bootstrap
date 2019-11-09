/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import {
  carouselCaption,
  dNone,
  dMdBlock,
} from '@farvisionllc/emotion-bootstrap';

const CarouselCaption = (props) => {
  const { captionHeader, captionText, className } = props;
  const classes = [className, carouselCaption, dNone, dMdBlock];

  return (
    <ClassNames>
      {({ cx }) => (
        <div className={cx(classes)}>
          <h3>{captionHeader}</h3>
          <p>{captionText}</p>
        </div>
      )}
    </ClassNames>
  );
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes.string,
  captionText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CarouselCaption;
