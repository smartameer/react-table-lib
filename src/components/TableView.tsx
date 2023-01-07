import React, { FC, useMemo } from 'react'
import { ColumnMappings, TableViewProps } from '../types'
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

  return (
    <TableContainer role="table" aria-label={title}>
      <TableHeader
        title={title}
        columns={columnsList}
        selectable={selectable}
      />
      <TableBody
        data={data}
        columns={columnsList}
        selectable={selectable}
        onSelect={onSelect}
      />
    </TableContainer>
  )
}

export default TableView
