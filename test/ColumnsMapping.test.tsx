import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { ColumnsMapping } from '../stories/Table.stories'

const data = [
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
]

const columns = {
  operator: {
    label: 'Operator',
  },
  headset_display: {
    label: 'Headset Display',
  },
  '3g_availability': {
    label: '3G Availability',
    format: (data: any) => (data ? 'Yes' : 'No'),
  },
}

const altOrdercolumns = {
  headset_display: {
    label: 'Headset Display',
  },
  '3g_availability': {
    label: '3G Availability',
  },
  operator: {
    label: 'Operator',
  },
}

describe('Columns Mapping Table: ', () => {
  afterEach(cleanup)
  it('should render with column mapped to data', () => {
    const { queryAllByRole } = render(
      <ColumnsMapping data={data} columns={columns} />
    )
    expect(queryAllByRole('columnheader')).toHaveLength(3)
    const headerCell = queryAllByRole('columnheader')[2]
    expect(headerCell.textContent).toEqual(columns['3g_availability'].label)
  })

  it('should render with column mapped to data with random order', () => {
    const { queryAllByRole } = render(
      <ColumnsMapping data={data} columns={altOrdercolumns} />
    )
    const headerCell = queryAllByRole('columnheader')[0]
    expect(headerCell.textContent).toEqual(columns['headset_display'].label)
  })

  it('should render with column mapped to data with data formatting', () => {
    const { queryAllByRole } = render(
      <ColumnsMapping data={data} columns={columns} />
    )
    const rowCell = queryAllByRole('cell')[2]
    expect(rowCell.textContent).toEqual(
      columns['3g_availability'].label +
        ': ' +
        columns['3g_availability'].format(data[0]['3g_availability'])
    )
  })
})
