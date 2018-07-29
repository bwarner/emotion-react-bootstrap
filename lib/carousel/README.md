# Carousel

### Usage

```js
import { Carousel } from 'emotion-react-bootstrap';
```

<!-- STORY -->

### Properties

- `activeIndex` - number, the current active slide of the carousel
- `next` - a function which should advance the carousel to the next slide (via activeIndex)
- `previous` - a function which should advance the carousel to the previous slide (via activeIndex)
- `keyboard` - a flag that controls if the left and right arrow keys should control the carousel
- `pause` - If set to "hover", pauses the cycling of the carousel on mouseenter and
  resumes the cycling of the carousel on mouseleave.
  If set to false, hovering over the carousel won't pause it.
  (default: "hover")
- `ride` - Autoplays the carousel after the user manually cycles the first item.
  If "carousel", autoplays the carousel on load.
- `interval` - the interval at which the carousel automatically cycles (default: 5000)
- `children` -
- `mouseEnter` - a function called when the mouse enters the Carousel
- `mouseLeave` - a function called when the mouse exits the Carousel
- `slide` - a flag that controls whether the slide animation on the Carousel works or not
- `className` - CSS classnames

| propName    | propType               | defaultValue | isRequired |
| ----------- | ---------------------- | ------------ | ---------- |
| activeIndex | number                 | -            | -          |
| next        | function               | -            | x          |
| previous    | function               | -            | x          |
| keyboard    | bool                   | -            | -          |
| pause       | bool or string         | -            | -          |
| ride        | string                 | -            | -          |
| interval    | string, number or bool | -            | -          |
| children    | array                  | -            | -          |
| mouseEnter  | function               | -            | -          |
| slide       | bool                   | -            | -          |
| className   | string                 | -            | -          |
