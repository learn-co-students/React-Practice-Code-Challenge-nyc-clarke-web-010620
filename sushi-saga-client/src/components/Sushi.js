import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" >
        {  !props.eaten.includes(props.sushi.id) 
            ?  <img onClick={() => props.eatSushi(props.sushi)} src={props.sushi.img_url} width="100%" />
            : null 

        }
           
        
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
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