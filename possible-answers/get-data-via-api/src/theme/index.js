import createBreakpoints from 'ui/createBreakpoints'

const breakpoints = createBreakpoints({})

const theme = {
  breakpoints: {
    keys: breakpoints.keys,
    values: breakpoints.values,
    up: breakpoints.up,
    down: breakpoints.down,
    between: breakpoints.between,
    only: breakpoints.only,
  },
  typography: {
    headings: {
      common: {

      },
      xs: {
        h1: {
          fontSize: '2.5rem',
          lineHeight: 1.2,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'center',
          margin: '0 0 20px 0',
        },
        h2: {
          fontSize: '2.0rem',
          lineHeight: 1.375,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'center',
          margin: '0 0 20px 0',
        },
        h3: {
          fontSize: '1.25rem',
          lineHeight: 1.375,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'center',
        },
        h4: {
          fontSize: '1.0rem',
          lineHeight: 1.375,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'center',
        },
        subtitle1: {
          fontSize: '1.375rem',
          lineHeight: 'inherit',
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        },
        subtitle2: {
          fontSize: '1.25rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        },
        subtitle3: {
          fontSize: '1.1rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        },
      },
      md: {
        h1: {
          fontSize: '3.5rem',
          lineHeight: 1.2,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        h2: {
          fontSize: '2.25rem',
          lineHeight: 1.375,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        h3: {
          fontSize: '1.5rem',
          lineHeight: 1.375,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        h4: {
          fontSize: '1.1rem',
          lineHeight: 1.375,
          fontWeight: 300,
          letterSpacing: '-0.05em',
          textAlign: 'left',
        },
        subtitle1: {
          fontSize: '1.375rem',
          lineHeight: 'inherit',
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'left',
        },
        subtitle2: {
          fontSize: '1.25rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'left',
        },
        subtitle3: {
          fontSize: '1.1rem',
          lineHeight: 1.65,
          fontStyle: 'italic',
          marginTop: '-0.65rem',
          marginBottom: '1.5rem',
          textAlign: 'left',
        },
      },
    }


  },
  spacing: {
    unit: 8,
  }
}

export default theme