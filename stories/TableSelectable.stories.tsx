import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table from '../src';
import { Selectable, TableProps } from '../src/types';
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
      options: ['', Selectable.single, Selectable.multiple],
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
  title: 'Account Details',
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



export const Themed = Template.bind({});

Themed.args = {
  title: 'Talk Time Details',
  data: [
    {
      destination: 'Bangladesh',
      mins: 240,
      rate_per_min: 0.03
    },
    {
      destination: 'China',
      mins: 600,
      rate_per_min: 0.01
    },
    {
      destination: 'India',
      mins: 600,
      rate_per_min: 0.01
    },
    {
      destination: 'Indonesia',
      mins: 90,
      rate_per_min: 0.07
    },
    {
      destination: 'Malaysia',
      mins: 60,
      rate_per_min: 0.01
    },
    {
      destination: 'Myanmar',
      mins: 35,
      rate_per_min: 0.17
    },
    {
      destination: 'Philipines',
      mins: 40,
      rate_per_min: 0.15
    },
    {
      destination: 'Thailand',
      mins: 120,
      rate_per_min: 0.05
    },
    {
      destination: 'Vietnam',
      mins: 60,
      rate_per_min: 0.10
    },
  ],
  columns: {
    'destination' : {
      label: 'Destination'
    },
    'mins': {
      label: 'Mins'
    },
    'rate_per_min': {
      label: 'Rate/min',
      format: data => '$' + data
    }
  },
  selectable: 'single',
  theme: {
    radius: 3,
    background: {
      default: '#fefef3',
      selected: '#ddffcc',
      header: '#333333',
      shadow: '#ececec'
    },
    color: {
      default: '#282828',
      border: '#dddddd',
      header: '#eeeeee',
      selected: '#004c00',
      primary: '#449966'
    }
  }
};
