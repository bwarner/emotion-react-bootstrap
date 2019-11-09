import { Component } from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import { jumbotron, jumbotronFluid } from '@farvisionllc/emotion-bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

export default class Jumbotron extends Component {
  render() {
    const {
      className, tag: Tag, fluid, ...attributes
    } = this.props;

    const classes = [className, jumbotron, { [jumbotronFluid]: fluid }];

    return (
      <ClassNames>
        {({ cx }) => <Tag {...attributes} className={cx(classes)} />}
      </ClassNames>
    );
  }
}

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;
