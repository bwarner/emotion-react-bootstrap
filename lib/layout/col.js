import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { col } from '@farvisionllc/emotion-bootstrap';
import { colWidths, widthMap, getColumnSizeClass } from '../utilities/grid';

const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

function Col(props) {
  const {
    className, widths, tag: Tag, ...attributes
  } = props;
  const colClasses = [];

  widths.forEach((colWidth) => {
    /* eslint-disable-next-line react/destructuring-assignment */
    const columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp || !widthMap[colWidth]) {
      return;
    }

    if (typeof columnProp === 'object') {
      [
        getColumnSizeClass('cols', colWidth, columnProp.size),
        getColumnSizeClass('offsets', colWidth, columnProp.offset),
        getColumnSizeClass('orders', colWidth, columnProp.order),
      ]
        .filter(Boolean)
        .forEach(c => colClasses.push(c));
    } else {
      const colClass = getColumnSizeClass('cols', colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  if (!colClasses.length) {
    colClasses.push(col);
  }

  const classes = classNames(colClasses, className);
  return <Tag {...attributes} className={classes} />;
}

Col.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  widths: PropTypes.array,
};

Col.defaultProps = {
  tag: 'div',
  widths: colWidths,
};

export default Col;
