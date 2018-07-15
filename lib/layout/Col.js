import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import {
  colXl,
  colXl1,
  colXl2,
  colXl3,
  colXl4,
  colXl5,
  colXl6,
  colXl7,
  colXl8,
  colXl9,
  colXl10,
  colXl11,
  colXl12,
  colLg,
  colLg1,
  colLg2,
  colLg3,
  colLg4,
  colLg5,
  colLg6,
  colLg7,
  colLg8,
  colLg9,
  colLg10,
  colLg11,
  colLg12,
  colMd,
  colMd1,
  colMd2,
  colMd3,
  colMd4,
  colMd5,
  colMd6,
  colMd7,
  colMd8,
  colMd9,
  colMd10,
  colMd11,
  colMd12,
  colSm,
  colSm1,
  colSm2,
  colSm3,
  colSm4,
  colSm5,
  colSm6,
  colSm7,
  colSm8,
  colSm9,
  colSm10,
  colSm11,
  colSm12,
  col,
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  col10,
  col11,
  col12,
  order0,
  order1,
  order2,
  order3,
  order4,
  order5,
  order6,
  order7,
  order8,
  order9,
  order10,
  order11,
  order12,
  offset1,
  offset2,
  offset3,
  offset4,
  offset5,
  offset6,
  offset7,
  offset8,
  offset9,
  offset10,
  offset11,
  colAuto,
  colSmAuto,
  colMdAuto,
  colLgAuto,
  colXlAuto,
} from 'emotion-bootstrap';

const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

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

const colX = [
  col,
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  col10,
  col11,
  col12,
];

const colSmX = [
  colSm,
  colSm1,
  colSm2,
  colSm3,
  colSm4,
  colSm5,
  colSm6,
  colSm7,
  colSm8,
  colSm9,
  colSm10,
  colSm11,
  colSm12,
];

const colMdX = [
  colMd,
  colMd1,
  colMd2,
  colMd3,
  colMd4,
  colMd5,
  colMd6,
  colMd7,
  colMd8,
  colMd9,
  colMd10,
  colMd11,
  colMd12,
];

const colLgX = [
  colLg,
  colLg1,
  colLg2,
  colLg3,
  colLg4,
  colLg5,
  colLg6,
  colLg7,
  colLg8,
  colLg9,
  colLg10,
  colLg11,
  colLg12,
];

const colXlX = [
  colXl,
  colXl1,
  colXl2,
  colXl3,
  colXl4,
  colXl5,
  colXl6,
  colXl7,
  colXl8,
  colXl9,
  colXl10,
  colXl11,
  colXl12,
];

const orderX = [
  order0,
  order1,
  order2,
  order3,
  order4,
  order5,
  order6,
  order7,
  order8,
  order9,
  order10,
  order11,
  order12,
];

const offsetX = [
  undefined,
  offset1,
  offset2,
  offset3,
  offset4,
  offset5,
  offset6,
  offset7,
  offset8,
  offset9,
  offset10,
  offset11,
];

const widthMap = {
  xs: {
    auto: colAuto,
    cols: colX,
    offsets: offsetX,
    orders: orderX,
  },
  sm: {
    auto: colSmAuto,
    offsets: offsetX,
    orders: orderX,
    cols: colSmX,
  },
  md: {
    auto: colMdAuto,
    offsets: offsetX,
    orders: orderX,
    cols: colMdX,
  },
  lg: {
    auto: colLgAuto,
    offsets: offsetX,
    orders: orderX,
    cols: colLgX,
  },
  xl: {
    auto: colXlAuto,
    offsets: offsetX,
    orders: orderX,
    cols: colXlX,
  },
};

const getColumnSizeClass = (name, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return widthMap[colWidth][name][0];
  }
  if (colSize === 'auto') {
    return widthMap[colWidth].auto;
  }

  return widthMap[colWidth][name][colSize];
};

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
        getColumnSizeClass('offsets', colWidth, columnProp.size),
        getColumnSizeClass('orders', colWidth, columnProp.size),
        getColumnSizeClass('cols', colWidth, columnProp.size),
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

  const classes = cx(colClasses, className);
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
