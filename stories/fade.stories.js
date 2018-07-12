import React from 'react';
import { Button } from '../lib/button';
import Fade from '../lib/fade';

const FadeStory = () => (
  <div>
    <Button color="primary" onClick>
      Toggle Fade
    </Button>
    <Fade in="true" appear="true" tag="div" className="mt3">
      This content will fade in and out as the button is pressed
    </Fade>
  </div>
);

export { FadeStory };
