import { ZIndex } from '@mui/material'

import breakpoints from './breakpoints'
import colors from './colors'
import { spacingFactor } from './spacings'
import typography from './typograph'

declare module '@mui/material/styles' {
  interface Palette {
    black: { [key: number]: string }
    blue: { [key: number]: string }
    brown: { [key: number]: string }
    gray: { [key: number]: string }
    green: { [key: number]: string }
    orange: { [key: number]: string }
    pink: { [key: number]: string }
    purple: { [key: number]: string }
    red: { [key: number]: string }
    teal: { [key: number]: string }
    white: { [key: number]: string }
    yellow: { [key: number]: string }
  }

  interface Theme {
    appBar: {
      height: string
    }
    leftSidebar: {
      collapsedSidebarWidth: number
      openSidebarWidth: number
    }
    measurements: {
      contentAvailableHeight: string
      profilePageMinHeight: number
      profilePageMinWidth: number
    }
    zIndex: ZIndex & {
      muiSelectMenuZIndex: number
      warningModal: number
    }
  }

  interface TypographyVariants {
    avatar: React.CSSProperties
    badgeSmall: React.CSSProperties
    bold: React.CSSProperties
    boldSmall: React.CSSProperties
    entryDescription1: React.CSSProperties
    entryDescription2: React.CSSProperties
    label: React.CSSProperties
    label2: React.CSSProperties
    labelLight: React.CSSProperties
    uppercasedButton: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    avatar: React.CSSProperties
    badgeSmall: React.CSSProperties
    bold: React.CSSProperties
    boldSmall: React.CSSProperties
    entryDescription1: React.CSSProperties
    entryDescription2: React.CSSProperties
    label: React.CSSProperties
    label2: React.CSSProperties
    labelLight: React.CSSProperties
    uppercasedButton: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    avatar: true
    badgeSmall: true
    bold: true
    boldSmall: true
    entryDescription1: true
    entryDescription2: true
    label: true
    label2: true
    labelLight: true
    uppercasedButton: true
  }
}

const styles = {
  breakpoints: {
    values: {
      xs: breakpoints.values.xs,
      sm: breakpoints.values.sm,
      md: breakpoints.values.md,
      lg: breakpoints.values.lg,
      xl: breakpoints.values.xl,
    },
  },
  typography,
  palette: {
    black: colors.black,
    blue: colors.blue,
    brown: colors.brown,
    gray: colors.gray,
    green: colors.green,
    orange: colors.orange,
    pink: colors.pink,
    purple: colors.purple,
    red: colors.red,
    teal: colors.teal,
    white: colors.white,
    yellow: colors.yellow,
  },
  spacing: (spacing: number) => spacingFactor(spacing),
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
}

export default styles
