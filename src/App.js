import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import Profile from './components/Profile';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading title = "Shanti Swarup Tunga" />
        <Profile title = "Full stack developer" />
        <Skills />
      </div>
    );
  }
}

export default App;
