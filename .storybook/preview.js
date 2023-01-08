// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

export const decorators = [
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.tsx)?$',
  }),
];
