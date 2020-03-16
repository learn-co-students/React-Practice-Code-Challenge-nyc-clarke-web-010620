import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

const API = "http://localhost:3000/sushis"

class App extends Component {

  
  state = {
    sushis: [],
    sushiIndex:0,
  }

  showMore = () => {
    this.setState({sushiIndex: this.state.sushiIndex+= 4})
  }

  componentDidMount() {
    fetch("http://localhost:3000/sushis").then(resp=>resp.json()).then(cont => this.setState({sushis: cont}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} index={this.state.sushiIndex}/>
        <Table />
      </div>
    );
  }
}

export default App;