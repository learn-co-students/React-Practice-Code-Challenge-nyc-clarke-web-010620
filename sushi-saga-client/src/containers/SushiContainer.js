import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => (
    <Fragment>
      <div className="belt">
     {/* {console.dir(props.sushis.sushis)} */}
      {props.sushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} eat={props.eat} taken={props.eaten.includes(sushi)}/>)}
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )


export default SushiContainer