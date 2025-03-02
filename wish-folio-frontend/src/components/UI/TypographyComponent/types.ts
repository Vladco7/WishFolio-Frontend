import type { CSSProperties } from 'vue'

export interface TypographyComponentProps {
  variant: TypographyVariant
  style?: CSSProperties
}

export enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  body1 = 'body1',
}

export type TypographyVariantStyles = {
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
}

export const TypographyVariantToStylesMap: Record<TypographyVariant, TypographyVariantStyles> = {
  [TypographyVariant.h1]: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '40px',
  },
  [TypographyVariant.h2]: {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '36px',
  },
  [TypographyVariant.h3]: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '32px',
  },
  [TypographyVariant.h4]: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '28px',
  },
  [TypographyVariant.h5]: {
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '24px',
  },
  [TypographyVariant.h6]: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '20px',
  },
  [TypographyVariant.body1]: {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '20px',
  },
}
