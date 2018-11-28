import React, { Component } from 'react'
import withThemeProvider from 'ui/withThemeProvider'
import injectSheet from 'react-jss'
import { compose } from 'recompose'

class App extends Component {
  state = {
    weatherData: null
  }
  componentDidMount() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=san%20ramon,us&appid=cd605b9a7b8b517b82492ee7bf47a295'
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        // console.log('json', json)
        this.setState({
          weatherData: json
        })
      })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.app}>
        <blockquote className={classes.note}>
          <p>Quick note on this example:</p>
          <p>This sample is using JSS (a.k.a. CSS in JS). If you are not familiar with that, just ignore the styling and focus on the code in <code>&lt;App /&gt;</code></p>
        </blockquote>
        <h1 className={classes.h1}>Getting Data via API</h1>
        <p>I got some data via an the OpenWeatherMap API. The data was called in <code>componentDidMount</code> and put in state.</p>
        <p>Here is the data I got:</p>
        <pre className={classes.code}>
          {JSON.stringify(this.state.weatherData, null, 4)}
        </pre>
      </div>
    )
  }
}


const styles = theme => {
  return ({
    note: {
      backgroundColor: '#5e259b',
      padding: '2px 10px',
    },
    app: {
      backgroundColor: 'rgb(25, 25, 25)',
      color: 'white',
      margin: 0,
      padding: 30,
    },
    h1: theme.typography.headings.md.h1,
    h2: theme.typography.headings.md.h2,
    code: {
      fontSize: 10,
    }
  })
}

// export default injectSheet(styles)(App)
export default compose(
  withThemeProvider,
  injectSheet(styles)
)(App)
