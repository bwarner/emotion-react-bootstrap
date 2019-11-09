import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { row, noGutters } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  noGutters: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const Row = (props) => {
  const {
    className, noGutters: noGutterFlag, tag: Tag, ...attributes
  } = props;

  const classes = [className, { [noGutters]: noGutterFlag }, row];

  return (
    <ClassNames>
      {({ cx }) => <Tag {...attributes} className={cx(classes)} />}
    </ClassNames>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
