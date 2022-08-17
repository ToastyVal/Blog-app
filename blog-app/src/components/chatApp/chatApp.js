import React from 'react'
import Navbar from './chatApp components/Navbar'
import Chat from'./chatApp components/Chat'

import { auth } from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style ={
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`

}

function ChatApp() {
  const [user] = useAuthState(auth)
// console.log(user)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* NavBar */}
        <Navbar />
        {user ? <Chat /> : null}
        {/* Chat Component */}
        {/* <Chat /> */}

      </section>
   
    </div>
  );
}

export default ChatApp;