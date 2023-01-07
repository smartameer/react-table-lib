import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import TableView from './components/TableView'
import { TableProps } from './types'
import DefaultTheme from './theme'

const Div = styled.div`
  color: tomato;
  display: flex;
  justify-content: center;
  align-items: middle;
  padding: 24px;
  box-shadow: 0 2px 6px 2px
    ${(props => props.theme.background?.shadow) || '#ececec'};
  background: ${(props => props.theme.background?.default) || 'white'};
  border-radius: ${(props => props.theme.radius) || 16}px;
`

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
        <Div>
          <pre>
            <code>data</code> is required property to use <code>Table</code>.
          </pre>
        </Div>
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
