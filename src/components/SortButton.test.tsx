import React, { ReactElement } from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import SortButton from './SortButton'
import { ThemeProvider } from 'styled-components'
import DefaultTheme from '../theme'

describe('Sort Button', () => {
  afterEach(cleanup)

  const renderComponent = (children: ReactElement) => {
    return render(
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    )
  }

  it('should render default sort button', () => {
    const { getAllByAltText, queryAllByRole } = renderComponent(
      <SortButton column="test" order={null} onSelect={jest.fn} />
    )
    expect(getAllByAltText('Sort')).toBeTruthy()
    expect(queryAllByRole('button')).toBeTruthy()
    expect(queryAllByRole('button')).toHaveLength(1)
  })

  it('should call onSelect on sort button click', () => {
    const handleSelect = jest.fn(() => {})
    const {
      queryAllByRole,
      queryAllByTitle,
      queryAllByAltText,
    } = renderComponent(
      <SortButton column="test" order={null} onSelect={handleSelect} />
    )
    fireEvent.click(queryAllByRole('button')[0])
    expect(queryAllByTitle('Ascending')).toBeTruthy()
    expect(queryAllByAltText('Ascending')).toBeTruthy()
    expect(handleSelect).toHaveBeenCalled()
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('test')
  })
})
