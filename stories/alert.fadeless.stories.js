import React, { Component } from 'react';
import Alert from '../lib/alert';

class AlertWithDismissFadeless extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAlert: true,
    };
  }

  handleDismissClick = () => {
    const { isOpenAlert } = this.state;
    if (isOpenAlert) {
      this.setState({ isOpenAlert: false });
    }
  };

  render() {
    const { isOpenAlert } = this.state;
    return (
      <Alert
        className="alert"
        isOpen={isOpenAlert}
        toggle={this.handleDismissClick}
        fade={false}
      >
        This is a primary alert dismissible.
      </Alert>
    );
  }
}

const AlertFadelessStory = () => <AlertWithDismissFadeless />;

export { AlertFadelessStory };
