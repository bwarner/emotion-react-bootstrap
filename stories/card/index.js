import CardExample from './card.stories';
import CardAlignmentExample from './card-alignment.stories';
import CardBackgroundsExample from './card-backgrounds.stories';
import CardColumnsExample from './card-columns.stories';
import CardContentTypesExample from './card-content-types.stories';
import CardDecksExample from './card-decks.stories';
import CardGroupsExample from './card-groups.stories';
import CardHeaderFooterExample from './card-header-footer.stories';
import CardImageCapsExample from './card-image-caps.stories';
import CardImageOverlayExample from './card-image-overlay.stories';
import CardOutlineExample from './card-outline.stories';
import CardSizingExample from './card-sizing.stories';

export default [
  { name: 'Card', story: CardExample },
  { name: 'Content Types', story: CardContentTypesExample },
  { name: 'Sizing', story: CardSizingExample },
  { name: 'Text Alignment', story: CardAlignmentExample },
  { name: 'Header and Footer', story: CardHeaderFooterExample },
  { name: 'Image Caps', story: CardImageCapsExample },
  { name: 'Image Overlay', story: CardImageOverlayExample },
  { name: 'Backgrounds variants', story: CardBackgroundsExample },
  { name: 'Outline variants', story: CardOutlineExample },
  { name: 'Groups', story: CardGroupsExample },
  { name: 'Decks', story: CardDecksExample },
  { name: 'Columns', story: CardColumnsExample },
];
