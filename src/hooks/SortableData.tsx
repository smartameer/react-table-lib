import { useMemo, useState } from 'react'
import { SortOrder, TableRecord } from '../types'

interface SortConfig {
  column: string
  order: SortOrder
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

const useSortableData = (
  records: TableRecord[],
  config: SortConfig | null = null
) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedRecords = useMemo(() => {
    let sortedRecords = [...records]
    if (sortConfig !== null) {
      sortedRecords.sort((a: TableRecord, b: TableRecord) => {
        let valueA = !a[sortConfig.column] || a[sortConfig.column] === null ? '' : a[sortConfig.column]
        let valueB = !b[sortConfig.column] || b[sortConfig.column] === null ? '' : b[sortConfig.column]
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
    }
    return sortedRecords
  }, [records, sortConfig])

  const handleSort = (column: string, order: SortOrder) => {
    setSortConfig({ column, order })
  }

  return { records: sortedRecords, handleSort }
}

export default useSortableData
