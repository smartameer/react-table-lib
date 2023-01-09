import { HTMLAttributes } from 'react'

export enum Selectable {
  single = 'single',
  multiple = 'multiple',
}

export enum SortOrder {
  asc = 0,
  desc = 1,
}

interface Background {
  default?: string
  selected?: string
  header?: string
  shadow?: string
}

interface Color {
  default?: string
  selected?: string
  border?: string
  header?: string
  primary?: string
}

export interface ThemeModel {
  radius?: number
  background?: Background
  color: Color
}

export interface TableRecord {
  [key: string]: string | number | boolean | null | undefined
}

export interface ColumnMapping {
  label: string
  sortable?: boolean
  priority?: number
  format?: (...args: any[]) => string
}

export interface ColumnMappings {
  [key: string]: ColumnMapping
}

export interface SortButtonProps {
  column: string
  order: SortOrder | null
  onSelect: (...args: any[]) => void
}

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  data?: Array<TableRecord> | null | undefined
  title?: string
  theme?: ThemeModel
  columns?: ColumnMappings
  selectable?: Selectable
  onSelect?: (...args: any[]) => any
}

export interface TableViewProps extends HTMLAttributes<HTMLDivElement> {
  data: Array<TableRecord>
  title?: string
  theme?: ThemeModel
  columns?: ColumnMappings
  selectable?: Selectable
  onSelect?: (...args: any[]) => any
}

export interface TableHeaderProps {
  title?: string
  columns: ColumnMappings
  selectable?: Selectable
  onSort?: (column: string, order: SortOrder) => any
}

export interface TableBodyProps {
  data: Array<TableRecord>
  columns: ColumnMappings
  selectable?: Selectable
  onSelect?: (...args: any[]) => any
}

export interface SelectProps {
  type: Selectable
  name: string
  data: TableRecord
  index: number
  onSelect: (...args: any[]) => any
}
