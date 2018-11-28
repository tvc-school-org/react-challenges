import React from 'react';
import './App.css';
import Input from './Input'

const styles = {
  wrapper: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dateInput: {
    marginTop: 25,
  },
}

class App extends React.Component {
  state = {
    value: ''
  }
  handleInputOnChange = (value) => {
    console.log('handleInputOnChange', value);

    this.setState({
      value: value
    })
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.inputs}>
          <div style={styles.emailInput}>
            <Input
            type='email'
            onChange={this.handleInputOnChange}
            label='Email input'
            errorMessage='Invalid email address'
            />
          </div>
          <div style={styles.dateInput}>
            <Input
              type='date'
              onChange={this.handleInputOnChange}
              label='Date input'
              errorMessage='Invalid date'
            />
          </div>
        <br/>
        {
          (this.state.value.length > 0)
            ? <p>The value of the input is: {this.state.value}</p>
            : null
        }
        </div>
      </div>
    );
  }
}

export default App;
