import PropTypes from 'prop-types';
/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/core';
import { badge, badgePill } from '@farvisionllc/emotion-bootstrap';
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
    className, color, pill, ...attributes
  } = props;
  let { tag: Tag } = props;
  const classes = [className, badge, badgeColor(color), { [badgePill]: pill }];

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }
  return (
    <ClassNames>
      {({ cx }) => <Tag {...attributes} className={cx(classes)} />}
    </ClassNames>
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export { Badge };
