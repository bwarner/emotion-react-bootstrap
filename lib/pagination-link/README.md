# Pagination Link

### Usage

```js
import { PaginationLink } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `next` - true to add next CSS class
- `previous` - true to add previous CSS class
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames
- `aria-label` - CSS classname

| propName     | propType | defaultValue | isRequired |
| ------------ | -------- | ------------ | ---------- |
| next         | boolean  | false        | -          |
| previous     | boolean  | false        | -          |
| tag          | tag      | a            | -          |
| className    | string   | -            | -          |
| 'aria-label' | string   | -            | -          |

### Roadmap

#### PaginationLink

```js
function PaginationLinkExample() {
  return (
    <div>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </div>
  );
}
```
