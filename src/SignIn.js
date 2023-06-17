import React, { useState } from 'react'
import { auth, db } from './firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import "./index.css"
import { addDoc, collection } from 'firebase/firestore'


function SignIn() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [username,setUsername] = useState('')
    // const messageRef2 = collection(db,"username")
  
    const signin = async (e) =>{
      e.preventDefault()
      try{
        const user = await signInWithEmailAndPassword(auth,email,password)
        console.log(user)
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
        <h1>SignIn</h1>
        <div>
            {/* <input onChange={(e)=>{setUsername(e.target.value)}} type='user' placeholder='UserName'></input><br /> */}
            <input onChange = {(e)=>{setEmail(e.target.value)}} type="email" placeholder='E-mail'></input><br />
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password'></input><br />
            <button onClick={signin}>SignIn</button>
        </div>
    </div>
  )
}

export default SignIn