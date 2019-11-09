import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { listGroup, listGroupFlush } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'ul',
};

const ListGroup = (props) => {
  const {
    className, tag: Tag, flush, ...attributes
  } = props;
  const classes = [className, listGroup, { [listGroupFlush]: flush }];

  return (
    <ClassNames>
      {({ cx }) => <Tag {...attributes} className={cx(classes)} />}
    </ClassNames>
  );
};

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
