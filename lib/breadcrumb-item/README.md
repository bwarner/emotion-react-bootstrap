# Breadcrumb Item

### Usage

```js
import { BreadcrumbItem } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `active` - true to add active CSS class
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| active    | boolean  | true         | -          |
| tag       | tag      | li           | -          |
| className | string   | -            | -          |

### Roadmap

#### BreadcrumbItem

```js
function BreadcrumbItemExample() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
```
