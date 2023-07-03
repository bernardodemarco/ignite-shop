import { styled } from ".."

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  padding: '0 1rem 0.5rem',

  maxWidth: 1212,
  margin: '0 auto',

  '@media screen and (max-width: 920px)': {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '32rem',
  height: 520,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

  '@media screen and (max-width: 920px)': {
    width: '32rem',
    maxWidth: '90vw',
    height: 520,

    img: {
      width: '80vw',
      height: 'auto'
    },
  },

  '@media screen and (max-width: 570px)': {
    height: 456,
  },

  '@media screen and (max-width: 350px)': {
    height: 300,

    img: {
      width: 256,
      objectFit: 'contain',
    },
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300'
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    color: '$white',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:hover': {
      backgroundColor: '$green300'
    },
  },

  '@media screen and (max-width: 920px)': {
    maxWidth: '80vw',

    button: {
      marginTop: '1.5rem',
    }
  },
})
