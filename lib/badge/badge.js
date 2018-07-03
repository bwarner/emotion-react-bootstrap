import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { badge, badgePill } from 'emotion-bootstrap';
import { badgeColor } from '../utilities';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span',
};

const Badge = (props) => {
  const {
    className,
    color,
    pill,
    ...attributes
  } = props;
  let {
    tag: Tag,
  } = props;
  const classes = cx(
    className,
    badge,
    badgeColor(color),
    pill ? badgePill : false,
  );

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return (
    <Tag {...attributes} className={classes} />
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export { Badge };
