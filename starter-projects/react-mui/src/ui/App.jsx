import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const App = (props) => {
  const { classes } = props

  return (
    <div id='App-wrapper' className={classes.wrapper}>
      <h1>Starter Project</h1>
      <h2>With Material UI</h2>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default withStyles(styles)(App)
