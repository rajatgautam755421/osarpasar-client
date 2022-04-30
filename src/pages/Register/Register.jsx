import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./Register.css";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [unHashedPassword, setUnHashedPassword] = useState("");
  const [cp, setCp] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    if (name === "" || email === "" || unHashedPassword === "") {
      toast.error("Fields Are Empty");
    } else if (unHashedPassword !== cp) {
      toast.error("Password Did Not Matched");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/register",
          { name, email, unHashedPassword }
        );
        console.log(data);
        if (data.message === "Registration Successfull") {
          toast.success("Registration Successfull");
          setTimeout(() => {
            navigate("/login");
          }, [1200]);
        } else {
          toast.error(data.message);
        }
      } catch (error) {}
    }
  };
  return (
    <>
      <div className="container-fluid login_body">
        <div className="Typewriter_text">
          <Typewriter
            options={{
              strings: ["Register Now!!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div style={{ padding: "30px" }} className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-6 col-12">
            <img
              style={{ borderRadius: "20px", height: "400px", width: "500px" }}
              src="https://media.istockphoto.com/vectors/register-now-icon-in-comic-style-registration-cartoon-vector-on-vector-id1384999452?k=20&m=1384999452&s=612x612&w=0&h=LD6N2jtjyeE3BXM8VI9yPYB91eUVHJlojzYaWjYbDxM="
              alt=""
            />
          </div>
          <div style={{ marginTop: "20px" }} className="col-lg-4 col-12">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Email"
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
                    value={unHashedPassword}
                    onChange={(e) => setUnHashedPassword(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="************"
                    value={cp}
                    onChange={(e) => setCp(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleClick}
                  >
                    Register
                  </button>
                  <NavLink
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
