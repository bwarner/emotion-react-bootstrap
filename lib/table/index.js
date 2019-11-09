import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import {
  table,
  tableSm,
  tableBordered,
  table0,
  tableStriped,
  tableDark,
  tableHover,
  tableResponsive,
  tableResponsiveLg,
  tableResponsiveMd,
  tableResponsiveSm,
  tableResponsiveXl,
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

function getTableResponsive(size) {
  switch (size) {
    case 'sm':
      return tableResponsiveSm;
    case 'md':
      return tableResponsiveMd;
    case 'lg':
      return tableResponsiveLg;
    case 'xl':
      return tableResponsiveXl;
    case 'xs':
      return tableResponsive;
    default:
      return '';
  }
}
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

  const classes = [
    className,
    table,
    {
      [tableSm]: small,
      [tableBordered]: bordered,
      [table0]: borderless,
      [tableStriped]: striped,
      [tableDark]: dark,
      [tableHover]: hover,
    },
  ];

  const tableTag = (
    <ClassNames>
      {({ cx }) => <Tag {...attributes} className={cx(classes)} />}
    </ClassNames>
  );

  if (responsive) {
    const responsiveClassName =
      responsive === true ? tableResponsive : getTableResponsive(responsive);

    return (
      <ClassNames>
        {({ cx }) => (
          <ResponsiveTag className={cx(responsiveClassName)}>
            {tableTag}
          </ResponsiveTag>
        )}
      </ClassNames>
    );
  }

  return tableTag;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
