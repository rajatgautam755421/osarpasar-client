import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Track.css";
import Typewriter from "typewriter-effect";

import TrackCard from "./TrackCard";

const Track = () => {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState({});
  const [info, setInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { pathname } = useLocation();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/shipment/findbyuser/${
          userInfo ? userInfo._id : null
        }`
      );
      setInfo(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [refresh]);
  console.log(info);
  return (
    <>
      <div className="Typewriter_text">
        <Typewriter
          options={{
            strings: ["Track Your "],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      {userInfo ? (
        <>
          {info.length !== 0 ? (
            info.map((value) => {
              return (
                <>
                  <TrackCard
                    value={value}
                    setTotalPrice={setTotalPrice}
                    totalPrice={totalPrice}
                    setRefresh={setRefresh}
                    refresh={refresh}
                  />
                </>
              );
            })
          ) : (
            <h1
              style={{
                fontSize: "20px",
                margin: "20px 0px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              No Shipments Made By You
            </h1>
          )}
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

export default Track;
