/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  btnGroup,
  btnGroupVertical,
  btnGroupSm,
  btnGroupLg,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  vertical: PropTypes.bool,
};

const sizeMap = {
  sm: btnGroupSm,
  lg: btnGroupLg,
};

const defaultProps = {
  tag: 'div',
  role: 'group',
};

const ButtonGroup = (props) => {
  const {
    className, size, vertical, tag: Tag, ...attributes
  } = props;

  const classes = classNames(className, sizeMap[size]);
  const grouping = vertical ? btnGroupVertical : btnGroup;

  return <Tag {...attributes} css={[classes, grouping]} />;
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
