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
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
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
    small,
    bordered,
    borderless,
    striped,
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
    small ? tableSm : false,
    bordered ? tableBordered : false,
    borderless ? table0 : false,
    striped ? tableStriped : false,
    dark ? tableDark : false,
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
