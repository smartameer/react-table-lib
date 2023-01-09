import React, { ReactElement } from 'react'
import { cleanup, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import DefaultTheme from '../theme'
import TableBody from './TableBody'

describe('Table Body', () => {
  afterEach(cleanup)

  const renderComponent = (children: ReactElement) => {
    return render(
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    )
  }

  it('should render default sort button', () => {
    const { queryAllByRole } = renderComponent(
      <TableBody
        columns={{ name: { label: 'Name' } }}
        data={[{ name: 'Test' }]}
        onSelect={jest.fn}
      />
    )
    expect(queryAllByRole('row')).toBeTruthy()
    expect(queryAllByRole('row')).toHaveLength(1)
  })

  it('should render default sort button', () => {
    const { queryAllByRole } = renderComponent(
      <TableBody
        columns={{ name: { label: 'Name' }, age: { label: 'Age' } }}
        data={[{ name: 'Test', age: 30 }, { name: 'Test2' }]}
        onSelect={jest.fn}
      />
    )
    expect(queryAllByRole('row')).toBeTruthy()
    expect(queryAllByRole('row')).toHaveLength(2)
    expect(queryAllByRole('cell')[3]).toHaveTextContent('Age: -')
  })
})
