import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from "typewriter-effect";
import "./Services.css";
const Services = (props) => {
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
      <div className="container-fluid">
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

        <div className="what_we_provide">
          <div className="Typewriter_text">
            <Typewriter
              options={{
                strings: ["What we Provide?"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="what_we_body">
            <p>
              We are completely online based courier service provider aiming to
              revolutionize the existing system. Online payment allows customers
              to make the payment of their transactions more easily and
              securely. The system allows tracking the parcel to know the
              whereabouts as well as for the safety of customers parcel. Fare
              calculator is another outstanding feature of the system that
              allows users to calculate the fare through the system itself. Our
              delivery personal picks up the parcel from senders door and drops
              it safely at recievers doorstep so that customers no longer need
              to worry about visiting the office.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
