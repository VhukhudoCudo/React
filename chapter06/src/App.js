import './App.css';
import React, { Component } from 'react';
//import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
//import Products from './Products';

class App extends Component {

  render() {

    return (
      <div className="App">
        {/* <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside .
        </JumboTronComponent> */}
        <UserForm></UserForm>
        {/* <h1>Hello world</h1>
        <Products /> */}
      </div>
    );
  }
}

export default App;