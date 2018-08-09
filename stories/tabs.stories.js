import React from 'react';
import classNames from 'classnames';
import { active } from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from '../lib';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames(
                this.state.activeTab === '1' ? active : null,
              )}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames(
                this.state.activeTab === '2' ? active : null,
              )}
              onClick={() => {
                this.toggle('2');
              }}
            >
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>
Tab 1 Contents
                </h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>
Special Title Treatment
                  </CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>
Go somewhere
                  </Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>
Special Title Treatment
                  </CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>
Go somewhere
                  </Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default [{ name: 'Simple', story: () => <Example /> }];
