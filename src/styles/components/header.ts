import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '0 1rem 2rem',
  width: '100%',
  maxWidth: 1308,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',

  variants: {
    isIconVisible: {
      true: {
        justifyContent: 'space-between',
      },
      false: {
        justifyContent: 'center',
        '& > div': {
          display: 'none'
        }
      }
    }
  },

  defaultVariants: {
    isIconVisible: true,
  }
})

export const IconContainer = styled('div', {
  variants: {
    isProductsAmountVisible: {
      true: {
        svg: {
          color: '$gray300',
        },
        span: {
          display: 'flex',
        },
      },
      false: {
        svg: {
          color: '#8D8D99',
        },
        span: {
          display: 'none',
        },
      },
    },
  },

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
    top: '-0.6rem',
    right: '-0.6rem',

    width: '1.625rem',
    height: '1.625rem',

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
