import React, { useState } from 'react'

export const Statedemo = () => {
     let [num1] = useState(2)
     let [num2] = useState(5)
     let [total,setTotal] = useState('')
  return (
    <>
        <h1>State demo</h1>
        <button type="button" className="btn btn-primary" onClick={()=>setTotal(num1+num2)}>Total</button>
        <h1>{total}</h1>
    </>
  )
}
