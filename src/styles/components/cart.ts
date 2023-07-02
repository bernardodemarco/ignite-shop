import { styled } from "@stitches/react";

export const CartContainer = styled('section', {
  position: 'fixed',
  zIndex: 2,
  top: 0,
  bottom: 0,
  right: 0,

  width: '30rem',
  backgroundColor: '$gray800',
  padding: '4.5rem 3rem 3rem 3rem',

  svg: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    cursor: 'pointer',
    color: '#8D8D99',
  },

  h1: {
    fontSize: '$lg',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$gray100',
  },

  div: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      fontSize: '$sm',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '$gray100',
    },

    'strong:nth-of-type(1)': {
      fontSize: '$md',
      fontWeight: 700,
      lineHeight: 1.6,
      color: '$gray100',
    },

    'strong:nth-of-type(2)': {
      fontSize: '$xl',
      fontWeight: 700,
      lineHeight: 1.4,
      color: '$gray100',
    },
  }
})

export const Text = styled('span', {
  variants: {
    weight: {
      bold: {
        fontWeight: 700,
      },
      light: {
        fontWeight: 400,
      }
    },
    size: {
      small: {
        fontSize: '$sm'
      },
      medium: {
        fontSize: '$md'
      },
      large: {
        fontSize: '$xl'
      },
    },
    color: {
      'gray100': {
        color: '$gray100',
      },
      'gray300': {
        color: '$gray300',
      },
      green: {
        color: '$green500',
      },
    },
    lineHeight: {
      small: {
        lineHeight: 1.4,
      },
      large: {
        lineHeight: 1.6,
      },
    }
  }
})

export const Product = styled('article', {

})
