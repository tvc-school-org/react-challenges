import React from "react"
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker"

// import "react-datepicker/dist/react-datepicker.css"

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const pickerDiv = {
  display: 'flex',
  minHeight: 50,
}

const picker = {
  padding: '0 15px'
}

const btn = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 15px'
}

class DateTime extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  }

  handleChange = (date, startOrEnd) => {
    // console.log('date', date)
    // console.log('type', startOrEnd)
    this.setState({
      [startOrEnd]: date
    })
    // this.props.onDateSelected(date)
  }

  onDoneClick = () => {
    const { startDate, endDate } = this.state
    this.props.onDateSelected(startDate, endDate)
  }

  render() {
    return (
      <div>
        <div style={pickerDiv}>
          <div style={picker}>
            <DatePicker
              selected={this.state.startDate}
              onChange={(date) => this.handleChange(date, 'startDate')}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </div>
          <div style={picker}>
            <DatePicker
              selected={this.state.endDate}
              onChange={(e) => this.handleChange(e, 'endDate')}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </div>
        </div>
        <div style={btn}>
          <button onClick={this.onDoneClick}>Done</button>
        </div>
      </div>
    )
  }
}

export default DateTime

DateTime.propsTypes = {
  onDateSelected: PropTypes.func.isRequired
}