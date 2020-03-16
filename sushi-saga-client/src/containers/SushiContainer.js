import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => (
    <Fragment>
      <div className="belt">
     {/* {console.dir(props.sushis.sushis)} */}
      {props.sushis.sushis.map(sushi => <Sushi id={sushi.id} key={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price} />)}
        <MoreButton />
      </div>
    </Fragment>
  )


export default SushiContainer