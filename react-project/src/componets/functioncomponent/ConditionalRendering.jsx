import React from 'react'

export const ConditionalRendering = ({username,isMarried}) => {
  return (
    <div>
        <h4>{isMarried ? "user is Married" : "user is not Married"}</h4>

      <h4>{(isMarried && username=="Sachin") ? "user is Married" : "user is not married"}</h4>

      <h4>{(isMarried && username=="Sachin") ? <div>{username} is married</div> : <div>{username} is not merried</div>}</h4>

      <h4>{(isMarried && username=="Sachin") ? <div>{username} is married</div> : ""}</h4>

      <h4>{isMarried ? <div> <h1>{username} is married</h1> <h2>Thank you for login</h2></div> : ""}</h4>
       
      <h4>{isMarried && <div>{username} is married</div>}</h4>  
    </div>
  )
}
