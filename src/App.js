import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log('im clicked')}} />;
      </div>
    )
  }
}

export default App;
