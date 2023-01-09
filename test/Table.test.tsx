import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Default as Table } from '../stories/Table.stories'
import { capitalize } from '../src/utils'

const data = [
  {
    operator: '*Celcom Axiata (LTE)',
    headset_display: 'CELCOM / My Celcom / 502 19',
    '3g_availability': true,
  },
  {
    operator: '*DiGi Telecom (LTE)',
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

describe('Basic Table: ', () => {
  afterEach(cleanup)
  it('should render with data', () => {
    const { queryAllByRole } = render(<Table data={data} />)
    expect(queryAllByRole('table')).toBeTruthy()
    expect(queryAllByRole('table')).toHaveLength(1)
  })
  it('should render with hidden title', () => {
    const title = 'Test Title'
    const { queryAllByRole } = render(<Table data={data} title={title} />)
    expect(queryAllByRole('columnheader')).toHaveLength(4)
    const headerCell = queryAllByRole('columnheader')[0]
    expect(headerCell.textContent).toEqual(title)
  })
  it('should render column capitalize if column maping not available', () => {
    const { queryAllByRole } = render(<Table data={data} />)
    expect(queryAllByRole('columnheader')).toHaveLength(3)
    const headerCell = queryAllByRole('columnheader')[2]
    expect(headerCell.textContent).toEqual(capitalize(Object.keys(data[0])[2]))
  })
  it('should render cell value "-" if data unavailable', () => {
    const { queryAllByRole } = render(<Table data={data} />)
    expect(queryAllByRole('cell')).toHaveLength(12)
    const headerCell = queryAllByRole('cell')[4]
    expect(headerCell.textContent).toEqual(
      capitalize(Object.keys(data[0])[1]) + ': -'
    )
  })
  it('should render boolean cell value as string(true/false)', () => {
    const { queryAllByRole } = render(<Table data={data} />)
    expect(queryAllByRole('cell')).toHaveLength(12)
    const headerCell = queryAllByRole('cell')[2]
    expect(headerCell.textContent).toEqual(
      capitalize(Object.keys(data[0])[2]) + ': true'
    )
  })
})
