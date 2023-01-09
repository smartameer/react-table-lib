import { SortOrder } from './types'
import { capitalize, responsiveRadius, sortRecords } from './utils'

describe('Util Functions', () => {
  it('should return responsive radius', () => {
    expect(responsiveRadius(16)).toEqual(8)
    expect(responsiveRadius(4)).toEqual(2)
    expect(responsiveRadius(8)).toEqual(8)
  })

  it('should return capitalize string', () => {
    expect(capitalize('test')).toEqual('Test')
    expect(capitalize('test_string')).toEqual('Test String')
    expect(capitalize('3g_availability_status')).toEqual(
      '3g Availability Status'
    )
  })

  it('should sort records', () => {
    const data = [
      { name: 'Abc', age: 30, status: true },
      { name: 'Cde', gender: 'M', status: true },
      { name: 'Def', age: 20 },
    ]
    expect(sortRecords(data, { column: 'name', order: SortOrder.asc })).toEqual(
      data
    )
    expect(
      sortRecords(data, { column: 'name', order: SortOrder.desc })
    ).toEqual([data[2], data[1], data[0]])
    expect(sortRecords(data, { column: 'age', order: SortOrder.asc })).toEqual([
      data[0],
      data[2],
      data[1],
    ])
    expect(
      sortRecords(data, { column: 'gender', order: SortOrder.asc })
    ).toEqual([data[0], data[2], data[1]])
    expect(
      sortRecords(data, { column: 'status', order: SortOrder.desc })
    ).toEqual([data[2], data[0], data[1]])
  })
})
