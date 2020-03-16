import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.eatSushi}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={props.img_url} width="100%" id={props.id}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi

// {
//   "id": 1,
//   "name": "Maguro Magic",
//   "img_url": "./sushi/maguro.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
// }