import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const imageSnapshotConfig = process.env.CI === 'true' ? { storybookUrl: `file:///${process.env.CIRCLE_WORKING_DIRECTORY}/out/static` } : undefined;
initStoryshots({ suite: 'Image storyshots', test: imageSnapshot(imageSnapshotConfig) });
