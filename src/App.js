import React from "react";
import { auth } from "./firebase";
import Account from "./Account";
import { useAuthState } from 'react-firebase-hooks/auth'
import One from "./One";
import './index.css'


function App() {

  const [user] = useAuthState(auth)


  return (
    <div className="HomePage">
      {user ? <Account /> : <One />}
    </div>
  );
}

export default App;
