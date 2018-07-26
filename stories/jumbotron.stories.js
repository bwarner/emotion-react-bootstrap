import React from 'react';
import { lead, display3, my2 } from '@farvisionllc/emotion-bootstrap';
import Jumbotron from '../lib/jumbotron';
import Container from '../lib/layout/container';
import { Button } from '../lib/button';

function JumbotronExample1() {
  return (
    <Jumbotron>
      <h1 className={display3}>
Hello, world!
      </h1>
      <p className={lead}>
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className={my2} />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className={lead}>
        <Button color="primary">
Learn More
        </Button>
      </p>
    </Jumbotron>
  );
}

function JumbotronFluid() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className={display3}>
Fluid jumbotron
        </h1>
        <p className={lead}>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default [
  { name: 'Example', story: JumbotronExample1 },
  { name: 'Fluid', story: JumbotronFluid },
];
