import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'h5',
};

const ListGroupItemHeading = (props) => {
  const { tag: Tag, ...attributes } = props;

  return <Tag {...attributes} />;
};

ListGroupItemHeading.propTypes = propTypes;
ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading;
