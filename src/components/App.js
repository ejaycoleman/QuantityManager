import '../assets/css/App.css';
import React, { Component } from 'react';

import ComponentList from './displayComponents/table.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
        <ComponentList />
      </div>
    );
  }
}

export default App;
