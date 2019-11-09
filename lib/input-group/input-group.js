import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import {
  inputGroupLg,
  inputGroupSm,
  inputGroup,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.oneOf(['lg', 'sm']),
  className: PropTypes.string,
};

const sizeMap = {
  lg: inputGroupLg,
  sm: inputGroupSm,
};

const defaultProps = {
  tag: 'div',
};

const InputGroup = (props) => {
  const {
    className, tag: Tag, size, ...attributes
  } = props;
  const classes = [className, sizeMap[size], inputGroup];
  return (
    <ClassNames>
      {({ cx }) => <Tag {...attributes} className={`${cx(classes)}`} />}
    </ClassNames>
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
