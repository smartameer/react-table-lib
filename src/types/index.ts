import { HTMLAttributes } from 'react'

export enum Selectable {
  single = 'single',
  multiple = 'multiple',
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
  order?: number
}

export interface ColumnMappings {
  [key: string]: ColumnMapping
}

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  data: Array<TableRecord> | null | undefined
  title?: string
  theme?: ThemeModel
  columns?: ColumnMappings
  selectable?: Selectable
}
