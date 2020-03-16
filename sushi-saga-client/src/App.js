import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!

const API = "http://localhost:3000/sushis"

class App extends Component {

  
  state = {
    sushis: [],
    eaten: [],
    sushiIndex:0, 
    money: 100,
    form: 0
  }

  showMore = () => {
    (this.state.sushiIndex >= this.state.sushis.length - 4) ? 
    this.setState({sushiIndex: 0}) :
    this.setState({sushiIndex: this.state.sushiIndex + 4})
  }

  componentDidMount() {
    fetch(API).then(resp=>resp.json()).then(cont => this.setState({sushis: cont}))
  }

  eatSushi = (sushi) =>{
    if(this.state.money >= sushi.price){
      if(!this.state.eaten.includes(sushi)){
      this.setState({eaten: [...this.state.eaten, sushi], money: this.state.money - sushi.price})
      }
    }
  }

  addMoney = (e) => {
    e.preventDefault()
    this.setState({money: this.state.money + this.state.form})
  }

  handleOnChange = (e) => {
    this.setState({form: parseInt(e.target.value)})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} index={this.state.sushiIndex} showMore={this.showMore} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
        <Wallet addMoney={this.addMoney} handleOnChange={this.handleOnChange} form={this.state.form}/>
      </div>
    );
  }
}

export default App;