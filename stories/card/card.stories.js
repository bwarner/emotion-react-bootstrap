import React from 'react';
import { actions } from '@storybook/addon-actions';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from '../../index';

const events = actions({ onClick: 'button onClick' });

const CardExample = () => (
  <div>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card&quot;s content.
        </CardText>
        <Button {...events}>Button</Button>
      </CardBody>
    </Card>
  </div>
);

export { CardExample as default };
