import React from 'react'
import withThemeProvider from 'ui/withThemeProvider'
import App from './App'
import injectSheet from 'react-jss'
import { compose } from 'recompose'


const styles = theme => ({

})

const AppWrapper = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <App />
    </div>
  )
}

export default compose(
  withThemeProvider,
  injectSheet(styles)
)(AppWrapper)
