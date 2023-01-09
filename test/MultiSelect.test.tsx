import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { Mutiple } from '../stories/TableSelectable.stories'
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

describe('Multiple Select Table: ', () => {
  afterEach(cleanup)
  it('should render selection header when selectable type is multiple', () => {
    const { queryAllByRole } = render(
      <Mutiple data={data} columns={columns} selectable={Selectable.multiple} />
    )
    expect(queryAllByRole('columnheader')).toHaveLength(5)
  })

  it('should render radio select for each record', () => {
    const { queryAllByRole, queryAllByTitle } = render(
      <Mutiple data={data} columns={columns} selectable={Selectable.multiple} />
    )
    expect(queryAllByRole('cell')).toHaveLength(20)
    expect(queryAllByTitle('Select')).toHaveLength(4)
    const firstCell = queryAllByRole('cell')[0]
    expect(firstCell.querySelectorAll('[type="checkbox"]')).toHaveLength(1)
  })

  it('should highlight on checkbox select for any record', () => {
    const { queryAllByRole, queryAllByTitle } = render(
      <Mutiple data={data} columns={columns} selectable={Selectable.multiple} />
    )
    const rowSelect = queryAllByTitle('Select')[0].getElementsByTagName(
      'input'
    )[0]
    expect(rowSelect.getAttribute('type')).toEqual('checkbox')
    fireEvent.click(rowSelect)
    expect(queryAllByRole('row')[1]).toHaveStyle(
      `background: ${DefaultTheme.background?.selected}`
    )
  })

  it('should unselect rows highlighted on select again', () => {
    const { queryAllByRole, queryAllByTitle } = render(
      <Mutiple data={data} columns={columns} selectable={Selectable.multiple} />
    )
    const rowSelect = queryAllByTitle('Select')[0].getElementsByTagName(
      'input'
    )[0]
    fireEvent.click(rowSelect)
    expect(queryAllByRole('row')[1]).toHaveStyle(
      `background: ${DefaultTheme.background?.selected}`
    )
    fireEvent.click(rowSelect)
    expect(queryAllByRole('row')[1]).toHaveStyle(`background: ''`)
  })

  it('should highlight multiple selected rows', () => {
    const { queryAllByRole, queryAllByTitle } = render(
      <Mutiple data={data} columns={columns} selectable={Selectable.multiple} />
    )
    for (let i = 0; i < 3; i++) {
      const rowSelect = queryAllByTitle('Select')[i].getElementsByTagName(
        'input'
      )[0]
      fireEvent.click(rowSelect)
    }
    for (let i = 0; i < 3; i++) {
      expect(queryAllByRole('row')[i + 1]).toHaveStyle(
        `background: ${DefaultTheme.background?.selected}`
      )
    }
  })

  it('should return selected records as an array for onSelect', () => {
    const mockObj = {
      handleSelect: jest.fn,
    }
    const handleSelectSpy = spyOn(mockObj, 'handleSelect')

    const { queryAllByTitle } = render(
      <Mutiple
        data={data}
        columns={columns}
        selectable={Selectable.multiple}
        onSelect={mockObj.handleSelect}
      />
    )
    for (let i = 0; i < 3; i++) {
      const rowSelect = queryAllByTitle('Select')[i].getElementsByTagName(
        'input'
      )[0]
      fireEvent.click(rowSelect)
    }

    expect(handleSelectSpy).toHaveBeenCalledTimes(3)
    expect(handleSelectSpy).toHaveBeenCalledWith(data.slice(0, 3))
  })
})
