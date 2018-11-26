import React, { Component } from 'react'
import injectSheet from 'react-jss'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h1 className={classes.h1}>React JSS Starter Project</h1>
        <ul>
          <li>react-jss installed and setup</li>
          <li>ThemeProvider setup and theme in src/theme</li>
          <li>Modify the theme or use as is</li>
          <li>Contains a Material UI like breakpoints implementation. Use it or use regulary media queries</li>
          <li>html and body defaults are set in <code>/src/index.css</code></li>
        </ul>
        <h2 className={classes.h2}>Suggestions</h2>
        <ul>
          <li>Create components to encapsulate repetitive use of theme. For example, instead of using <code>theme.typography.headings.md.h1</code> as it is done in this component, create a component that can be used for all instance if <code>h1</code>.</li>
          <li>The theme currently has properties for headings. Create properties for additional elements. For example, <code>p</code> or <code>ul</code> and <code>li</code> </li>
          <li>Think carefully about what styling should go in the theme and what styling should go in the components. For example, should properties for layout be in the theme?</li>
          <li>Build something simple</li>

        </ul>
      </div>
    )
  }
}

const styles = theme => {
  console.log('theme', theme)
  return ({
    h1: theme.typography.headings.md.h1,
    h2: theme.typography.headings.md.h2,
  })
}

export default injectSheet(styles)(App)