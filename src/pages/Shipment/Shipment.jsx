import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Receiverdetail from "./Receiverdetail";
import Senderdetail from "./Senderdetail";
import Typewriter from "typewriter-effect";

const Shipment = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [user, setUser] = useState(userInfo ? userInfo._id : null);
  const [sendername, setSenderName] = useState(userInfo ? userInfo.name : null);
  const [sendernumber, setSenderNumber] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [state, setState] = useState("1");
  const [city, setCity] = useState("");
  const [tole, setTole] = useState("");
  const [typeofparcel, setTypeofparcel] = useState("document");
  const [senderemail, setSenderemail] = useState(
    userInfo ? userInfo.email : null
  );
  // const [pickuptime, setPickuptime] = useState("");

  const [recievername, setRecievername] = useState("");
  const [recieveremail, setRecieveremail] = useState("");
  const [recievernumber, setRecievernumber] = useState("");
  const [bstate, setBState] = useState("1");
  const [bcity, setBCity] = useState("");
  const [btole, setBTole] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      user !== "" &&
      sendername !== "" &&
      sendernumber !== "" &&
      totalWeight !== "" &&
      state !== "" &&
      city !== "" &&
      tole !== "" &&
      typeofparcel !== "" &&
      senderemail !== "" &&
      recieveremail !== "" &&
      recievername !== "" &&
      bstate !== "" &&
      bcity !== "" &&
      btole !== ""
    ) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/v1/shipment",
          {
            user,
            sendername,
            senderemail,
            totalWeight,
            sendernumber,
            state,
            city,
            tole,
            typeofparcel,
            senderemail,
            recievername,
            recieveremail,
            recievernumber,
            bcity,
            bstate,
            btole,
          }
        );
        console.log(data);
        setSenderNumber("");
        setBCity("");
        setBTole("");
        setCity("");
        setRecieveremail("");
        setRecievername("");
        setRecievernumber("");
        setBState("");
        setCity("");
        setState("");
        setTole("");
        toast.success("Shipment Successfully Posted");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      toast.error("Fields Are Empty");
    }
  };
  return (
    <>
      {userInfo ? (
        <>
          <div className="container-fluid">
            <div className="Typewriter_text">
              <Typewriter
                options={{
                  strings: ["Make your shipment"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      style={{
                        fontWeight: "600",
                        fontSize: "28px",
                        marginBottom: "20px",
                      }}
                    >
                      Sender Detail
                    </h1>
                    <Senderdetail
                      user={user}
                      setUser={setUser}
                      sendername={sendername}
                      setSenderName={setSenderName}
                      sendernumber={sendernumber}
                      setSenderNumber={setSenderNumber}
                      totalWeight={totalWeight}
                      setTotalWeight={setTotalWeight}
                      state={state}
                      setState={setState}
                      city={city}
                      setCity={setCity}
                      tole={tole}
                      setTole={setTole}
                      typeofparcel={typeofparcel}
                      setTypeofparcel={setTypeofparcel}
                      senderemail={senderemail}
                      setSenderemail={setSenderemail}
                    />
                  </div>
                  <div className="col-md-6">
                    <h1
                      style={{
                        fontWeight: "600",
                        fontSize: "28px",
                        marginBottom: "20px",
                      }}
                    >
                      Reciver Detail
                    </h1>{" "}
                    <Receiverdetail
                      recievername={recievername}
                      recieveremail={recieveremail}
                      recievernumber={recievernumber}
                      setRecieveremail={setRecieveremail}
                      setRecievername={setRecievername}
                      setRecievernumber={setRecievernumber}
                      bstate={bstate}
                      setBState={setBState}
                      bcity={bcity}
                      btole={btole}
                      setBCity={setBCity}
                      setBTole={setBTole}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </div>
              </form>
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

export default Shipment;
