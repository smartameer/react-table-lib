import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import TableView from './components/TableView'
import { TableProps } from './types'
import DefaultTheme from './theme'
import { ErrorContainer } from './components/components'

const Table: FC<TableProps> = ({
  title,
  data,
  theme = DefaultTheme,
  columns = {},
  selectable,
  onSelect,
}) => {
  if (data === null || !data || !(data instanceof Array)) {
    return (
      <ThemeProvider theme={theme}>
        <ErrorContainer>
          <pre>
            <code>data</code> is required property to use <code>Table</code>.
          </pre>
        </ErrorContainer>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <TableView
        data={data}
        columns={columns}
        title={title}
        selectable={selectable}
        onSelect={onSelect}
      />
    </ThemeProvider>
  )
}

export default Table
