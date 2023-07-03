import { styled } from '@stitches/react'

export const CartContainer = styled('section', {
  variants: {
    isCartVisible: {
      true: {
        transform: 'translateX(0)'
      },
      false: {
        transform: 'translateX(110%)'
      },
    },
  },

  display: 'flex',
  flexDirection: 'column',

  position: 'fixed',
  zIndex: 2,
  top: 0,
  bottom: 0,
  right: 0,

  overflowY: 'scroll',
  width: '30rem',
  maxWidth: '100vw',
  backgroundColor: '$gray800',
  padding: '4.5rem 3rem 3rem 3rem',

  transition: 'transform 0.5s cubic-bezier(0.950, -0.005, 0.300, 0.995)',

  '::selection': {
    backgroundColor: '$gray900',
  },

  svg: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    cursor: 'pointer',
    color: '#8D8D99',

    '&:hover': {
      opacity: 0.7,
    },
  },

  h1: {
    fontSize: '$lg',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$gray100',
    marginBottom: '2rem',
  },

  button: {
    width: '100%',
    padding: '1.25rem 2rem',
    marginTop: '3.56rem',
    border: 0,
    borderRadius: 8,
    backgroundColor: '$green500',

    fontSize: '$md',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$white',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
  },

  '& > div': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    'span:nth-of-type(1)': {
      fontSize: '$sm',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '$gray100',
    },

    'span:nth-of-type(2)': {
      fontSize: '$md',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '$gray300',
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
  },

  '& > div:nth-of-type(1)': {
    marginTop: 'auto',
  },

  '@media screen and (max-width: 380px)': {
    padding: '1.75rem 1rem'
  },
})


export const Product = styled('article', {
  width: '100%',
  marginBottom: '1.45rem',
  display: 'grid',
  gridTemplateColumns: '6.37138rem 1fr',
  alignItems: 'stretch',
  gap: '1.25rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '6.37138rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0rem 0.22356rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  h3: {
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '$gray300',
  },

  strong: {
    fontSize: '$md',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$gray100',
  },

  span: {
    fontSize: '$sm',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$green500',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  },
})
