import React from 'react'
import { Store } from '../store/context/AppContext'


const Gender = ({sex}) => {
    const arr =['Male', 'Female', 'Others']
    const {gender} = Store()
    
  return (
      
    <div  >
        {gender && <div className='w-[35%] max-h-12 overflow-scroll bg-white p-5 absolute top-[23rem] right-44'  >
        {arr.map((Gender, index)=>{
            return(
                <p key={index} >{Gender}</p>
            )
        })}

    </div>
        }
    </div>
  )
}

export default Gender