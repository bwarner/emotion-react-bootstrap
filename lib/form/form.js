import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { formInline } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'form',
};

const Form = (props) => {
  const {
    className, inline, tag: Tag, innerRef, ...attributes
  } = props;

  const classes = [className, { [formInline]: inline }];
  return (
    <ClassNames>
      {({ cx }) => (
        <Tag {...attributes} ref={innerRef} className={cx(classes)} />
      )}
    </ClassNames>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
