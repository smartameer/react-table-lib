import React, { FC, useMemo } from 'react'
import { ColumnMappings, TableProps } from '../types'
import styled from 'styled-components'
import TableHeader from './TableHeader'
import { device } from '../theme/devices'

const responsiveRadius = (radius: number) =>
  radius >= 8 && radius / 2 < 8 ? 8 : radius / 2
const TableContainer = styled.div`
  background: ${(props => props.theme.background.default) || '#fff'};
  box-shadow: 0 4px 4px 0px
    ${(props => props.theme.background.shadow) || '#f3f3f3'};
  display: block;
  width: 100%;
  max-width: 98vw;
  font-family: 'Avenir Book';
  @media ${device.xs} {
    border-radius: ${(props => responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.xs} {
    border-radius: ${(props => responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.md} {
    border-radius: ${(props => responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.lg} {
    border-radius: ${(props => props.theme.radius) || 16}px;
  }
`

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

const TableView: FC<TableProps> = ({ title, data, columns, selectable }) => {
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
      <br />
      {JSON.stringify(data)}
      <br />
      {JSON.stringify(columns)}
    </TableContainer>
  )
}

export default TableView
