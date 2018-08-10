import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash.omit';
import { tabContent } from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const childContextTypes = {
  activeTabId: PropTypes.any,
};

class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
    };
  }

  getChildContext() {
    return {
      activeTabId: this.state.activeTab,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab,
      };
    }
    return null;
  }

  render() {
    const { className, tag: Tag } = this.props;

    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = classNames(tabContent, className);

    return <Tag {...attributes} className={classes} />;
  }
}

export default TabContent;

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
TabContent.childContextTypes = childContextTypes;
