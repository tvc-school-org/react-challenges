import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Home from './Home'

const App = (props) => {
  const { classes } = props

  return (
    <div id='App-wrapper' className={classes.wrapper}>
      <div id='App-contentWraper' className={classes.contentWrapper}>
        <div id='App-content' className={classes.content}>
          <Home />
        </div>
      </div>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    flex: '1 0 auto',
    margin: '2% 10%',

  },
  content: {
    height: '100%',
  },
})

export default withStyles(styles)(App)
