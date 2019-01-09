import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { col } from '@farvisionllc/emotion-bootstrap';
import { colWidths, widthMap, getColumnSizeClass } from '../utilities/grid';

const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const columnPropss = PropTypes.oneOfType([
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
    const columnProps = props[colWidth];

    delete attributes[colWidth];

    if (!columnProps || !widthMap[colWidth]) {
      return;
    }

    if (typeof columnProps === 'object') {
      [
        getColumnSizeClass('cols', colWidth, columnProps.size),
        getColumnSizeClass('offsets', colWidth, columnProps.offset),
        getColumnSizeClass('orders', colWidth, columnProps.order),
      ]
        .filter(Boolean)
        .forEach(c => colClasses.push(c));
    } else {
      const colClass = getColumnSizeClass('cols', colWidth, columnProps);
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
  xs: columnPropss,
  sm: columnPropss,
  md: columnPropss,
  lg: columnPropss,
  xl: columnPropss,
  className: PropTypes.string,
  widths: PropTypes.array,
};

Col.defaultProps = {
  tag: 'div',
  widths: colWidths,
};

export default Col;
