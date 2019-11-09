import { Component } from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { pageLink } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'a',
};

export default class PaginationLink extends Component {
  render() {
    const {
      className,
      next,
      previous,
      'aria-label': ariaLabelProp,
      tag: TagProp,
      ...attributes
    } = this.props;

    let Tag = TagProp;

    const classes = [className, pageLink];

    let defaultAriaLabel;
    if (previous) {
      defaultAriaLabel = 'Previous';
    } else if (next) {
      defaultAriaLabel = 'Next';
    }
    const ariaLabel = ariaLabelProp || defaultAriaLabel;

    let defaultCaret;
    if (previous) {
      defaultCaret = '\u00ab';
    } else if (next) {
      defaultCaret = '\u00bb';
    }

    let { children } = this.props;
    if (children && Array.isArray(children) && children.length === 0) {
      children = null;
    }

    if (!attributes.href && TagProp === 'a') {
      Tag = 'button';
    }

    if (previous || next) {
      children = [
        <span aria-hidden="true" key="caret">
          {children || defaultCaret}
        </span>,
        <span className="sr-only" key="sr">
          {ariaLabel}
        </span>,
      ];
    }

    return (
      <ClassNames>
        {({ cx }) => (
          <Tag {...attributes} className={cx(classes)} aria-label={ariaLabel}>
            {children}
          </Tag>
        )}
      </ClassNames>
    );
  }
}

PaginationLink.propTypes = propTypes;
PaginationLink.defaultProps = defaultProps;
