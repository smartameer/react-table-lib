import { SortConfig, TableRecord, SortOrder } from './types'

export const responsiveRadius = (radius: number) =>
  radius >= 8 && radius / 2 < 8 ? 8 : radius / 2

export const capitalize = (str: string) => {
  return str
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => {
      const result = word.replace(/([A-Z])/g, ' $1')
      return result.charAt(0).toUpperCase() + result.slice(1)
    })
    .join(' ')
}

const getDefaultValue = (type: string) => {
  if (type === 'string') {
    return ''
  }
  if (type === 'number') {
    return -999999
  }
  if (type === 'boolean') {
    return false
  }
  return ''
}

export const sortRecords = (data: TableRecord[], sortConfig: SortConfig) => {
  let sortedRecords = [...data]
  sortedRecords.sort((a: TableRecord, b: TableRecord) => {
    let valueA =
      !a[sortConfig.column] || a[sortConfig.column] === null
        ? ''
        : a[sortConfig.column]
    let valueB =
      !b[sortConfig.column] || b[sortConfig.column] === null
        ? ''
        : b[sortConfig.column]
    if (valueA === '') {
      valueA = getDefaultValue(typeof valueB)
    }
    if (valueB === '') {
      valueB = getDefaultValue(typeof valueA)
    }
    if (typeof valueA === 'string') {
      // @ts-ignore
      return sortConfig.order === SortOrder.asc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA) // eslint-disable-line
    }
    // @ts-ignore
    return sortConfig.order === SortOrder.asc ? (valueA > valueB ? -1 : valueA < valueB ? 1 : 0) : (valueA < valueB ? -1 : valueA > valueB ? 1 : 0) // eslint-disable-line
  })
  return sortedRecords
}
