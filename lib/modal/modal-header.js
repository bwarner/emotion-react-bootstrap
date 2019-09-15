import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  close,
  modalHeader,
  modalTitle,
} from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
};

const defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
};

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    closeAriaLabel,
    ...attributes
  } = props;

  const classes = cx(className, modalHeader);

  if (toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className={close}
        aria-label={closeAriaLabel}
      >
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={modalTitle}>{children}</Tag>
      {closeButton}
    </WrapTag>
  );
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
