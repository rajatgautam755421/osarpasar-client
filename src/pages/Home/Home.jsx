import React from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from "typewriter-effect";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
const Home = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="home_back">
        <div className="home_body">
          <h2 className="home_title">Shipment at your doorstep</h2>
          <h4 className="home_sub">
            Enjoy a completely online logistic service...
          </h4>
          <Link to={"/track"}>
            {" "}
            <button class="bg-blue-500 hover:bg-blue-700 mt-4 text-white  py-3 px-5 rounded-full">
              Track
            </button>
          </Link>
          <Link to={"/shipment"}>
            <button class="button_home bg-blue-500 hover:bg-blue-700 mt-4 ml-4 text-white  py-3 px-5 rounded-full">
              Calculate and Ship
            </button>
          </Link>
        </div>
      </div>
      <div className="container-fluid bodyy">
        <div className="Typewriter_text">
          <Typewriter
            options={{
              strings: ["Our Service"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all  .5"
          transitionDuration={1500}
          containerClass="carousel-container"
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="beauty">
            {" "}
            <div className="body_carousel">
              <img
                src="https://www.pasls.com/blog/wp-content/uploads/2020/09/5f571e750cb4f-1.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="beauty">
            <div className="body_carousel">
              <img
                src="https://techolation.com/wp-content/uploads/2020/04/online-payment-techolation.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="beauty">
            {" "}
            <div className="body_carousel">
              <img
                src="https://wpforms.com/wp-content/uploads/2019/01/how-to-track-the-geolocation-of-your-wordpress-site-visitors.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="beauty">
            {" "}
            <div className="body_carousel">
              <img src="https://lswordpress.s3.amazonaws.com/blog/wp-content/uploads/2017/05/21101703/Untitled-design-9.png" />
            </div>
          </div>
          <div className="beauty">
            {" "}
            <div className="body_carousel">
              <img
                src="https://5.imimg.com/data5/NH/SV/GLADMIN-3717980/door-to-door-delivery-services-500x500.png"
                alt=""
              />
            </div>
          </div>
        </Carousel>
        <div style={{ marginTop: "40px" }} className="Typewriter_text">
          <Typewriter
            options={{
              strings: ["Why OsarPasar?"],
              autoStart: true,
              loop: true,
            }}
          />
          <div style={{ marginTop: "50px" }} className="row">
            <div style={{ position: "relative" }} className="col-md-6 col-12">
              <div className="bodyy">
                <img
                  src="https://video.cgtn.com/news/2021-11-12/Shipping-costs-begin-to-fall-after-rising-for-a-year--158v7GWcFJS/video/9031e08d86a14e52a27ce5d99de35c0a/9031e08d86a14e52a27ce5d99de35c0a.jpg"
                  alt=""
                />
                <div className="date">
                  <PersonIcon style={{ marginLeft: "-10px", color: "black" }} />{" "}
                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: "100",
                      color: "black",
                    }}
                  >
                    Yash
                  </span>
                  <CalendarMonthIcon
                    style={{
                      marginLeft: "10px",
                      marginRight: "5px",
                      color: "black",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: "100",
                      color: "black",
                    }}
                  >
                    Feb 20,2022
                  </span>
                </div>
                <h2 style={{ marginTop: "25px" }} className="title">
                  Online Courier System Over Traditional Ones
                </h2>{" "}
                <br />
                <p style={{ marginTop: "25px" }} className="subtitle">
                  Transforming the traditional way of delivering packages has
                  always been the major goal of the system. When the system is
                  launched people will have access to a fully online based
                  courier management system. There's no need to go to the
                  courier office or the post office to mail and receive items
                  when you have a good courier service. Simply use the courier
                  management system to deliver and pick up packages. The system
                  also enables you to plan deliveries, manage pickups, as well
                  as keep track and provide updates on the status of shipments.
                  This will save time and money by focusing on what matters
                  most: building and sustaining your business. Online based
                  courier management system is the fastest as well one of the
                  most efficient ways of delivering goods.{" "}
                </p>
              </div>
            </div>
            <div style={{ position: "relative" }} className="col-md-6 col-12">
              <div className="bodyy">
                <img
                  src="https://www.techdee.com/wp-content/uploads/2020/05/TIME-AND-MONET.jpg"
                  alt=""
                />
                <div className="date1">
                  <PersonIcon style={{ marginLeft: "-10px", color: "black" }} />{" "}
                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: "100",
                      color: "black",
                    }}
                  >
                    Yash
                  </span>
                  <CalendarMonthIcon
                    style={{
                      marginLeft: "10px",
                      marginRight: "5px",
                      color: "black",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: "100",
                      color: "black",
                    }}
                  >
                    March 5,2021
                  </span>
                </div>
                <h2 style={{ marginTop: "25px" }} className="title">
                  Saving Your Time And Effort{" "}
                </h2>{" "}
                <br />
                <p style={{ marginTop: "25px" }} className="subtitle">
                  Time is money and we at OsarPosar value our customers precious
                  time and money. We provide you door to door pickup and drop
                  facility. You no longer need to worry about managing time for
                  your parcels. Also, we are providing online payment gateway
                  which will be secured and you can enjoy a completely online
                  based courier system through your device.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
