import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table from '../src';
import { TableProps } from '../src/types';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Table Selectable',
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
    selectable: {
      description: 'Row selectable',
      options: ['', 'single', 'multiple'],
      control: {
        type: 'select',
      },
      defaultValue: null
    },
  },
  parameters: {
    controls: { expanded: true }
  },
};

export default meta;

const Template: Story<TableProps> = args => <Table {...args} />;


export const Single = Template.bind({});

Single.args = {
  title: 'Contact Details',
  data: [
    {
      'name': 'Mavis Chen',
      'mobile': '8899 7654',
      'expiry': '12/01/2022',
      'penalty': 600
    },
    {
      'name': 'Rodney Artichoke',
      'mobile': '9988 7676',
      'expiry': '12/02/2022',
      'penalty': 300
    },
    {
      'name': 'Valentino Morose',
      'mobile': '8900 7654',
      'expiry': '12/03/2022',
      'penalty': 300
    },
    {
      'name': 'Eric Widget',
      'mobile': '8900 7654',
      'expiry': '12/04/2022',
      'penalty': 300
    }
  ],
  columns: {
    'name': {
      'label': 'Name'
    },
    'mobile': {
      'label': 'Mobile'
    },
    'expiry': {
      'label': 'Expiry',
      'format': (data) => {
        const d = new Date(data);
        return d.toLocaleString('default', { month: 'short' }) + ' ' + d.getFullYear()
      }
    },
    'penalty': {
      'label': 'Penality',
      'format': (data) => '$' + data
    }
  },
  selectable: 'single',
  onSelect: action('selected')
};

export const Mutiple = Template.bind({});

Mutiple.args = {
  data: [
    {
      'company': 'Blue Ocean International',
      'brn': '198702333K'
    },
    {
      'company': 'Red Electronics',
      'brn': '198900364N'
    },
    {
      'company': 'Yellow Gaming',
      'brn': '196700335H'
    },
    {
      'company': 'Purple Automobiles',
      'brn': '196800306E'
    },
    {
      'company': 'Diamond Interiors Holdings',
      'brn': '199131124V'
    },
    {
      'company': 'Omnichannel Solutions International',
      'brn': '200201624D'
    }
  ],
  columns: {
    'brn': {
      'label': 'BRN'
    },
    'company': {
      'label': 'Company Name'
    }
  },
  selectable: 'multiple',
  onSelect: action('selected')
};
