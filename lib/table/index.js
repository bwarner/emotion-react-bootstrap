import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  table,
  tableSm,
  tableBordered,
  table0,
  tableStriped,
  tableDark,
  tableHover,
} from 'emotion-bootstrap';
import { deprecated } from '../utilities';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
};

const Table = (props) => {
  const {
    className,
    cssModule,
    size,
    bordered,
    borderless,
    striped,
    inverse,
    dark,
    hover,
    responsive,
    tag: Tag,
    responsiveTag: ResponsiveTag,
    ...attributes
  } = props;

  const classes = cx(
    className,
    table,
    size ? tableSm : false,
    bordered ? tableBordered : false,
    borderless ? table0 : false,
    striped ? tableStriped : false,
    dark || inverse ? tableDark : false,
    hover ? tableHover : false,
  );

  const tableTag = <Tag {...attributes} className={classes} />;

  if (responsive) {
    const responsiveClassName =
      responsive === true
        ? 'table-responsive'
        : `table-responsive-${responsive}`;

    return (
      <ResponsiveTag className={responsiveClassName}>{tableTag}</ResponsiveTag>
    );
  }

  return tableTag;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
