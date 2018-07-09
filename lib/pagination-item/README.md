# Pagination Item

### Usage

```js
import { PaginationItem } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `active` - true to add active CSS class
- `disabled` - true to add disabled CSS class
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| active    | boolean  | false        | -          |
| disabled  | boolean  | false        | -          |
| tag       | tag      | li           | -          |
| className | string   | -            | -          |

### Roadmap

#### PaginationItem

```js
function PaginationItemExample() {
  return (
    <div>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </div>
  );
}
```
