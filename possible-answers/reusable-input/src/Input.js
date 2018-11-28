import React from 'react'
import PropTypes from 'prop-types'
import isDate from 'date-fns/is_valid'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    marginTop: 5,
  },
  error: {
    color: 'red',
    fontSize: 10,
    padding: '4px 0'
  }
}

class Input extends React.Component {
  state = {
    error: false,
  }
  onChange = (event) => {
    this.props.onChange(event.target.value)
  }
  onBlur = (event) => {
    const inputType = this.props.type
    const regExEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const val = event.target.value

    if (inputType === 'email') {
      this.setState({
        error: !regExEmail.test(val)
      })
    } else if (inputType === 'date') {
      if (val === '') {
        this.setState({
          error: true
        })
      } else if (!isDate(val)) {
        this.setState({
          error: true
        })
      }
    } else {
      console.log('something went wrong, need code to handle this')
    }
  }

  render (props) {
    const { errorMessage, label, placeholder, type } = this.props
    return (
      <div style={styles.wrapper}>
        <label style={styles.label} htmlFor='multi-input'>{label}</label>
        <input
          id='multi-input'
          type={type}
          placeholder={placeholder}
          onChange={this.onChange}
          onBlur={this.onBlur}
          style={styles.input}
        />
        {
          this.state.error
            ? <div style={styles.error}>{errorMessage}</div>
            : null
        }

      </div>
    )
  }
}

export default Input

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
}


// regex
// label
// type
// number
// placeholder
