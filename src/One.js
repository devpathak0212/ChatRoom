import React, { useState,setState } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import "./index.css"

function One() {

    const [toggle , setToggle] = useState(true);
    const switchToggleFalse = () =>
    {
        setToggle(false)
    }

    const switchToggleTrue = () =>
    {
      setToggle(true)
    }


  return (
    <div>
      <div className='box'>{
            toggle ?
            (
                <SignUp />
             ):
            (
                <SignIn />
            )
            
        }
        <div className='togg'>
          <div onClick={switchToggleFalse} className='signin'>SignIn</div>
          <div onClick={switchToggleTrue} className='signup'>SignUp</div> 
        </div>
      </div>
    </div>
  )
}

export default One