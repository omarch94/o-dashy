 import React from 'react'
 import { useStateContext } from '../contexts/ContextProvider'
 const Button = ({icon,color,bgColor,text,borderRadius,size,width,bgHoverColor}) => {
    const {setIsClicked,initialState} = useStateContext()
   return (
     <div
     onClick={() => setIsClicked(initialState)}
     type="button"
     style={{backgroundColor:bgColor, color:color ,borderRadius:borderRadius}}
     className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
     >
      {icon}{text}
     </div>
   )
 }
 
 export default Button