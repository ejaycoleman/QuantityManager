import '../assets/css/App.css';
import React, { Component } from 'react';

import ComponentList from './displayComponents/table.js'
/*import WrappedHorizontalLoginForm from './addComponent/form';*/

import styled from 'styled-components';

const BannerBar = styled.div`
  background-color: blue;
`;

const TitleText = styled.h1`
  color: white;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <BannerBar>
          <TitleText>Welcome to the component manager</TitleText>
        </BannerBar>
        <br/>
        <ComponentList />
        {/*}<WrappedHorizontalLoginForm />{*/}
      </div>
    );
  }
}

export default App;
