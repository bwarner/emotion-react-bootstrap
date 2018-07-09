# Breadcrumb

### Usage

```js
import { Breadcrumb } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `tag` - a function that evaluations to the tag name or the tag name as a string
- `listTag` - a function that evaluations to the tag name or the tag name as a string
- `children` - an object that contains elements
- `listClassName` - CSS classnames
- `className` - CSS classnames
- `aria-label` -

| propName      | propType | defaultValue | isRequired |
| ------------- | -------- | ------------ | ---------- |
| tag           | tag      | nav          | -          |
| listTag       | string   | ol           | -          |
| className     | string   | -            | -          |
| listClassName | string   | -            | -          |
| children      | node     | button       | -          |
| 'aria-label'  | string   | breadcrumb   | -          |

### Roadmap

#### Breadcrumb

```js
function ExampleBreadcrumb() {
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
