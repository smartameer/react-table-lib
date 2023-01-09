import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { Sortable as SortableTable } from '../stories/TableSortable.stories'
import { SortOrder } from '../src/types'
import { sortRecords } from '../src/utils'

const data = [
  {
    age: 33,
    eyeColor: 'blue',
    name: 'Kirkland Gilliam',
    gender: 'male',
    company: 'FIBEROX',
    email: 'kirklandgilliam@fiberox.com',
    phone: '+1 (914) 486-3195',
    salary: 15138.1,
    dependants: 1,
    experience: '9yrs 3months',
    techstack: 'Python',
    serving: true,
  },
  {
    age: 39,
    eyeColor: 'brown',
    name: 'Elsa Hayden',
    gender: 'female',
    email: 'elsahayden@comvene.com',
    phone: '+1 (917) 411-2284',
    salary: 176375.88,
    dependants: 1,
    experience: '1yrs 10months',
    techstack: 'Dot Net',
    serving: false,
  },
  {
    age: 33,
    name: 'Holmes Mooney',
    gender: 'male',
    company: 'OLUCORE',
    email: 'holmesmooney@olucore.com',
    phone: '+1 (964) 529-2279',
    salary: 91363.46,
    dependants: 1,
    experience: '18yrs 5months',
    techstack: 'R',
    serving: true,
  },
  {
    age: 34,
    eyeColor: 'green',
    name: 'Paige Dixon',
    gender: 'female',
    company: 'MANTRIX',
    phone: '+1 (857) 582-3516',
    salary: 229949.61,
    dependants: 3,
    experience: '17yrs 4months',
    techstack: 'Ruby',
    serving: true,
  },
  {
    age: 38,
    eyeColor: 'green',
    name: 'Alana Ramsey',
    company: 'SOPRANO',
    email: 'alanaramsey@soprano.com',
    phone: '+1 (977) 458-2974',
    salary: 78305.36,
    dependants: 4,
    experience: '25yrs 8months',
    techstack: 'C++',
    serving: false,
  },
  {
    age: 28,
    eyeColor: 'blue',
    name: 'Crystal Norton',
    gender: 'female',
    company: 'OPTYK',
    email: 'crystalnorton@optyk.com',
    phone: '+1 (998) 591-2416',
    salary: 27680.22,
    dependants: 1,
    serving: true,
  },
]

const columns = {
  name: { label: 'Name', sortable: true },
  age: { label: 'Age', sortable: true },
  eyeColor: { label: 'Eye Color', sortable: true },
  gender: {
    label: 'Gender',
    format: (data: any) => (data === 'male' ? 'M' : 'F'),
  },
  company: { label: 'Company', sortable: true },
  email: { label: 'Email' },
  phone: { label: 'Phone' },
  salary: {
    label: 'Income',
    sortable: true,
    format: (data: any) => '$' + Math.ceil(data),
  },
  dependants: { label: 'Dependants', sortable: true },
  experience: { label: 'Experience', sortable: true },
  techstack: { label: 'Skills' },
  serving: {
    label: 'Serving',
    sortable: true,
    format: (data: any) => (data ? 'Yes' : 'No'),
  },
}

describe('Sortable Table: ', () => {
  afterEach(cleanup)
  it('should render with data', () => {
    const { queryAllByRole } = render(
      <SortableTable data={data} columns={columns} />
    )
    expect(queryAllByRole('table')).toBeTruthy()
    expect(queryAllByRole('table')).toHaveLength(1)
  })

  it('should show default sort button where column is sortable', () => {
    const { queryAllByRole, queryAllByAltText } = render(
      <SortableTable data={data} columns={columns} />
    )
    const firstColumn = queryAllByRole('columnheader')[0]
    expect(firstColumn.getElementsByTagName('button')).toHaveLength(1)
    expect(queryAllByAltText('Sort')).toHaveLength(8)
  })

  it('should sort ascending order when sort button clicked initially', () => {
    const { queryAllByRole, queryAllByAltText } = render(
      <SortableTable data={data} columns={columns} />
    )
    const firstColumnSortButton = queryAllByRole(
      'columnheader'
    )[0].getElementsByTagName('button')[0]
    fireEvent.click(firstColumnSortButton)
    expect(queryAllByAltText('Ascending')).toHaveLength(1)
    expect(firstColumnSortButton.getAttribute('title')).toEqual('Ascending')
    expect(
      firstColumnSortButton.querySelector('img')?.getAttribute('alt')
    ).toEqual('Ascending')
    expect(queryAllByAltText('Sort')).toHaveLength(7)
  })

  it('should sort descending order when sort button clicked twice', () => {
    const { queryAllByRole, queryAllByAltText } = render(
      <SortableTable data={data} columns={columns} />
    )
    const firstColumnSortButton = queryAllByRole(
      'columnheader'
    )[0].getElementsByTagName('button')[0]
    fireEvent.click(firstColumnSortButton)
    fireEvent.click(firstColumnSortButton)
    expect(queryAllByAltText('Descending')).toHaveLength(1)
    expect(firstColumnSortButton.getAttribute('title')).toEqual('Descending')
    expect(
      firstColumnSortButton.querySelector('img')?.getAttribute('alt')
    ).toEqual('Descending')
    expect(queryAllByAltText('Ascending')).toHaveLength(0)
    expect(queryAllByAltText('Sort')).toHaveLength(7)
  })

  it('should sort rows in ascending order', () => {
    const { queryAllByRole } = render(
      <SortableTable data={data} columns={columns} />
    )
    expect(queryAllByRole('cell')[0]).toHaveTextContent(data[0].name as string)
    const firstColumnSortButton = queryAllByRole(
      'columnheader'
    )[0].getElementsByTagName('button')[0]
    fireEvent.click(firstColumnSortButton)
    const sortedRecords = sortRecords(data, {
      column: 'name',
      order: SortOrder.asc,
    })
    expect(queryAllByRole('cell')[0]).toHaveTextContent(
      sortedRecords[0].name as string
    )
  })

  it('should sort rows in descending order', () => {
    const { queryAllByRole } = render(
      <SortableTable data={data} columns={columns} />
    )
    expect(queryAllByRole('cell')[0]).toHaveTextContent(data[0].name as string)
    const firstColumnSortButton = queryAllByRole(
      'columnheader'
    )[0].getElementsByTagName('button')[0]
    fireEvent.click(firstColumnSortButton)
    fireEvent.click(firstColumnSortButton)
    const sortedRecords = sortRecords(data, {
      column: 'name',
      order: SortOrder.desc,
    })
    expect(queryAllByRole('cell')[0]).toHaveTextContent(
      sortedRecords[0].name as string
    )
  })
})
