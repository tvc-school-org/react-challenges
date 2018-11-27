import React from 'react';
import './App.css';
import stateStatus from './stateStatus'
import ColorSelect from './ColorSelect'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Just React</h1>
        <h2>Bootstraped with Create React App</h2>
        <h2>Cleaned-up a bit</h2>
        <ColorSelect data={stateStatus} />
      </div>
    );
  }
}

export default App;