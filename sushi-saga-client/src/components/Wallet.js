import React, { Fragment } from 'react'

const Wallet = (props) => {
  return (
    <div>
        <form onSubmit={(e)=>props.addMoney(e)}>
        <label>
            Add Money:
            <input type="number" name="money" value={props.form} onChange={(e)=>props.handleOnChange(e)} />
        </label>
        <button>Add to Wallet</button>
        </form>
    </div>
  )
}

export default Wallet