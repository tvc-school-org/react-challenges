import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import ResponsiveImage from './ResponsiveImage'


const LeftRightSection = (props) => {
  const { children, classes, image, imageSide='left' } = props

  if (imageSide === 'left') {
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

const styles = {
  wrapper: {
    display: 'flex',
    margin: 8,
    minHeight: 100,
  },
  imageSideStyle: {
    flexBasis: '33.333333%',
    backgroundColor: 'orange',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    alignItems: 'center',
  },
  textSideStyle: {
    flexBasis: '66.666666%',
    backgroundColor: 'purple',
    padding: '8px 16px',
  },

}

export default withStyles(styles)(LeftRightSection)