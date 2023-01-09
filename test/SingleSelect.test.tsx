import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { Single } from '../stories/TableSelectable.stories'
import { Selectable } from '../src/types'
import DefaultTheme from '../src/theme'

const data = [
  {
    name: 'Mavis Chen',
    mobile: '8899 7654',
    expiry: '12/01/2022',
    penalty: 600,
  },
  {
    name: 'Rodney Artichoke',
    mobile: '9988 7676',
    expiry: '12/02/2022',
    penalty: 300,
  },
  {
    name: 'Valentino Morose',
    mobile: '8900 7654',
    expiry: '12/03/2022',
    penalty: 300,
  },
  {
    name: 'Eric Widget',
    mobile: '8900 7654',
    expiry: '12/04/2022',
    penalty: 300,
  },
]
const columns = {
  name: {
    label: 'Name',
  },
  mobile: {
    label: 'Mobile',
  },
  expiry: {
    label: 'Expiry',
    format: (data: any) => {
      const d = new Date(data)
      return (
        d.toLocaleString('default', { month: 'short' }) + ' ' + d.getFullYear()
      )
    },
  },
  penalty: {
    label: 'Penality',
    format: (data: any) => '$' + data,
  },
}

describe('Single Select Table: ', () => {
  afterEach(cleanup)
  it('should render selection header when selectable type is single', () => {
    const { queryAllByRole } = render(
      <Single data={data} columns={columns} selectable={Selectable.single} />
    )
    expect(queryAllByRole('columnheader')).toHaveLength(5)
  })

  it('should render radio select for each record', () => {
    const { queryAllByRole, queryAllByTitle } = render(
      <Single data={data} columns={columns} selectable={Selectable.single} />
    )
    expect(queryAllByRole('cell')).toHaveLength(20)
    expect(queryAllByTitle('Select')).toHaveLength(4)
    const firstCell = queryAllByRole('cell')[0]
    expect(firstCell.querySelectorAll('[type="radio"]')).toHaveLength(1)
  })

  it('should highlight on radio select for any record', () => {
    const { queryAllByRole, queryAllByTitle } = render(
      <Single data={data} columns={columns} selectable={Selectable.single} />
    )
    const rowSelect = queryAllByTitle('Select')[0].getElementsByTagName(
      'input'
    )[0]
    expect(rowSelect.getAttribute('type')).toEqual('radio')
    fireEvent.click(rowSelect)
    expect(queryAllByRole('row')[1]).toHaveStyle(
      `background: ${DefaultTheme.background?.selected}`
    )
  })

  it('should have only one row highlighted for all record on select', () => {
    const { queryAllByRole, queryAllByTitle } = render(
      <Single data={data} columns={columns} selectable={Selectable.single} />
    )
    const rowSelect = queryAllByTitle('Select')[0].getElementsByTagName(
      'input'
    )[0]
    const rowSelect2 = queryAllByTitle('Select')[1].getElementsByTagName(
      'input'
    )[0]
    fireEvent.click(rowSelect)
    fireEvent.click(rowSelect2)
    expect(queryAllByRole('row')[1]).toHaveStyle(`background: ''`)
    expect(queryAllByRole('row')[2]).toHaveStyle(
      `background: ${DefaultTheme.background?.selected}`
    )
  })
})
