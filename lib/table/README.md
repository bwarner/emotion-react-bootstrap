# Table

### Usage

```js
import { Table } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `className` - CSS classnames
- `small` - flag to set small font size
- `bordered` - flag to turn on borders
- `borderless` - flag
- `striped` - flag to set alternating color rows
- `dark` - flag to set dark color version of table
- `hover` - flag
- `responsive` - flag or string
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `responsiveTag` - a function or string

| propName      | propType          | defaultValue | isRequired |
| ------------- | ----------------- | ------------ | ---------- |
| className     | string            | -            |            |
| small         | boolean           | -            |            |
| bordered      | boolean           | -            |            |
| borderless    | string            | -            |            |
| striped       | boolean           | -            | -          |
| dark          | boolean           | -            | -          |
| hover         | boolean           | -            | -          |
| responsive    | boolean or string | -            | -          |
| tag           | func or string    | table        | -          |
| responsiveTag | func or string    | div          | -          |

### Roadmap

#### Table

```js
function Example1() {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}
```
