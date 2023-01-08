import React, { FC, useMemo, useState } from 'react'
import {
  ColumnMappings,
  SortOrder,
  TableRecord,
  TableViewProps,
} from '../types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { TableContainer } from './components'

const camelCase = (str: string) => {
  return str
    .replace('_', ' ')
    .split(' ')
    .map(word => {
      const result = word.replace(/([A-Z])/g, ' $1')
      return result.charAt(0).toUpperCase() + result.slice(1)
    })
    .join(' ')
}

const TableView: FC<TableViewProps> = ({
  title,
  data,
  columns,
  selectable,
  onSelect,
}) => {
  const [records, setRecords] = useState<TableRecord[]>(data)

  const columnsList = useMemo(() => {
    let headers = {} as ColumnMappings
    if (columns && Object.keys(columns).length > 0) {
      headers = columns
    } else if (data) {
      const keys = Object.keys(data[0])
      const headerList = {} as ColumnMappings
      keys.map((item, index) => {
        headerList[item] = {
          label: camelCase(item),
          order: index,
          sortable: false,
        }
        return item
      })
      headers = headerList
    }
    return headers
  }, [columns, data])

  const handleSort = (column: string, order: SortOrder): void => {
    const sortedRecords = [...data]
    sortedRecords.sort((a: TableRecord, b: TableRecord) => {
      if (typeof a[column] === 'string') {
        // @ts-ignore
        return order === SortOrder.asc ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column])
      }
      // @ts-ignore
      return order === SortOrder.asc ? a[column] - b[column] : b[column] - a[column]
    })
    setRecords(sortedRecords)
  }

  return (
    <TableContainer role="table" aria-label={title}>
      <TableHeader
        title={title}
        columns={columnsList}
        selectable={selectable}
        onSort={handleSort}
      />
      <TableBody
        data={records}
        columns={columnsList}
        selectable={selectable}
        onSelect={onSelect}
      />
    </TableContainer>
  )
}

export default TableView
