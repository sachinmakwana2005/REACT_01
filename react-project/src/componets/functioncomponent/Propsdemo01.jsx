// import React from 'react'

// const Propsdemo01 = (props) => {
//   return (
//     <div>
//       <h2>{props.mobileno}</h2>
//       {props.children}
//     </div>
//   )
// }

// export default Propsdemo01



  // PROPS DESTUCTURING
import React from 'react'
const Propsdemo01 = ({username="ram",mobileno,isMarried,children}) => {     //Defaultprops
  return (
    <div>
      <h1>Propds demo</h1>
      <h2>{mobileno}</h2> 
      <h3>{username}</h3>
      {/* {children} */}
      {children ?. [1]}
    </div>
  )
} 

export default Propsdemo01
