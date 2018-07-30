/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { btn, btnGroup } from '@farvisionllc/emotion-bootstrap';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from '../index';

function sharedToggle() {
  const { modal } = this.state;
  this.setState({
    modal: !modal,
  });
}

const propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: undefined,
};

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = sharedToggle.bind(this);
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
ModalExample.propTypes = propTypes;
ModalExample.defaultProps = defaultProps;

class ModalBackdropExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
    };

    this.toggle = sharedToggle.bind(this);
  }

  changeBackdrop = (e) => {
    let { value } = e.target;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  };

  render() {
    return (
      <div>
        <Form inline onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="backdrop">
Backdrop value
            </Label>
            {' '}
            <Input
              type="select"
              name="backdrop"
              id="backdrop"
              onChange={this.changeBackdrop}
            >
              <option value="true">
true
              </option>
              <option value="false">
false
              </option>
              <option value="static">
&quot;static&quot;
              </option>
            </Input>
          </FormGroup>
          {' '}
          <Button color="danger" onClick={this.toggle}>
            {this.props.buttonLabel}
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <ModalHeader toggle={this.toggle}>
Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
ModalBackdropExample.propTypes = propTypes;
ModalBackdropExample.defaultProps = defaultProps;

class ModalCustomTimeoutExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = sharedToggle.bind(this);
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
ModalCustomTimeoutExample.propTypes = propTypes;
ModalCustomTimeoutExample.defaultProps = defaultProps;

class ModalExternalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = sharedToggle.bind(this);
  }

  render() {
    const externalCloseBtn = (
      <button
        type="button"
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalHeader>
Modal title
          </ModalHeader>
          <ModalBody>
            <b>
Look at the top right of the page/viewport!
            </b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
ModalExternalExample.propTypes = propTypes;
ModalExternalExample.defaultProps = defaultProps;

class ModalFadelessExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = sharedToggle.bind(this);
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
ModalFadelessExample.propTypes = propTypes;
ModalFadelessExample.defaultProps = defaultProps;

class ModalNestedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
    };

    this.toggle = sharedToggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggleNested() {
    const { nestedModal } = this.state;
    this.setState({
      nestedModal: !nestedModal,
      closeAll: false,
    });
  }

  toggleAll() {
    const { nestedModal } = this.state;
    this.setState({
      nestedModal: !nestedModal,
      closeAll: true,
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <Button color="success" onClick={this.toggleNested}>
              Show Nested Model
            </Button>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>
Nested Modal title
              </ModalHeader>
              <ModalBody>
Stuff and things
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>
                  Done
                </Button>
                {' '}
                <Button color="secondary" onClick={this.toggleAll}>
                  All Done
                </Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
ModalNestedExample.propTypes = propTypes;
ModalNestedExample.defaultProps = defaultProps;

export default [
  {
    name: 'Modals',
    story: () => (
      <div className="docs-example">
        <div className={btnGroup}>
          <div className={btn}>
            <ModalExample buttonLabel="Launch Modal" />
          </div>
          <div className={btn}>
            <ModalExample
              buttonLabel="Launch Modal with custom className"
              className="my-custom-modal"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Backdrop',
    story: () => (
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalBackdropExample buttonLabel="Launch Modal" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Nested Modals',
    story: () => (
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalNestedExample buttonLabel="Launch Modal w/ Nested Example" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Modals with Custom Transition Timeouts',
    story: () => (
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalCustomTimeoutExample buttonLabel="Launch Modal with Custom Transition Timeouts Example" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Modals without Fade Effect',
    story: () => (
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalFadelessExample buttonLabel="Launch Modal without Fade Effect Example" />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Modals with external button',
    story: () => (
      <div className="docs-example">
        <div className="btn-group">
          <div className="btn">
            <ModalExternalExample buttonLabel="Launch Modal with external close button" />
          </div>
        </div>
      </div>
    ),
  },
];
