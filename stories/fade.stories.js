import React from 'react';
import { Button } from '../lib/button';
import Fade from '../lib/fade';

// constructor(props) {
//     super(props);
//     this.state = { fadeIn: true };
//     this.toggle = this.toggle.bind(this);
// }

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

// toggle() {
//     this.setState({
//         fadeIn: !this.state.fadeIn
//     });
// }

export { FadeStory };
