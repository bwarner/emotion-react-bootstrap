import React from 'react';
import Alert from '../lib/alert';

const SimpleAlertStory = () => (
  <Alert className="alert">
    This is a primary alert with
    <a href="http://www.healthline.com" className="alert-link">
      an example link
    </a>. Give it a click if you like.
  </Alert>
);

const SuccessAlertStory = () => (
  <Alert className="alert" color="success">
    Hello from alert stories
  </Alert>
);

export { SimpleAlertStory, SuccessAlertStory };
