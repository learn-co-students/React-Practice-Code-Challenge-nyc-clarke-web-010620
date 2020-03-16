import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((sushi, index) => {
      if (sushi.isEaten) {
        return <div className="empty-plate" style={{ top: -7 * index }}/>
      }
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ /* Give me how much money I have left */ } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.sushies)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table