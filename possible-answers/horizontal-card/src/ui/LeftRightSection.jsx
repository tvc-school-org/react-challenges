import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withWidth } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import ResponsiveImage from './ResponsiveImage'


const LeftRightSection = (props) => {
  const { children, classes, image, imageSide='left', width } = props

  const side = ['xs', 'sm'].includes(width) ? 'right' : imageSide

  if (side === 'left') {
    return (
      <Paper className={classes.wrapper}>
        <div className={classes.imageSideStyle}>
          <ResponsiveImage src={image} alt='carl teaching' />
        </div>
        <div className={classes.textSideStyle}>
          {children}
        </div>
      </Paper>
    )
  }

  return (
    <Paper className={classes.wrapper}>
      <div className={classes.textSideStyle}>
        {children}
      </div>
      <div className={classes.imageSideStyle}>
        <ResponsiveImage src={image} alt='carl teaching' />
      </div>
    </Paper>
  )

}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    margin: 8,
    minHeight: 100,
    backgroundColor: 'lightgrey',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  imageSideStyle: {
    // backgroundColor: 'orange',
    flexBasis: '33.333333%',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'center',
  },
  textSideStyle: {
    // backgroundColor: 'purple',
    flexBasis: '66.666666%',
    padding: '8px 16px',
  },

})

export default withStyles(styles)(withWidth()(LeftRightSection))