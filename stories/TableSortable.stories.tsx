import React from 'react'
import { Meta, Story } from '@storybook/react'
import Table from '../src'
import { TableProps } from '../src/types'

const meta: Meta = {
  title: 'Table Sortable',
  component: Table,
  argTypes: {
    title: {
      description: 'Title',
      control: {
        type: 'text',
      },
    },
    data: {
      description: 'Input data',
      control: {
        type: 'object',
      },
    },
    columns: {
      description: 'Column to data key mapping',
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TableProps> = args => <Table {...args} />

export const Sortable = Template.bind({})

Sortable.args = {
  title: 'Contact Details',
  data: [
    {
      operator: '*Celcom Axiata (LTE)',
      headset_display: 'CELCOM / My Celcom / 502 19',
      '3g_availability': true,
    },
    {
      operator: '*DiGi Telecom (LTE)',
      headset_display: 'DiGi 1800 / DiGi / MYMY18',
      '3g_availability': true,
    },
    {
      operator: '*Maxis (LTE)',
      headset_display: 'U Mobile / MYS 18 / MY18',
      '3g_availability': true,
    },
    {
      operator: 'U Mobile (LTE)',
      headset_display: 'U Mobile / MYS 18 / MY18',
      '3g_availability': true,
    },
  ],
  columns: {
    operator: {
      label: 'Operator',
      sortable: true,
    },
    headset_display: {
      label: 'Headset Display',
      sortable: true,
    },
    '3g_availability': {
      label: '3G Availability',
      format: (data: any) => (data ? 'Yes' : 'No'),
    },
  },
}
