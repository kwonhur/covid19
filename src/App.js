import React, { Component } from 'react';
import SimpleMap from './google-map-react'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <SimpleMap/>
    </div>
  );
  }
}

export default App;
