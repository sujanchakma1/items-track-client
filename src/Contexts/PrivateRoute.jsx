import React from 'react';
import UseAuth from './UseAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading/Loading';

const PrivateRoute = ({children}) => {
   const {user,loading}= UseAuth()
  const location = useLocation()
  if(loading){
    return <Loading></Loading>
  }
  if(!user){
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
  }
  return children
};

export default PrivateRoute;