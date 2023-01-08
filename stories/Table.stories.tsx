import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table from '../src';
import { TableProps } from '../src/types';

const meta: Meta = {
  title: 'Table',
  component: Table,
  argTypes: {
    title: {
      description: 'Title',
      control: {
        type: 'text'
      }
    },
    data: {
      description: 'Input data',
      control: {
        type: 'object'
      }
    },
    columns: {
      description: 'Column to data key mapping',
      control: {
        type: 'object'
      },
      defaultValue: {}
    },
    theme: {
      description: 'Theme',
      control: {
        type: 'object'
      }
    },
  },
  parameters: {
    controls: { expanded: true }
  },
};

export default meta;

const Template: Story<TableProps> = args => <Table {...args} />;

const data = [
  {
    'operator': '*Celcom Axiata (LTE)',
    'headset_display': 'CELCOM / My Celcom / 502 19',
    '3g_availability': true,
  },
  {
    'operator': '*DiGi Telecom (LTE)',
    'headset_display': 'DiGi 1800 / DiGi / MYMY18',
    '3g_availability': true,
  },
  {
    'operator': '*Maxis (LTE)',
    'headset_display': 'U Mobile / MYS 18 / MY18',
    '3g_availability': true,
  },
  {
    'operator': 'U Mobile (LTE)',
    'headset_display': 'U Mobile / MYS 18 / MY18',
    '3g_availability': true,
  }
]

const columns = {
  'operator': {
    'label': 'Operator'
  },
  'headset_display': {
    'label': 'Headset Display'
  },
  '3g_availability': {
    'label': '3G Availability',
    'format': (data : any) => data ? 'Yes' : 'No'
  }
}
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  data
};
Default.parameters = {
  jest: 'Table',
};
export const Error = Template.bind({});

Error.args = {
  data: null
};

export const ColumnsMapping = Template.bind({});

ColumnsMapping.args = {
  title: 'Telecom List',
  data,
  columns
};
