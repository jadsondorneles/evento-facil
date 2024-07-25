import local from '@next/font/local'

export const font = local({
  src: [
    {
      path: '../fonts/product-sans/ProductSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/product-sans/ProductSans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/product-sans/ProductSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/product-sans/ProductSans-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/product-sans/ProductSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/product-sans/ProductSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/product-sans/ProductSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/product-sans/ProductSans-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/product-sans/ProductSans-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/product-sans/ProductSans-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/product-sans/ProductSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/product-sans/ProductSans-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
})

const typography = {
  htmlFontSize: 16,
  fontFamily: font.style.fontFamily,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900,
  h1: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '56px',
  },
  h2: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '44px',
  },
  h3: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '40px',
  },
  h4: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '28px',
  },
  subtitle1: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  subtitle2: {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  body1: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
  },
  button: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    textTransform: 'capitalize',
  },
  caption: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  overline: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '22px',
    textTransform: 'capitalize',
  },
  bold: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '22px',
  },
  boldSmall: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  uppercasedButton: {
    fontSize: '14px',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  avatar: {
    fontSize: '11px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  label: {
    fontSize: '11px',
    fontWeight: 600,
    lineHeight: '16px',
  },
  label2: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
  },
  labelLight: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  badgeSmall: {
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '22px',
  },
  entryDescription1: {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '20px',
  },
  entryDescription2: {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '20px',
  },
}

export default typography
