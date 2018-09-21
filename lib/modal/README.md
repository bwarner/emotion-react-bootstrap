# Modal

### Usage

```js
import { Modal } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `isOpen` - is Modal automatically open on render
- `autoFocus` - flag
- `centered` - is Modal centered on page
- `size` - object, map of large or small modal
- `toggle` - a function that controls the visibility of the modal
- `keyboard` - should listen to keystrokes to control modal
- `role` - string; eg. 'dialog' or 'document'
- `labelledBy` - string
- `backdrop` - boolean or static
- `onEnter` - function to call when onEnter event fired
- `onExit` - function to call when onExit event fired
- `onOpened` - function to call when onOpened event fired
- `onClosed` - function to call when onClosed event fired
- `children` - node
- `className` - CSS classnames
- `wrapClassName` - wrapper css class name
- `modalClassName` - custom modal css class name
- `backdropClassName` - background css class name
- `contentClassName` - modal content css class name
- `external` - nodes outside modal
- `fade` - should modal fade in/out
- `zIndex` - number or string of css zIndex property
- `backdropTransition` - fade property
- `modalTransition` - fade property
- `innerRef` - fade property: object, string, or function

| propName           | propType          | defaultValue | isRequired |
| ------------------ | ----------------- | ------------ | ---------- |
| isOpen             | boolean           | -            |            |
| autoFocus          | boolean           | -            |            |
| centered           | boolean           | -            |            |
| size               | object            | -            |            |
| toggle             | func              | -            |            |
| keyboard           | boolean           | -            |            |
| role               | string            | dialog       |            |
| labelledBy         | string            | -            |            |
| backdrop           | boolean or static | -            |            |
| onEnter            | func              | -            |            |
| onExit             | func              | -            |            |
| onOpened           | func              | -            |            |
| onClosed           | func              | -            |            |
| children           | node              | -            |            |
| className          | string            | -            |            |
| wrapClassName      | string            | -            |            |
| modalClassName     | string            | -            |            |
| backdropClassName  | string            | -            |            |
| contentClassName   | string            | -            |            |
| external           | node              | -            |            |
| fade               | boolean           | -            | -          |
| zIndex             | string            | -            | -          |
| backdropTransition | Fade prop         | -            | -          |
| modalTransition    | Fade prop         | -            | -          |
| innerRef           | Fade prop         | -            | -          |

### Roadmap

#### Modal

```js
function Example1() {
  return (
    <Modal
      isOpen={this.state.modal}
      toggle={this.toggle}
      className={this.props.className}
    >
      <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.toggle}>
          Do Something
        </Button>{' '}
        <Button color="secondary" onClick={this.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
```
