import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  gap: '3rem',
  marginLeft: 'auto',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656
})

export const Product = styled('a', {
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',

  borderRadius: 8,
  padding: '0.25rem',
  background: `linear-gradient(180deg, #1EA483 0%, #7465D4 100%)`,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    borderRadius: 6,
    padding: '2rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})
