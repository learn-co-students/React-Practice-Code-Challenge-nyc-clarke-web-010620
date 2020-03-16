import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis" 



class App extends Component {

  state = {
    sushies: []
  }

  eatSushi = (event) => {
    // id will be event.target.id using findIndex
    let sushiesCopy = [... this.state.sushies]
    let sushiIndx = sushiesCopy.findIndex(sushi => sushi.id == event.target.id )
    sushiesCopy[sushiIndx].isEaten = true 
    // debugger
    this.setState({sushies: sushiesCopy})
  }

  componentDidMount(prevState, prevProps) {
    fetch(API)
    .then(resp => resp.json())
    .then(data => data.map(obj=> Object.assign({}, obj, {isEaten: false})))
    .then(data => this.setState({sushies: data}))
  }

  render() {
console.log(this.state.sushies)
    return (
      <div className="app">
        <SushiContainer sushies={this.state.sushies} eatSushi={this.eatSushi}/>
        <Table sushies={this.state.sushies}/>
      </div>
    );
  }
}

export default App;