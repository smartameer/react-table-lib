import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Default as Table } from '../stories/Table.stories'

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

// const columns = {
//   'operator': {
//     'label': 'Operator'
//   },
//   'headset_display': {
//     'label': 'Headset Display'
//   },
//   '3g_availability': {
//     'label': '3G Availability',
//     'format': data => data ? 'Yes' : 'No'
//   }
// }

describe('Table', () => {
  afterEach(cleanup)
  it('should render basic table with data', () => {
    const { queryAllByRole } = render(<Table data={data} />)
    expect(queryAllByRole('table')).toBeTruthy()
    expect(queryAllByRole('table')).toHaveLength(1)
  })
})
