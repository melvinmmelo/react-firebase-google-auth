import { getAuth } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { app } from '../config/firebase.config';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

const Home = () => {

  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();


  const [{ user }, dispatch] = useStateValue();

  const logOutUser = () => {
    firebaseAuth.signOut().then(() => {
        dispatch({
          type: actionType.SET_USER,
          user : null
        })

        navigate("/login", { replace: true })
    })
  }

  return (
    <div className='w-screen h-screeb flex items-center justify-center'>
      <div className='w-60 bg-gray-50 rounded-md shadow-md p-4 flex flex-col gap-6 items-center justify-center'>
        <img src={user?.picture} className='w-24 h-24 rounded-md shadow-md' alt="User image" referrerPolicy='no-referrer'/>
        <p className='text-xl font-semibold'>{user?.name}</p>

        <button className='px-4 py-2 border-none outline-none rounded-md shadow-md bg-red-400 cursor-pointer' onClick={logOutUser}>Sign Out</button>
      </div>
    </div>
  )
}

export default Home