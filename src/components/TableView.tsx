import React, { FC, useMemo, useState } from 'react'
import {
  ColumnMappings,
  SortOrder,
  TableRecord,
  TableViewProps,
} from '../types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { TableContainer, camelCase } from './components'

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
      const valueA = a[column] === null ? '' : a[column];
      const valueB = b[column] === null ? '' : b[column];
      if (typeof valueA === 'string') {
        // @ts-ignore
        return order === SortOrder.asc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
      }
      // @ts-ignore
      return order === SortOrder.asc ? (valueA > valueB ? -1 : ((valueA < valueB) ? 1 : 0)) : (valueA < valueB ? -1 : ((valueA > valueB) ? 1 : 0))
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
