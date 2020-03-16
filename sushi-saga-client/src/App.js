import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import sushis from './db.json';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state = {
    sushis: sushis
  }

  componentDidMount() {
    this.setState({
      sushis: sushis
    })
    console.log(this.state.sushis)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} />
        <Table />
      </div>
    );
  }
}

export default App;