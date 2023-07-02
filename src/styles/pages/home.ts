import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  marginLeft: 'auto',
  marginRight: '0.5rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1300px) / 2))',
  minHeight: 520
})

export const Product = styled(Link, {
  minWidth: '32.5rem',

  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',

  borderRadius: 8,
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
    padding: '1.25rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    transition: 'transform 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
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
    }
  }
})
