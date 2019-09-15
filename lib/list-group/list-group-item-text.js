import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
};

const defaultProps = {
  tag: 'p',
};

const ListGroupItemText = (props) => {
  const { tag: Tag, ...attributes } = props;

  return <Tag {...attributes} />;
};

ListGroupItemText.propTypes = propTypes;
ListGroupItemText.defaultProps = defaultProps;

export default ListGroupItemText;
