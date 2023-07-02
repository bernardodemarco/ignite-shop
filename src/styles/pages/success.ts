import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 512,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    margin: '3rem 0 1.5rem'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 576,
    textAlign: 'center',
    lineHeight: 1.4,
  },

  a: {
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '4rem',
    fontSize: '$lg',
    color: '$green500',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const ImagesWrapper = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ImageContainer = styled('div', {
  marginRight: '-3.25rem',
  width: '8.75rem',
  height: '8.75rem',
  background: `linear-gradient(180deg, #1EA483 0%, #7465D4 100%)`,
  borderRadius: 1000,
  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
  padding: '0.25rem 0.3rem 0.2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:last-child': {
    marginRight: 0
  },

  img: {
    'object-fit': 'cover',
  },
})
