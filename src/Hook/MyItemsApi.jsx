import React from 'react';
import UseAxiosSecure from './UseAxiosSecure';

const MyItemsApi = () => {
  const axiosSecure = UseAxiosSecure()
  const myItemsPromise = email=>{
    return axiosSecure.get(`myItems?email=${email}`).then(res=>res.data)
  }
  return {
    myItemsPromise
  }
};

export default MyItemsApi;