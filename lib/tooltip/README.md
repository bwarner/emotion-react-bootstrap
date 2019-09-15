# Tooltip

A positioned element used to provide additional information about an item on the page.

### Usage

```js
import { Tooltip } from 'emotion-react-bootstrap';
```
     
<!-- STORY -->
    
### Properties

- `isOpen` -  boolean to control the state of the tooltip
- `hideArrow` - boolean to control whether arrow is show
- `toggle` - callback for toggling isOpen in the controlling component. It will receive an object with info about the event that triggered it
- `target` - target element or element ID, popover is attached to this element
-  `container` - Where to inject the popper DOM node, default to body
- `delay` - optionally override show/hide delays
- `className` - CSS classnames
- `arrowClassName` - Apply class to the arrow-tooltip ('arrow' by default)
- `autohide` - optionally hide tooltip when hovering over tooltip content
- `placement` - attachments for popover
- `innerRef` - Custom ref handler that will be assigned to the "ref" of the <div> wrapping the tooltip elements

| propName      | propType                         | defaultValue          | isRequired |
| ------------- | -------------------------------- | ----------------------|----------- | 
| isOpen        | boolean                          | false                 |            |
| hideArrow     | boolean                          | false                 | -          |
| toogle        | function                         | -                     | -          |
| target        | string, function, or DOMElement  | -                     | yes        |
| container     | string, function, or DOMElement  | -                     | -          |
| delay         | see below                        | show: 0, hide: 250,   | -          |
| className     | string                           | -                     | -          |
| arrowClassName| string                           | -                     | -          |
| autohide      | boolean                          | true                  | -          |
| placement     | string                           | top                   | -          |
| innerClassName| string                           | -                     | -          |
| trigger       | string                           | -                     |            |


### delay
- object with show and hide time in milliseconds or a single number for both

#### Placments
- auto
- auto-start
- auto-end
- top
- top-start
- top-end
- right
- right-start
- right-end
- bottom
- bottom-start
- bottom-end
- left
- left-start
- left-end


## Example
```js
import React from 'react';
import { Tooltip } from '@farvisionllc/emotion-bootstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <div>
        <p>
          Somewhere in here is a
          &nbsp;
          <a href="#" id="TooltipExample">
            tooltip
          </a>
          .
        </p>
        <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}
        >
          Hello world!
        </Tooltip>
      </div>
    );
  }
}

```