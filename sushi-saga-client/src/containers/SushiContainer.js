import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{ 

  state = {
    startIndx: 0,
  }

  renderSushis = () => {
    let fourSushis = this.props.sushis.slice(this.state.startIndx, this.state.startIndx + 4)
    return fourSushis.map((sushi, index) => <Sushi key={sushi.id} sushi={sushi} eatSushi={this.props.eatSushi} eaten={this.props.eaten}/>)
  }

  nextPage = () => {
 //nextPage(){
    console.log(this)
    if (this.state.startIndx >= this.props.sushis.length - 4) {
      this.setState({startIndx: 0})
    } else {
      this.setState({startIndx: this.state.startIndx + 4})
    }
  }



  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushis()
          }
          <MoreButton nextPage={this.nextPage}/>
        </div>
      </Fragment>
    )
    
  }
}

export default SushiContainer