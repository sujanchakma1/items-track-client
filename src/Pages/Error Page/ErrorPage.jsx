import React from "react";
import error from "../../assets/Lottie/404/Animation - 1749573503875.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Error | ItemTrack</title>
      </Helmet>
      <Lottie animationData={error}></Lottie>
    </div>
  );
};

export default ErrorPage;
