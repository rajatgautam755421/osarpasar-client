import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleClick = async (e) => {
    if (email !== "") {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/newsletter",
          { email }
        );
        if (data.msg) {
          toast.error(data.msg);
          setEmail("");
        } else {
          toast.success("Successfully Subscribed");
          setEmail("");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      toast.error("Email Is Empty");
    }
  };

  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <div className="footer_div col-lg-3 col-md-6 col-10">
            <h1 className="footer_header">About Us</h1>
            <p className="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae deserunt quo beatae hic? Quia rerum quas cupiditate
              eveniet praesentium obcaecati aspernatur, dicta doloribus fugiat.
              Voluptate minus qui quibusdam voluptatem id?
            </p>
          </div>
          <div className="footer_div col-lg-3 col-md-6 col-10">
            <h3 className="footer_header">Subscribe</h3>
            <section className="text-gray-600 body-font colorr">
              <div className="container px-1 py-2 mx-auto">
                <div className="flex lg:w-3/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  <div className="relative flex-grow w-full">
                    <label htmlFor="email" className=" footer_text">
                      Enter your e-mail to get updates of our exciting offers
                    </label>
                    <input
                      type="email"
                      id="email"
                      s
                      name="email"
                      className="w-full mt-4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-300 py-2 px-2 leading-6 transition-colors duration-200 ease-in-out"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    className=" text-white bg-gray-600 border-0 py-2 px-2 focus:outline-none hover:bg-pink-800 rounded text-lg"
                    onClick={handleClick}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="footer_div col-lg-3 col-md-6 col-10">
            <h3 className="footer_header">Happy Customers</h3>
            <div className="row">
              <div className="col">
                <img
                  className="footer_image"
                  src="https://cdn.smartkarrot.com/wp-content/uploads/2020/09/Satisfied-Customers.png"
                  alt="insta1"
                />
              </div>
              <div className="col">
                <img
                  className="footer_image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wi12eDOreqyTSyu8YDacZp0_6hrCPUK_e3EuIO9MtNsRGPXtQmaXw7gu5oaHuD4VCwY&usqp=CAU"
                  alt="insta1"
                />
              </div>
              <div className="col">
                <img
                  className="footer_image"
                  src="https://st2.depositphotos.com/1017228/6824/i/600/depositphotos_68245981-stock-photo-surprised-young-woman-in-glasses.jpg"
                  alt="insta1"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  className="footer_image"
                  src="https://cdn.xxl.thumbs.canstockphoto.com/surprised-funny-teacher-in-glasses-shouts-at-the-school-board-stock-photo_csp19405820.jpg"
                  alt="insta1"
                />
              </div>
              <div className="col">
                <img
                  className="footer_image"
                  src="https://us.123rf.com/450wm/nickshot/nickshot1505/nickshot150500784/50460746-excited-surprised-little-boy-with-thumb-up-gesture-isolated-over-grey-background-.jpg?ver=6"
                  alt="insta1"
                />
              </div>
              <div className="col">
                <img
                  className="footer_image"
                  src="https://www.psephizo.com/wp-content/uploads/2015/04/surprised-face.jpg"
                  alt="insta1"
                />
              </div>
            </div>
          </div>
          <div className="footer_div col-lg-3 col-md-6 col-10">
            <h3 className="footer_header">Follow Us</h3>
            <p style={{ marginTop: "5px" }} className="footer_text">
              Let us be Social
            </p>
            <div>
              <div>
                <a
                  href="https://facebook.com"
                  style={{ padding: "20px" }}
                  className="fa fa-facebook "
                />
                <a
                  href="https://twitter.com"
                  style={{ padding: "20px" }}
                  className="fa fa-twitter"
                />
                <a
                  href="https://whatsapp.com"
                  style={{ padding: "20px" }}
                  className="fa fa-whatsapp"
                />
                <a
                  href="https://instagram.com"
                  style={{ padding: "20px" }}
                  className="fa fa-instagram"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-3 text-gray-300 text-lg">
          ©2022 OsarPosar. All rights reserved.
        </p>{" "}
      </div>
    </>
  );
};

export default Footer;
