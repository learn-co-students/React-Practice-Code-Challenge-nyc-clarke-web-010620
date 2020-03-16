import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let index = props.index
  let range = 

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis[props.index].map(sushi => <Sushi sushi={sushi}/>)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer