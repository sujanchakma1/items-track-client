import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
  const [loading,setLoading]= useState(true)
  const [user,setUser] = useState(null)

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  const googleProvider = new GoogleAuthProvider()
  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      console.log("in user", currentUser)
      setUser(currentUser)
      setLoading(false)
      return()=>{
        unSubscribe()
      }
    })
  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOutUser
  }
  return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;