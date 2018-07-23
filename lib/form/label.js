import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { col } from '@farvisionllc/emotion-bootstrap';
import { colWidths, widthMap, getColumnSizeClass } from '../utilities/grid';

const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    size: stringOrNumberProp,
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

const propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: PropTypes.array,
};

const defaultProps = {
  tag: 'label',
  widths: colWidths,
};

const Label = (props) => {
  const {
    className,
    hidden,
    widths,
    tag: Tag,
    check,
    size,
    for: htmlFor,
    ...attributes
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

  const classes = cx(
    className,
    hidden ? 'sr-only' : false,
    check ? 'form-check-label' : false,
    size ? `col-form-label-${size}` : false,
    colClasses,
    colClasses.length ? 'col-form-label' : false,
  );

  return <Tag htmlFor={htmlFor} {...attributes} className={classes} />;
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
