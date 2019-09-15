import React from 'react';
import Example1 from './tooltip.stories';
import Example2 from './tooltip-auto-hide.stories';
import Example3 from './tooltip-multi.stories';
import Example4 from './tooltip-uncontrolled.stories';

export default [
  { name: 'Tooltip', story: () => <Example1 /> },
  { name: 'Tooltip Auto', story: () => <Example2 /> },
  { name: 'Tooltip Multi', story: () => <Example3 /> },
  { name: 'Tooltip Uncontrolled', story: () => <Example4 /> },
];
