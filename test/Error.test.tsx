import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Error } from '../stories/Table.stories'

describe('Error Table: ', () => {
  afterEach(cleanup)
  it('should not render without data', () => {
    const { queryAllByRole } = render(<Error />)
    expect(queryAllByRole('table')).toHaveLength(0)
  })
  it('should not render when data is null', () => {
    const { queryAllByRole } = render(<Error data={null} />)
    expect(queryAllByRole('table')).toHaveLength(0)
  })

  it('should not render when data is not array', () => {
    const { queryAllByRole } = render(<Error data={undefined} />)
    expect(queryAllByRole('table')).toHaveLength(0)
  })
})
