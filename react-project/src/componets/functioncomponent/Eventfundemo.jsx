import React from 'react'

const Eventfundemo = () => {
    let handleclick = ()=>{
        alert("we thout argument")
    }
    let handleAdd =(a,b)=>{alert(a+b)}
  return (  
    <>
      <h2>Event demo </h2>
      <button type="button" class="btn btn-primary me-2" onClick={()=>alert("argument join ")}>Click Me</button>
      <button type="button" class="btn btn-success me-2" onClick={handleclick}>Click Me</button>
      <button type="button" class="btn btn-warning me-2" onClick={()=>handleAdd(2,3)}>Add</button>
    </>
  )
} 

export default Eventfundemo
