import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  listGroup,
  listGroupFlush,
} from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

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
  const classes = cx(className, listGroup, flush ? listGroupFlush : false);

  return <Tag {...attributes} className={classes} />;
};

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
