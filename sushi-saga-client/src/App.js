import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

const API = "http://localhost:3000/sushis"

class App extends Component {

  
  state = {
    sushis: [],
    eaten: [],
    sushiIndex:0, 
    money: 100
  }

  showMore = () => {
    this.setState({sushiIndex: this.state.sushiIndex + 4})
  }

  componentDidMount() {
    fetch(API).then(resp=>resp.json()).then(cont => this.setState({sushis: cont}))
  }

  eatSushi = (sushi) =>{
    if(this.state.money >= sushi.price){
      this.setState({eaten: [...this.state.eaten, sushi], money: this.state.money - sushi.price})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} index={this.state.sushiIndex} showMore={this.showMore} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;