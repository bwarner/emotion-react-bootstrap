# Pagination

### Usage

```js
import { Pagination } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `next` - true to add next CSS class
- `previous` - true to add previous CSS class
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames
- `aria-label` - CSS classname

| propName      | propType | defaultValue | isRequired |
| ------------- | -------- | ------------ | ---------- |
| tag           | tag      | nav          | -          |
| children      | -        | -            | -          |
| className     | string   | -            | -          |
| listClassName | string   | -            | -          |
| size          | string   | -            | -          |
| listTag       | tag      | ul           | -          |
| 'aria-label'  | string   | -            | -          |

### Roadmap

#### PaginationExample

```js
function PaginationExample() {
  return (
    <div>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
```
