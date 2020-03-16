import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    money: 100,
    displayIndex: 0
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => 
      this.setState({ 
      sushis: data
    })
    // .then((data) => {console.log(data)}
    
    )
    
  }

  // navSort(sushi) {
  //   return  (
  //     <Sushi id={sushi.id} key={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price} />
  //   )
  // }

  fourSushiNav = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4

    if(newDisplayIndex >= this.state.sushis.length){
      newDisplayIndex = 0
    }

    this.setState({
      displayIndex: newDisplayIndex
    })
  }
  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && newMoney >=0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }

  render() {
    return (
      <div className="app">
        {/* {console.log(this.state.sushis[0])} */}
        <SushiContainer sushis={this.fourSushiNav()} 
        more={this.more}
        eat={this.eat}
        eaten={this.state.eaten} />
        <Table money={this.state.money} 
        eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;