import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '..';

const propTypes = {
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
};

const InputGroupButtonDropdown = props => <Dropdown {...props} />;

InputGroupButtonDropdown.propTypes = propTypes;

export default InputGroupButtonDropdown;
