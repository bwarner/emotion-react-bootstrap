# Progress

### Usage

```js
import { Progress } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `children` -
- `className` - CSS classnames
- `barClassName` - CSS classnames
- `value` -
- `max` -
- `animated` -
- `striped` -
- `color` -
- `bar` -
- `multi` -
- `tag` - a function that evaluations to the tag name or the tag name as a string

| propName     | propType       | defaultValue | isRequired |
| ------------ | -------------- | ------------ | ---------- |
| children     | -              | -            | -          |
| className    | string         | -            | -          |
| barClassName | string         | -            | -          |
| value        | string         | -            | -          |
| max          | string, number | -            | -          |
| animated     | boolean        | -            | -          |
| striped      | boolean        | -            | -          |
| color        | string         | -            | -          |
| bar          | boolean        | -            | -          |
| multi        | boolean        | -            | -          |
| tag          | tag            | div          | -          |

### Roadmap

#### ProgressExample

```js
function ProgressExample() {
  return (
    <div>
      <div className="text-center">75%</div>
      <Progress value={75} />
    </div>
  );
}
```
