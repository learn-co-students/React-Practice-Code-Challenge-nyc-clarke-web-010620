import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

  state = {
    startIdx: 0
  }

  renderSushies = () => {
    return this.props.sushies.slice(this.state.startIdx, 4).map((sushi, key) => <Sushi key={key} {...sushi} eatSushi={this.props.eatSushi}/>)
  }

  renderNext = () => {
    this.setState({startIdx: this.state.startIdx + 4})
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushies()
          }
          <MoreButton renderNext={this.renderNext} renderSushies={this.renderSushies} sushies={this.props.sushies}/>
        </div>
      </Fragment>
    )
    
  }
}

export default SushiContainer