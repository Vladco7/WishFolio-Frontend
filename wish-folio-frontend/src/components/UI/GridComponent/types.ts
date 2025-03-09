import type { CSSProperties } from 'vue'

export interface GridComponentProps {
  columns: number | string
  rowGap?: number | string
  columnGap?: number | string
  style?: CSSProperties
}
