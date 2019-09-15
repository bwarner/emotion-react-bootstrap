import React from 'react';
import { actions } from '@storybook/addon-actions';
import {
  Card, Button, CardTitle, CardText,
} from '../../index';

const events = actions({ onClick: 'button onClick' });
const Example = () => (
  <div>
    <Card body>
      <CardTitle>
Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button {...events}>
Go somewhere
      </Button>
    </Card>
    <Card body className="text-center">
      <CardTitle>
Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button {...events}>
Go somewhere
      </Button>
    </Card>
    <Card body className="text-right">
      <CardTitle>
Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button {...events}>
Go somewhere
      </Button>
    </Card>
  </div>
);

export default Example;
