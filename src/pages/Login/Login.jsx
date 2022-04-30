import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="container-fluid login_body">
        <div className="Typewriter_text">
          <Typewriter
            options={{
              strings: ["Sign In"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div style={{ padding: "30px" }} className="row">
          <div className="col-lg-6 col-12">
            <img
              style={{ borderRadius: "20px", height: "300px", width: "350px" }}
              src="https://www.pngitem.com/pimgs/m/3-37779_transparent-delivery-png-delivery-boy-with-bike-png.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-12">
            <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleClick}
                  >
                    Log In
                  </button>
                  <span>
                    Not a User
                    <NavLink
                      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      to={"/register"}
                    >
                      Register
                    </NavLink>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
