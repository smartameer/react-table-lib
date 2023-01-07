import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const Theme = create({
  base: 'light',
  colorSecondary: '#4937ad',
  fontCode: 'monospace',
  enableShortcuts: false,
  barSelectedColor: '#4937ad',
  brandTitle: 'Table Component',
  fontBase: "'Avenir Book', arial, sans-serif",
})

addons.setConfig({
  theme: Theme,
});
