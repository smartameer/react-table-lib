import React, { FC, useState } from 'react'
import { SortOrder, TableHeaderProps } from '../types'
import {
  TableHeaderCell,
  TableHeaderComponent,
  TableHeaderSelectableCell,
} from './components'
import SortButton from './SortButton'

const TableHeader: FC<TableHeaderProps> = ({
  columns,
  selectable,
  title,
  onSort,
}) => {
  const columnsList = Object.keys(columns)
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null)

  const handleSort = (columnKey: string): void => {
    if (!onSort) {
      return
    }
    const order =
      sortColumn === columnKey
        ? sortOrder === SortOrder.asc
          ? SortOrder.desc
          : SortOrder.asc
        : SortOrder.asc
    setSortColumn(columnKey)
    setSortOrder(order)
    onSort(columnKey, order)
  }

  return (
    <TableHeaderComponent
      role="row"
      size={columnsList.length}
      selectable={!!selectable}
    >
      {selectable && (
        <TableHeaderSelectableCell role="columnheader">
          &nbsp;
        </TableHeaderSelectableCell>
      )}
      <TableHeaderCell
        selectable={!!selectable}
        size={1}
        role="columnheader"
        className="responsive"
      >
        {title}
      </TableHeaderCell>
      {columnsList.map(key => (
        <TableHeaderCell
          selectable={!!selectable}
          size={columnsList.length}
          key={key}
          role="columnheader"
          className="non-responsive"
        >
          {columns[key].label}
          {columns[key].sortable && (
            <SortButton
              column={key}
              order={sortColumn === key ? sortOrder : null}
              onSelect={handleSort}
            />
          )}
        </TableHeaderCell>
      ))}
    </TableHeaderComponent>
  )
}

export default TableHeader
