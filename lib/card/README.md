# Card
A card is a flexible and extensible content container.
It includes options for headers and footers, a wide variety of content, contextual background colors,
and powerful display options.
  
Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.

### Usage
 
 ```js
 import { Card } from 'emotion-react-bootstrap';
 ```
### Card
A container for card components.

#### Props
  
 - `tag` - a function that evaluations to the tag name or the tag name as a string
 - `className` - CSS classnames
 - `inverse` - flip the text color and background
 - `color` - the color
 - `outline` -  if outline is true then color is use for the border, otherwise it's used as teh background
 - `body` - if there add card-body class to the element
 
 | propName  | propType           |defaultValue | isRequired |
 | ----------| -------------------|------------ | ---------- |
 | tag       | function or string | div         | -          |
 | classNames| string             | -           | -          |
 | inverse   | boolean            | -           | -          |
 | body      | boolean            | -           | -          |
 | outline   | boolean            | -           | -          |


  
## Content types
Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

 
### CardBody
The building block of a card is the CardBody. Use it whenever you need a padded section within a card.

#### Props
  
 - `tag` - a function that evaluations to the tag name or the tag name as a string
 - `className` - CSS classnames
 
 | propName  | propType           |defaultValue | isRequired |
 | ----------| -------------------|------------ | ---------- |
 | tag       | function or string | div         | -          |
 | classNames| string             | -           | -          |
 
### CardHeader
Header 

#### Props
  
 - `tag` - a function that evaluations to the tag name or the tag name as a string
 - `className` - CSS classnames
 
 | propName  | propType           |defaultValue | isRequired |
 | ----------| -------------------|------------ | ---------- |
 | tag       | function or string | h5          | -          |
 | classNames| string             | -           | -          |

 ### CardTitle
 
 #### Props
   
  - `tag` - a function that evaluations to the tag name or the tag name as a string
  - `className` - CSS classnames
  
  | propName  | propType           |defaultValue | isRequired |
  | ----------| -------------------|------------ | ---------- |
  | tag       | function or string | h5          | -          |
  | classNames| string             | -           | -          |
  
   
 ### CardSubtitle
 Card subtitle
 
 #### Props
   
  - `tag` - a function that evaluations to the tag name or the tag name as a string
  - `className` - CSS classnames
  
  | propName  | propType           |defaultValue | isRequired |
  | ----------| -------------------|------------ | ---------- |
  | tag       | function or string | h6          | -          |
  | classNames| string             | -           | -          |
  
  ### CardColumns
  Cards can be organized into Masonry-like columns with just CSS by wrapping them in Cardolumns. Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.

  
  #### Props
    
   - `tag` - a function that evaluations to the tag name or the tag name as a string
   - `className` - CSS classnames
   
   | propName  | propType           |defaultValue | isRequired |
   | ----------| -------------------|------------ | ---------- |
   | tag       | function or string | div         | -          |
   | classNames| string             | -           | -          |
   
   ### CardDeck
   Need a set of equal width and height cards that aren’t attached to one another? Use card decks.
   
  #### Props
   
  - `tag` - a function that evaluations to the tag name or the tag name as a string
  - `className` - CSS classnames
  
  | propName  | propType           |defaultValue | isRequired |
  | ----------| -------------------|------------ | ---------- |
  | tag       | function or string | div         | -          |
  | classNames| string             | -           | -          |
  
  
### CardFooter
Just like with card groups, card footers in decks will automatically line up.  

#### Props
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName  | propType           |defaultValue | isRequired |
| ----------| -------------------|------------ | ---------- |
| tag       | function or string | h5          | -          |
| classNames| string             | -           | -          |
  
### CardHeader
Add an optional header footer within a card.


#### Props
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName  | propType           |defaultValue | isRequired |
| ----------| -------------------|------------ | ---------- |
| tag       | function or string | h5          | -          |
| classNames| string             | -           | -          |

### CardImg
Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.

#### Props
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName  | propType           |defaultValue | isRequired |
| ----------| -------------------|------------ | ---------- |
| tag       | function or string | img          | -          |
| classNames| string             | -           | -          |

### CardImageOverlay
Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.

#### Props
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName  | propType           |defaultValue | isRequired |
| ----------| -------------------|------------ | ---------- |
| tag       | function or string | img         | -          |
| top       | function or string | false       | -          |
| classNames| string             | -           | -          |

### CardLink

#### Props
- `tag` - a function that evaluations to the tag name or the tag name as a string
- `className` - CSS classnames

| propName  | propType           |defaultValue | isRequired |
| ----------| -------------------|------------ | ---------- |
| tag       | function or string | a           | -          |
| classNames| string             | -           | -          |

