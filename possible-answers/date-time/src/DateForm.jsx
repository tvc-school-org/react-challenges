import React from 'react'
import PropTypes from 'prop-types'
import DateTime from './DateTime'

class DateForm extends React.Component {

  state = {
    startDate: new Date(),
    endDate: new Date()
  }

  onSubmitClick = () => {
    const { onDateSelect } = this.props
    const { startDate, endDate } = this.state
    onDateSelect(startDate, endDate)
  }

  dateSelected = (selectedDate, control) => {
    console.log('selectedDate', selectedDate)
    console.log('control', control)
    this.setState({
      [control]: selectedDate
    })
  }

  render () {
    return (
      <div>
        <label>Start</label>
        <DateTime
          onDateSelected={(e) => this.dateSelected(e, 'startDate')}
        />
        <label>End</label>
        <DateTime
          onDateSelected={(e) => this.dateSelected(e, 'endDate')}
        />
        <button onClick={this.onSubmitClick}>Submit</button>
      </div>
    )
  }
}

export default DateForm

DateForm.propsTypes = {
  onDateSelect: PropTypes.func.isRequired
}
