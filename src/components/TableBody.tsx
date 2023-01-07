import React, { FC, Fragment, useState } from 'react'
import {
  ColumnMapping,
  Selectable,
  TableBodyProps,
  TableRecord,
} from '../types'
import InputSelect from './InputSelect'
import {
  TableBodyCell,
  TableBodyRow,
  TableBodyRowSelectableCell,
} from './components'

interface RowsSelected {
  [key: string]: string | null
}

const TableBody: FC<TableBodyProps> = ({
  columns,
  data,
  selectable,
  onSelect: handleSelect,
}) => {
  const [selected, setSelected] = useState<number | RowsSelected | null>(
    selectable === Selectable.multiple ? {} : null
  )

  const handleSelectedRow = (data: TableRecord, index: number) => {
    if (selectable === Selectable.single) {
      setSelected(selected === index ? null : index)
      handleSelect && handleSelect(data)
    }
    if (selected instanceof Object && selectable === Selectable.multiple) {
      const key = `row-${index}` as string
      setSelected({
        ...selected,
        [key]: selected[key] === 'yes' ? null : 'yes',
      })
    }
  }

  const checkSelected = (key: number) => {
    if (selectable === Selectable.single) {
      return selected !== null && selected === key
    }

    if (selectable === Selectable.multiple) {
      return selected instanceof Object && selected[`row-${key}`] === 'yes'
    }
    return false
  }

  const getRowValue = (data: any, column: ColumnMapping): string => {
    if (column['format']) {
      return column['format'](data)
    }

    try {
      return data.toString()
    } catch (error) {
      console.log('Error in transforming to string', error)
    }
    return data || '-'
  }

  if (data) {
    return (
      <Fragment>
        {data.map((record, key) => (
          <TableBodyRow
            key={`row-${key}`}
            role="rowgroup"
            noborder={data.length === key + 1}
            selected={checkSelected(key)}
            size={Object.keys(columns).length}
          >
            {selectable && (
              <TableBodyRowSelectableCell size={Object.keys(columns).length}>
                <InputSelect
                  type={selectable}
                  onSelect={handleSelectedRow}
                  data={record}
                  index={key}
                  name={`row-${selectable}`}
                />
              </TableBodyRowSelectableCell>
            )}
            {Object.keys(columns).map((column, index) => (
              <TableBodyCell
                key={`cell-${key}-${index}`}
                role="cell"
                size={Object.keys(columns).length}
                selectable={!!selectable}
              >
                <strong className="header" title={columns[column].label}>
                  {columns[column].label}:{' '}
                </strong>
                <span title={getRowValue(record[column], columns[column])}>
                  {getRowValue(record[column], columns[column])}
                </span>
              </TableBodyCell>
            ))}
          </TableBodyRow>
        ))}
      </Fragment>
    )
  }
  return null
}

export default TableBody
