import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis" 

// onclick image of sushi. we add the sushi to eaten array. just id 

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    money: 100
  }

  eatSushi = (sushi) => {
    let newBalance
    if (this.state.money >= sushi.price){
    newBalance = this.state.money - sushi.price
    let eatenCopy = [...this.state.eaten, sushi.id]
    this.setState({
     eaten: eatenCopy,
     money: newBalance   
    })
  } else {
    alert('noway')
  }
  
  }

  componentDidMount(prevState, prevProps) {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({sushis: data}))
  }

 

  
  

  render() {
    
    
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
        <Table eaten={this.state.eaten} money={this.state.money}/>
      </div>
    );
  }
}

export default App;