import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { app } from '../config/firebase.config'

import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { validateGoogleToken } from '../api';

import  { useStateValue } from "../context/StateProvider"
import { actionType } from '../context/reducer';


const Login = () => {
  const firebaseAuth = getAuth(app);
  const google_provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [{user} , dispatch ] = useStateValue();

  const loginWithGmail = async () => {
    await signInWithPopup(firebaseAuth, google_provider).then(userCred => {
      if(userCred){
        firebaseAuth.onAuthStateChanged((cred) => {
          cred.getIdToken().then((token) => {
            validateGoogleToken(token).then((data) => {
              dispatch({
                type: actionType.SET_USER,
                user: data.data,
              })
              navigate("/", { replace: true })
            })
          })
        })
      }
    })
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full sm:w-96 border border-gray-200 bg-gray-100 p-4 rounded-md flex flex-col">
        <div className='w-full px6 py-3 cursor-pointer bg-white hover:shadow-md rounded-full gap-3 flex items-center justify-center'>
          <FcGoogle className='text-4xl'/>
          <p className='text-lg font-semibold text-gray-600' onClick={loginWithGmail}>Signin with Gmail</p>
        </div>

        <div className='mt-2 w-full px6 py-3 cursor-pointer bg-white hover:shadow-md rounded-full gap-3 flex items-center justify-center'>
          <FaGithub className='text-4xl'/>
          <p className='text-lg font-semibold text-gray-600'>Signin with Github</p>
        </div>
      </div>
    </div>
  )
}

export default Login