import React, { FC, useMemo } from 'react'
import { ColumnMappings, TableViewProps } from '../types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import useSortableData from '../hooks/SortableData'
import { capitalize } from '../utils'
import { TableContainer } from './StyledComponents'

const TableView: FC<TableViewProps> = ({
  title,
  data,
  columns,
  selectable,
  onSelect,
}) => {
  const { records, handleSort } = useSortableData(data)

  const columnsList = useMemo(() => {
    let headers = {} as ColumnMappings
    if (columns && Object.keys(columns).length > 0) {
      headers = columns
    } else if (data) {
      const keys = Object.keys(data[0])
      const headerList = {} as ColumnMappings
      keys.map((item, index) => {
        headerList[item] = {
          label: capitalize(item),
          priority: index,
          sortable: false,
        }
        return item
      })
      headers = headerList
    }
    return headers
  }, [columns, data])

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
