import React, { useState } from "react";
import "./Contact.css";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [name, setName] = useState(userInfo ? userInfo.name : "");
  const [email, setEmail] = useState(userInfo ? userInfo.email : "");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    if (name === "" || email === "" || message === "") {
      toast.error("Fields Are Empty");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/contact",
          { name, email, message }
        );
        console.log(data);
        setMessage("");
        toast.success("Feedback Posted Successfully");
      } catch (error) {
        console.log(error.message);
        toast.error("Feedback Is Not Posted");
      }
    }
  };
  return (
    <>
      {userInfo ? (
        <>
          <div className="container-fluid contact">
            <div className="Typewriter_text">
              <Typewriter
                options={{
                  strings: ["Contact Us"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="row">
              <div className="col-md-7 col-12">
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png"
                  alt=""
                />
              </div>
              <div style={{ marginTop: "20px" }} className="col-md-5 col-12">
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        user Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        E-mail
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Message
                      </label>
                      <textarea
                        className=" no-resize appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message"
                        defaultValue={""}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                      <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleClick}
                      >
                        Send
                      </button>
                    </div>
                    <div className="md:w-2/3" />
                  </div>
                </form>
              </div>
            </div>
            <div className="contact_us">
              <div className="row">
                <div className="col-md-6">
                  <h2
                    style={{
                      fontSize: "24px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    More about OsarPasar
                  </h2>
                  <p>
                    The system also allows door to door delivery, and this saves
                    valuable time of its customers. The safety of goods is also
                    ensured as people can track their parcel through the system.
                    The system also allows customer to calculate the fare for
                    delivering packages and then pay it online through the
                    online payment option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <span>
            <h1
              style={{
                fontSize: "30px",
                textAlign: "center",
                margin: "20px 0px",
              }}
            >
              Not Registered
            </h1>
            <h2
              style={{
                fontSize: "20px",
                textAlign: "center",
                color: "blue",
                margin: "20px 0px",
              }}
            >
              <NavLink to="/register">Register</NavLink>
            </h2>
          </span>
        </>
      )}
    </>
  );
};

export default Contact;
