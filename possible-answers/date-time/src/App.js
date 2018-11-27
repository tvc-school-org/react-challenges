import React from 'react';
import './App.css';
import DateTime from './DateTime'
import format from 'date-fns/format'

const dateStyle = {
  minWidth: 100,
  height: 24,
  backgroundColor: 'grey',
  textAlign: 'center',
  padding: '0 8px',
}

const showDates = {
  padding: '40px 0',
  display: 'flex',
  alignItems: 'center',
}

class App extends React.Component {

  state = {
    startDate: new Date(),
    endDate: new Date(),
    showResult: false,
  }

  onDateSelected = (startDate, endDate) => {
    console.log('startDate', startDate)
    console.log('endDate', endDate)

    this.setState({
      startDate: startDate,
      endDate: endDate,
      showResult: true,
    })
  }

  getDate = (startOrEndDate) => {
    console.log(format(this.state.startDate, 'MMM DD YYYY hh:mm A'))
    const d = this.state[startOrEndDate]
    return format(d, 'MMM DD YYYY hh:mm A')
  }

  render() {
    return (
      <div className="App">
        <h1>Date/Time Component</h1>
        <DateTime onDateSelected={this.onDateSelected} />
        {
          this.state.showResult
            ? <div style={showDates}>
                <p>The dates selected are:
                  <span style={dateStyle}>
                    {this.getDate('startDate')}
                  </span>
                  <span>{' to '}</span>
                  <span style={dateStyle}>
                    {this.getDate('endDate')}
                  </span>
                </p>
              </div>
            : null
        }

      </div>
    );
  }

}

export default App;
