import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Title from './Title';
import FacetsBar from './FacetsBar';
import StartMessage from './StartMessage';
import Table from './Table';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <Title />
          <FacetsBar />
          <StartMessage />
          <Table />
      </div>
    );
  }
}

export default App;
