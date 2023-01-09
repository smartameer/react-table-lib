import { useMemo, useState } from 'react'
import { SortConfig, SortOrder, TableRecord } from '../types'
import { sortRecords } from '../utils'

const useSortableData = (
  records: TableRecord[],
  config: SortConfig | null = null
) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedRecords = useMemo(() => {
    let sortedRecords = [...records]
    if (sortConfig !== null) {
      sortedRecords = sortRecords(sortedRecords, sortConfig)
    }
    return sortedRecords
  }, [records, sortConfig])

  const handleSort = (column: string, order: SortOrder) => {
    setSortConfig({ column, order })
  }

  return { records: sortedRecords, handleSort }
}

export default useSortableData
