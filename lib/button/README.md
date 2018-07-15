# Badge

### Usage

```js
import { Button } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `color` - one of primary, secondary, success, danger, warning, info, light, dark
- `pill` - true for pill style
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName | propType       | defaultValue | isRequired |
| -------- | -------------- | ------------ | ---------- |
| color    | string         | secondary    |            |
| active   | boolean        | true         | -          |
| disabled | boolean        | -            | -          |
| tag      | tag            | button       | -          |
| innerRef | func or string | -            | -          |
| onClick  | func           | -            | -          |
| size     | string         | -            | -          |

### Roadmap

#### Buttons

```js
function Example1() {
  return (
    <div>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button> <Button color="link">link</Button>{' '}
    </div>
  );
}
```

#### Outline Buttons

Buttons with clear background

For example:

```js
function Example2() {
  return (
    <div>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button> <Button color="link">link</Button>
    </div>
  );
}
```

#### Sizes

```js
function Example3() {
  return (
    <div>
      <fieldset>
        <legend>Large</legend>
        <Button color="primary" size="lg">
          Large Button
        </Button> <Button color="secondary" size="lg">
          Large Button
        </Button>
      </fieldset>
      <fieldset>
        <legend>Small</legend>
        <Button color="primary" size="sm">
          Small Button
        </Button> <Button color="secondary" size="sm">
          Small Button
        </Button>
      </fieldset>
      <fieldset>
        <legend>Block</legend>
        <Button color="primary" size="sm" block>
          Small Button
        </Button> <Button color="secondary" size="sm" block>
          Small Button
        </Button>
      </fieldset>
    </div>
  );
}
```

#### Active State

```js
function Example4() {
  return (
    <div>
      <Button color="primary" size="sm" block>Small Button</Button>{' '}
      <Button color="secondary" size="sm" block>Small Button</Button>
    </div>
```

#### Disabled State

```js
function Example5() {
  return (
    <div>
      <Button color="primary" size="lg" disabled>
        Primary button
      </Button>{' '}
      <Button color="secondary" size="lg" disabled>
        Button
      </Button>
    </div>
  );
}
```
