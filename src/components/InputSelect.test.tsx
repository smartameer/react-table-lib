import React from 'react'
import InputSelect from './InputSelect'
import { Selectable } from '../types'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('Input Select', () => {
  afterEach(cleanup)

  it('should render radio input if type is single', () => {
    const { getAllByTitle, queryAllByRole } = render(
      <InputSelect
        type={Selectable.single}
        name="single-select"
        data={{}}
        index={0}
        onSelect={jest.fn}
      />
    )
    expect(getAllByTitle('Select')).toBeTruthy()
    expect(queryAllByRole('radio')).toBeTruthy()
    expect(queryAllByRole('checkbox')).toHaveLength(0)
  })

  it('should call onSelect on radio input selection', () => {
    const handleSelect = jest.fn(() => {})
    const { queryAllByRole } = render(
      <InputSelect
        type={Selectable.single}
        name="single-select"
        data={{ test: 1 }}
        index={0}
        onSelect={handleSelect}
      />
    )
    fireEvent.click(queryAllByRole('radio')[1])
    expect(handleSelect).toHaveBeenCalled()
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith({ test: 1 }, 0)
  })

  it('should render checkbox input if type is multiple', () => {
    const { getAllByTitle, queryAllByRole } = render(
      <InputSelect
        type={Selectable.multiple}
        name="multi-select"
        data={{}}
        index={0}
        onSelect={jest.fn}
      />
    )
    expect(getAllByTitle('Select')).toBeTruthy()
    expect(queryAllByRole('checkbox')).toBeTruthy()
    expect(queryAllByRole('radio')).toHaveLength(0)
  })

  it('should call onSelect on checkbox input selection', () => {
    const handleSelect = jest.fn(() => {})
    const { queryAllByRole } = render(
      <InputSelect
        type={Selectable.multiple}
        name="multiple-select"
        data={{ test: 2 }}
        index={1}
        onSelect={handleSelect}
      />
    )
    fireEvent.click(queryAllByRole('checkbox')[1])
    expect(handleSelect).toHaveBeenCalled()
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith({ test: 2 }, 1)
  })
})
