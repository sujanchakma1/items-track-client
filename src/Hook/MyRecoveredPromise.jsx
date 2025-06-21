import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const MyRecoveredPromise = () => {
  const axiosSecure = UseAxiosSecure();
  const myRecoveredPromise = (email) => {
    return axiosSecure
      .get(`myRecovered?email=${email}`)
      .then((res) => res.data);
  };
  return {
    myRecoveredPromise
  }
};

export default MyRecoveredPromise;
