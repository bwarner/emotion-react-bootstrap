import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { container, containerFluid } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const Container = (props) => {
  const {
    className, fluid, tag: Tag, ...attributes
  } = props;

  const classes = [className, fluid ? containerFluid : container];

  return (
    <ClassNames>
      {({ cx }) => <Tag {...attributes} className={cx(classes)} />}
    </ClassNames>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
