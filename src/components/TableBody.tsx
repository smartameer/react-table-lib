import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import { ColumnMappings, Selectable, TableRecord } from '../types'
import { device } from '../theme/devices'



interface TableBodyProps {
  data: Array<TableRecord>
  columns: ColumnMappings
  selectable?: Selectable
}

const TableBodyRow = styled.div.attrs(
  (props: { noborder: boolean; }) => props
)`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  font-family: 'Avenir Book';
  @media ${device.xs} {
    padding: 8px 16px;
  }
  @media ${device.sm} {
    padding: 8px 16px;
  }
  @media ${device.md} {
    padding: 8px 16px;
  }
  @media ${device.lg} {
    padding: 24px;
  }
  ${props => props.noborder ? '' : 'border-bottom: 1px solid ' + props.theme.color?.border || '#e1e1e1'};
`
const TableBodyCell = styled.div.attrs(
  (props: { selectable: boolean; size: number }) => props
)`
  width: calc(
    ${props => (props.selectable ? '(100% - 48px)' : '100%')} /
      ${props => props.size}
  );
  color: ${(props => props.theme.color?.default) || 'black'};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TableBodyRowSelectableCell = styled.div`
  width: 48px;
`

const TableBody: FC<TableBodyProps> = ({ columns, data, selectable }) => {
  console.log(selectable);
  if (data) {
    return (
      <Fragment>
        {data.map((record, key) => (
          <TableBodyRow key={key} role="rowgroup" noborder={data.length === key + 1}>
            {selectable && (
              <TableBodyRowSelectableCell>&nbsp;</TableBodyRowSelectableCell>
            )}
            {Object.keys(columns).map(column => (
              <Fragment key={key}>
                <TableBodyCell
                  role="cell"
                  size={Object.keys(columns).length}
                  selectable={!!selectable}
                >
                  {record[column]}
                </TableBodyCell>
              </Fragment>
            ))}
          </TableBodyRow>
        ))}
      </Fragment>
    )
  }
  return null
}

export default TableBody
