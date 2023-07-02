import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '0 1rem 2rem',
  width: '100%',
  maxWidth: 1308,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const IconContainer = styled('div', {
  cursor: 'pointer',
  position: 'relative',
  width: '3rem',
  height: '3rem',
  padding: '0.75rem',
  borderRadius: '6px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$gray800',

  svg: {
    color: '$gray300',
  },

  span: {
    position: 'absolute',
    top: '-0.4375rem',
    right: '-0.4375rem',

    width: '1.5rem',
    height: '1.5rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 1000,
    border: '3px solid $gray900',
    backgroundColor: '$green500',

    color: '$white',
    fontSize: '0.875rem',
    fontWeight: 700,
  },
})
