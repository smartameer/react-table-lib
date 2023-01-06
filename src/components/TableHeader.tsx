import React, { FC } from 'react'
import { ColumnMappings, Selectable } from '../types'
import styled from 'styled-components'
import { device } from '../theme/devices'

interface TableHeaderProps {
  title?: string
  columns: ColumnMappings
  selectable?: Selectable
}
const responsiveRadius = (radius: number) =>
  radius >= 8 && radius / 2 < 8 ? 8 : radius / 2
const TableHeaderComponent = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 24px;
  align-items: center;
  line-height: 1.75;
  letter-spacing: 0;
  font-family: 'Avenir Heavy';
  background: ${(props => props.theme.background?.header) || '#f3f3f3'};
  @media ${device.xs} {
    font-size: 16px;
    padding: 16px;
    border-top-left-radius: ${(props => responsiveRadius(props.theme.radius)) ||
      8}px;
    border-top-right-radius: ${(props =>
      responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.xs} {
    font-size: 16px;
    padding: 16px;
    border-top-left-radius: ${(props => responsiveRadius(props.theme.radius)) ||
      8}px;
    border-top-right-radius: ${(props =>
      responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.md} {
    font-size: 18px;
    padding: 16px;
    border-top-left-radius: ${(props => responsiveRadius(props.theme.radius)) ||
      8}px;
    border-top-right-radius: ${(props =>
      responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.lg} {
    font-size: 20px;
    padding: 24px;
    border-top-left-radius: ${(props => props.theme.radius) || 16}px;
    border-top-right-radius: ${(props => props.theme.radius) || 16}px;
  }
  @media ${device.xl} {
    font-size: 20px;
  }
`

const TableHeaderCell = styled.div.attrs(
  (props: { selectable: boolean; size: number }) => props
)`
  width: calc(
    ${props => (props.selectable ? '(100% - 48px)' : '100%')} /
      ${props => props.size}
  );
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props => props.theme.color?.header) || 'black'};
`

const TableHeaderSelectableCell = styled.div`
  width: 48px;
`

const TableHeader: FC<TableHeaderProps> = ({ columns, selectable }) => {
  return (
    <TableHeaderComponent role="rowgroup">
      {selectable && (
        <TableHeaderSelectableCell>&nbsp;</TableHeaderSelectableCell>
      )}
      {Object.keys(columns).map(key => (
        <TableHeaderCell
          selectable={!!selectable}
          size={Object.keys(columns).length}
          key={key}
          role="columnheader"
        >
          {columns[key].label}
        </TableHeaderCell>
      ))}
    </TableHeaderComponent>
  )
}

export default TableHeader
