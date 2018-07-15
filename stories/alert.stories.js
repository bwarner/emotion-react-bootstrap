import React, { Component } from 'react';
import Alert from '../lib/alert';
import AlertLink from '../lib/alert/alert-link';

const SimpleAlertStory = () => (
  <Alert className="alert">
This is a simple alert with some text.
  </Alert>
);

function ColorsAlertStory() {
  return (
    <div>
      <Alert className="alert" color="primary">
        This is a primary alert with some text.
      </Alert>
      <Alert className="alert" color="secondary">
        This is a secondary alert with some text.
      </Alert>
      <Alert className="alert" color="success">
        This is a success alert with some text.
      </Alert>
      <Alert className="alert" color="danger">
        This is a danger alert with some text.
      </Alert>
      <Alert className="alert" color="warning">
        This is a warning alert with some text.
      </Alert>
      <Alert className="alert" color="info">
        This is a info alert with some text.
      </Alert>
      <Alert className="alert" color="light">
        This is a light alert with some text.
      </Alert>
      <Alert className="alert" color="dark">
        This is a dark alert with some text.
      </Alert>
    </div>
  );
}

const AlertContentStory = () => (
  <Alert className="alert" color="success">
    <h4 className="alert-heading">Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within
      an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice
      and tidy.
    </p>
  </Alert>
);

const AlertWithLinkStory = () => (
  <Alert className="alert">
    This is a primary alert with
    {' '}
    <AlertLink href="http://www.healthline.com">
an example link
    </AlertLink>
    . Give it a click if you like.
  </Alert>
);

class AlertWithDismiss extends Component {
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
      >
        This is a primary alert dismissible.
      </Alert>
    );
  }
}

const AlertDismissStory = () => <AlertWithDismiss />;

export {
  SimpleAlertStory,
  ColorsAlertStory,
  AlertContentStory,
  AlertWithLinkStory,
  AlertDismissStory,
};
