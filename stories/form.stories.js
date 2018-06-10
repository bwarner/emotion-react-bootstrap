import { action } from '@storybook/addon-actions';
import React from 'react';
import { Button, Input, FormGroup } from '../lib/form';
import { Container, Row, Col } from '../lib/layout';

export default function story() {
  return (
    <Container>
      <Row>
        <Col xs={{ offset: 1, size: 4 }}>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              action('submit');
            }}
          >
            <FormGroup action="/foo.ation" noValidate>
              <div>
                <label htmlFor="number">
                  Number<Input id="number" name="number" type="type" />
                </label>
              </div>
            </FormGroup>
            <Button onClick={action('click')} type="submit">
              Primary
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
