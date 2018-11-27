import React from 'react'
import iWinter from './winter.jpg'
import './ImageViewer.css'

class ImageViewer extends React.Component {
  state = {
    show: true,

  }

  toggle = () => {
    this.setState((state, props) => ({
      show: !state.show
    }))
  }
  render () {
    const buttonText = this.state.show
      ? 'Hide the picture'
      : 'Show the picture'
    const image = this.state.show
      ? <img
          src={iWinter}
          className='img-fluid'
          alt='winter in central park new york'
        />
      : null
    return (
      <div className='image-wrapper'>
        <button
          className='btn'
          onClick={this.toggle}
        >
          {buttonText}
        </button>

        {image}
      </div>
    )
  }
}

export default ImageViewer