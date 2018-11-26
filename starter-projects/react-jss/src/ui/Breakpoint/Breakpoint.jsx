import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

// Put this component at the top of any page and you will see what breakpoint you are on.

const Breakpoint = ({ classes }) => {
  return (
    <div>
      <div className={classNames([classes.base, classes.xs])}>xs</div>
      <div className={classNames([classes.base, classes.sm])}>sm</div>
      <div className={classNames([classes.base, classes.md])}>md</div>
      <div className={classNames([classes.base, classes.lg])}>lg</div>
      <div className={classNames([classes.base, classes.xl])}>xl</div>
    </div>
  )
}

const styles = theme => ({
  base: {
    display: 'none',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  xs: {
    [theme.breakpoints.only('xs')]: {
      backgroundColor: 'red',
      display: 'block',
    },
  },
  sm: {
    [theme.breakpoints.only('sm')]: {
      backgroundColor: 'green',
      display: 'block',
    },
  },
  md: {
    [theme.breakpoints.only('md')]: {
      backgroundColor: 'blue',
      display: 'block',
    },
  },
  lg: {
    [theme.breakpoints.only('lg')]: {
      backgroundColor: 'purple',
      display: 'block',
    },
  },
  xl: {
    [theme.breakpoints.only('xl')]: {
      backgroundColor: 'orange',
      display: 'block',
    },
  },


})

export default injectSheet(styles)(Breakpoint)