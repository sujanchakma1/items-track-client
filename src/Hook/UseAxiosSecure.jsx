import axios from "axios";
import React from "react";
import UseAuth from "../Contexts/UseAuth";
import Swal from "sweetalert2";
import { Navigate, useLocation } from "react-router";

const axiosInstance = axios.create({
  baseURL: "https://where-is-it-server-ten.vercel.app/",
});

const UseAxiosSecure = () => {
  const { user, logOutUser } = UseAuth();
  const location = useLocation()
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOutUser()
          .then(() => {
            Swal.fire({
              title: "Log Out for 401 or 403 status code!",
              icon: "success",
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
            });
           <Navigate state={location.pathname} to="/auth/login"></Navigate>
           return
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
      }
    }
  );
  return axiosInstance;
};

export default UseAxiosSecure;
