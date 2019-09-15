import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

if (process.env.CI === 'true') {
  initStoryshots({
    suite: 'Image storyshots',
    test: imageSnapshot({
      storybookUrl: `file://${process.env.CIRCLE_WORKING_DIRECTORY}/out/static`,
    }),
  });
} else {
  initStoryshots({
    suite: 'Image storyshots',
  });
}
