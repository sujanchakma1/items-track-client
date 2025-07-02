import React, { useState } from "react";
import register from "../../../assets/Lottie/register/Animation - 1749270813402.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router";
import UseAuth from "../../../Contexts/UseAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, googleLogin } = UseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const { email, password, ...userData } = Object.fromEntries(
      formdata.entries()
    );
    console.log(userData);
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const newUser = {
          email,
          ...userData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        axios.post("https://where-is-it-server-ten.vercel.app/users", newUser).then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Successfully Login!",
              icon: "success",
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
            e.target.reset();
          }
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Successfully Login!",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Register | ItemTrack</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={register} style={{ width: "350px" }}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="url"
                name="photoURL"
                className="input w-full"
                placeholder="Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                required
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, lowercase letter, uppercase letter"
              />
              {error && <p className="text-red-500">{error}</p>}
              <button className="btn btn-primary rounded-lg mt-4">Register</button>
              <div className="divider">OR</div>
              {/* Google */}
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p>
                Already have an account? Please{" "}
                <Link to="/auth/login" className="text-blue-400">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
