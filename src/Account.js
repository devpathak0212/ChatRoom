import React,{ useEffect, useState } from 'react'
import { auth, db } from './firebase'
import { addDoc , doc , deleteDoc , collection, serverTimestamp , onSnapshot , query , where, orderBy } from 'firebase/firestore'
import './index.css'



function Account() {

    const [newMessage,setNewMessage] = useState('')
    const messageRef = collection(db,'messages')
    // const messageRef2 = collection(db,'username')
    const [messages,setMessages] = useState([])
    // const [messages2,setMessages2] = useState([])
    useEffect(() => {
      const queryMessage = query(messageRef,orderBy('createdAt',"desc"))
      // const queryMessage2 = query(messageRef2)
      // const unsubscribe2 = onSnapshot(queryMessage2,(snapshot)=>{
      //   let messages2 = []
      //   snapshot.forEach((doc)=> {
      //     messages2.push({ ...doc.data(),id: doc.id})
      //   })
      //   setMessages2(messages2)
      // })
      const unsubscribe = onSnapshot(queryMessage,(snapshot)=>{
        let messages = []
        snapshot.forEach((doc)=> {
          messages.push({ ...doc.data(),id: doc.id})
        })
        setMessages(messages)
      })

      return () => unsubscribe();
      //  unsubscribe2()

    },[])

    const HandleSubmit = async (e) => {
      e.preventDefault()
      if (newMessage === '') return;
      console.log(newMessage)
      await addDoc(messageRef,{
        text: newMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser.email
      })

      setNewMessage("")
    }

    const signout = async () => {
      auth.signOut()
    }

  return (
    <div>
      <div className='header'>
      <div className='user'>
        {/* <div>{messages2.map((message)=>(<div key={message.id}>
        <h4 className='current_user'>Username: {message.username}</h4> 
        </div>))}</div> */}
        <h1 className='current_user'>User Email: {auth.currentUser.email}</h1>
      <button className='signout_button' onClick={signout}>SignOut</button>
       </div> 
        <div className='messaging'><input className='text_input' onInput = {(e)=>{setNewMessage(e.target.value)}} type='text' placeholder='Input your text' value={newMessage}></input>
        <button className='send_button' onClick={HandleSubmit} type='submit'>Send</button>
        </div>     
      </div>
      <div className='message_box'>{messages.map((message)=>(<div className='message' key={message.id}>
         <h4>{message.user}</h4> 
         <h2>-{message.text}</h2>
        </div>))}
      </div>
    </div>
  )
}

export default Account