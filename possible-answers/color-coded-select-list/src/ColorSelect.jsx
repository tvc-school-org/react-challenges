import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  red: {
    backgroundColor: 'red',
    color: 'white',
  },
  yellow: {
    backgroundColor: 'yellow',
    color: 'black',
  },
  green: {
    backgroundColor: 'green',
    color: 'white',
  }
}

const ColorSelect = (props) => {
  const { data } = props
  return (
    <div>
      <select>
        <option>select one</option>
        {
          data.map(s => {
            console.log('style', styles[s.status])
            return (
              <option
                key={s.id}
                value={s.name}
                style={styles[s.status]}
              >
                {s.name}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

export default ColorSelect

ColorSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }) ).isRequired,
}