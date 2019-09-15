import React from 'react';
import styled from 'react-emotion';
import { Container, Row, Col } from '../lib';

const BlueCol = styled(Col)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: #e5edf5;
  border: 1px solid #c9c1d5;
  color: #5f5f5f;
`;

const LayoutStory = () => (
  <Container>
    <Row>
      <BlueCol>
.col
      </BlueCol>
    </Row>
    <Row>
      <BlueCol>
.col
      </BlueCol>
      <BlueCol>
.col
      </BlueCol>
      <BlueCol>
.col
      </BlueCol>
      <BlueCol>
.col
      </BlueCol>
    </Row>
    <Row>
      <BlueCol xs="3">
.col-3
      </BlueCol>
      <BlueCol xs="auto">
.col-auto - variable width content
      </BlueCol>
      <BlueCol xs="3">
.col-3
      </BlueCol>
    </Row>
    <Row>
      <BlueCol xs="6">
.col-6
      </BlueCol>
      <BlueCol xs="6">
.col-6
      </BlueCol>
    </Row>
    <Row>
      <BlueCol xs="6" sm="4">
        .col-6 .col-sm-4
      </BlueCol>
      <BlueCol xs="6" sm="4">
        .col-6 .col-sm-4
      </BlueCol>
      <BlueCol sm="4">
.col-sm-4
      </BlueCol>
    </Row>
    <Row>
      <BlueCol sm={{ size: 6, order: 2, offset: 1 }}>
        .col-sm-6 .col-sm-order-2 .col-sm-offset-2
      </BlueCol>
    </Row>
    <Row>
      <BlueCol sm="12" md={{ size: 8, offset: 2 }}>
        .col-sm-12 .col-md-6 .col-md-offset-3
      </BlueCol>
    </Row>
    <Row>
      <BlueCol sm={{ size: 'auto', offset: 1 }}>
        .col-sm .col-sm-offset-1
      </BlueCol>
      <BlueCol sm={{ size: 'auto', offset: 1 }}>
        .col-sm .col-sm-offset-1
      </BlueCol>
    </Row>
  </Container>
);

export default LayoutStory;
