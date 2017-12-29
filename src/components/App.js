import '../assets/css/App.css';
import React, { Component } from 'react';

import ComponentList from './displayComponents/table.js'
/*import WrappedHorizontalLoginForm from './addComponent/form';*/

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the component manager</h1>
        <br/>
        <ComponentList />
        {/*}<WrappedHorizontalLoginForm />{*/}
      </div>
    );
  }
}

export default App;
