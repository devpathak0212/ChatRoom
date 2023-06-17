import React, { useState } from 'react'
import { auth, db } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import "./index.css"
import { addDoc, collection } from 'firebase/firestore'

function SignUp() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [username,setUsername] = useState('')
    // const messageRef2 = collection(db,"username")
  
    const login = async (e) =>{
      try{
        const user = await createUserWithEmailAndPassword(auth,email,password)
        console.log(user)
        user.email = ''
        // await addDoc(messageRef2,{
        //   username: username
        // })
        // console.log(username)
      }
      catch(e){
        console.log(e.message)
      }
    }
  
    return (
      <div>
        <h1>SignUp</h1>
          <div>
            {/* <input onChange={(e)=>{setUsername(e.target.value)}} type='user' placeholder='UserName'></input><br /> */}
            <input onChange = {(e)=>{setEmail(e.target.value)}} type="email" placeholder="E-mail"></input><br />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"></input><br />
            <button onClick={login}>SignUp</button>
          </div>
      </div>
    );
  }

export default SignUp