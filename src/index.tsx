import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import TableView from './components/TableView'
import { TableProps } from './types'
import DefaultTheme from './theme'
import { ErrorContainer } from './components/components'

class Table extends Component {
  constructor(props: TableProps) {
    super(props)
    this.state = { hasError: false } as any
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const {
      title,
      data,
      theme = DefaultTheme,
      columns,
      selectable,
      onSelect,
    } = this.props as TableProps
    const { hasError } = this.state as any

    if (hasError) {
      return (
        <ThemeProvider theme={theme}>
          <ErrorContainer>
            <pre>Something went wrong. Please refer documentation.</pre>
          </ErrorContainer>
        </ThemeProvider>
      )
    }

    if (!data || data === null || !(data instanceof Array)) {
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
}

export default Table
