# Collapse

### Usage

```js
import { Collapse } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `Transition.propTypes` -
- `isOpen` - flag
- `children` -
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames
- `navbar` - flag
- `innerRef` - a function that evaluations to the tag name or the tag name as a string

| propName             | propType             | defaultValue | isRequired |
| -------------------- | -------------------- | ------------ | ---------- |
| Transition.propTypes |                      | -            |            |
| isOpen               | boolean              | -            | -          |
| children             | array or string      | -            | -          |
| tag                  | func or string       | div          | -          |
| className            | string               | -            |            |
| navbar               | boolean              | -            | -          |
| innerRef             | func, string, object | div          | -          |

### Roadmap

#### Collapse

```js
function Example1() {
  return (
    <div>
      <Button
        color="primary"
        onClick={this.toggle}
        style={{ marginBottom: '1rem' }}
      >
        Toggle
      </Button>
      <Collapse isOpen={this.state.collapse}>
        <Jumbotron fluid>
          <Container>
            <h1 className={display3}>Fluid jumbotron</h1>
            <p className={lead}>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Collapse>
    </div>
  );
}
```
