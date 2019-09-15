# Jumbotron

### Usage

```js
import { Jumbotron } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `className` - CSS classnames
- `fluid` - flag
- `tag` - a function that evaluations to the tag name or the tag name as a string

| propName  | propType       | defaultValue | isRequired |
| --------- | -------------- | ------------ | ---------- |
| className | string         | -            |            |
| fluid     | boolean        | -            | -          |
| tag       | func or string | div          | -          |

### Roadmap

#### Jumbotron

```js
function Example1() {
  return (
    <Jumbotron>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jumbotron>
  );
}
```
