import React from 'react';
import Alert from '../lib/alert';
import AlertLink from '../lib/alert/alert-link';

const SimpleAlertStory = () => (
  <Alert className="alert">This is a simple alert with some text.</Alert>
);

const SuccessAlertStory = () => (
  <Alert className="alert" color="success">
    This is a success alert with some text.
  </Alert>
);

const AlertWithLinkStory = () => (
  <Alert className="alert">
    This is a primary alert with{' '}
    <AlertLink href="http://www.healthline.com">an example link</AlertLink>.
    Give it a click if you like.
  </Alert>
);

let isOpenAlert = true;
function onDismiss() {
  isOpenAlert = !isOpenAlert;
}

const AlertDismissStory = () => (
  <Alert className="alert" isOpen={isOpenAlert} toggle={onDismiss}>
    This is a primary alert dismissible.
  </Alert>
);

export {
  SimpleAlertStory,
  SuccessAlertStory,
  AlertWithLinkStory,
  AlertDismissStory,
};
