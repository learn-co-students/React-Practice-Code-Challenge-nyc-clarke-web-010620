import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let index = props.index
  let first = index + props.sushis.length % props.sushis.length
  let last = index + 4 + props.sushis.length % props.sushis.length

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(first, last).map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} eaten={props.eaten}/>)
        }
        <MoreButton showMore={props.showMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer