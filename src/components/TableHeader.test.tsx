import React, { ReactElement } from 'react'
import { cleanup, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import DefaultTheme from '../theme'
import TableHeader from './TableHeader'
import { capitalize } from '../utils'

describe('Table Header', () => {
  afterEach(cleanup)

  const renderComponent = (children: ReactElement) => {
    return render(
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    )
  }

  it('should render key as text if label for column not available', () => {
    const { queryAllByRole } = renderComponent(
      <TableHeader
        columns={{
          name: { label: 'Name', sortable: true },
          age: { label: '', sortable: true },
        }}
        onSort={jest.fn}
      />
    )
    expect(queryAllByRole('columnheader')).toBeTruthy()
    expect(queryAllByRole('columnheader')).toHaveLength(2)
    expect(queryAllByRole('columnheader')[1]).toHaveTextContent(
      capitalize('age')
    )
  })

  it('should not call back on sort if sort function not supplied', () => {
    const { queryAllByRole } = renderComponent(
      <TableHeader
        columns={{
          name: { label: 'Name', sortable: true },
          age: { label: '', sortable: true },
        }}
        onSort={jest.fn}
      />
    )
    expect(queryAllByRole('columnheader')).toBeTruthy()
    expect(queryAllByRole('columnheader')).toHaveLength(2)
    expect(queryAllByRole('columnheader')[1]).toHaveTextContent(
      capitalize('age')
    )
  })
})
