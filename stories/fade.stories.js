import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Button } from '../lib/button';
import Fade from '../lib/fade';

const FadeStory = () => (
  <div>
    <Button color="primary" {...actions('onClick')}>
      Toggle Fade
    </Button>
    <Fade in appear tag="div" className="mt3">
      This content will fade in and out as the button is pressed
    </Fade>
  </div>
);

export { FadeStory };
