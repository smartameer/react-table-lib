import React, { FC } from 'react'
import { ColumnMappings, Selectable } from '../types'
import {
  TableHeaderCell,
  TableHeaderComponent,
  TableHeaderSelectableCell,
} from './components'

interface TableHeaderProps {
  title?: string
  columns: ColumnMappings
  selectable?: Selectable
}

const TableHeader: FC<TableHeaderProps> = ({ columns, selectable, title }) => {
  const columnsList = Object.keys(columns)

  return (
    <TableHeaderComponent
      role="rowgroup"
      size={columnsList.length}
      selectable={!!selectable}
    >
      {selectable && (
        <TableHeaderSelectableCell>&nbsp;</TableHeaderSelectableCell>
      )}
      <TableHeaderCell
        selectable={!!selectable}
        size={1}
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
        </TableHeaderCell>
      ))}
    </TableHeaderComponent>
  )
}

export default TableHeader
