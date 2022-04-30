import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Payment from "../Payment/Payment";

const TrackCard = ({
  value,
  setTotalPrice,
  totalPrice,
  setRefresh,
  refresh,
}) => {
  const [weightPrice, setWeightPrice] = useState(0);

  useEffect(() => {
    if (value) {
      if (value.totalWeight >= 1 && value.totalWeight <= 100) {
        setWeightPrice(100);
        setTotalPrice(100 + (value ? value.state - value.bstate : null) * 100);
      } else if (value.totalWeight >= 101 && value.totalWeight <= 500) {
        setWeightPrice(200);
        setTotalPrice(200 + (value ? value.state - value.bstate : null) * 100);
      } else if (value.totalWeight >= 501 && value.totalWeight <= 1000) {
        setWeightPrice(500);
        setTotalPrice(500 + (value ? value.state - value.bstate : null) * 100);
      } else if (value.totalWeight >= 1001 && value.totalWeight <= 1500) {
        setWeightPrice(1000);
        setTotalPrice(1000 + (value ? value.state - value.bstate : null) * 100);
      } else {
        setWeightPrice(5000);
        setTotalPrice(5000 + (value ? value.state - value.bstate : null) * 100);
      }
    } else {
      console.log("No Value");
    }
  }, []);

  return (
    <>
      <div className="track_card container-fluid">
        <div className=" track_card1  rounded overflow-hidden shadow-lg">
          <div className="row" style={{ padding: "20px" }}>
            <div className="col-lg-6 col-12">
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Sender Detail
              </h3>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>Name </span>:
                  {value.sendername}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Location </span>:
                  {value.city}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Weight</span>:
                  {value.totalWeight}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Phn</span>:
                  {value.sendernumber}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Email</span>:
                  {value.senderemail}
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-12">
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Receiver Detail
              </h3>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>Name: </span>:
                  {value.recievername}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Location: </span>:
                  {value.bcity}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Phn</span>:
                  {value.recievernumber}
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Email</span>:
                  {value.recieveremail}
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              width: "100%",
            }}
            className="bodyyy"
          >
            <div className="container" style={{ margin: "0px auto" }}>
              <h3 style={{ fontSize: "24px" }}>
                Remark:{" "}
                <span
                  style={{
                    fontSize: "20px",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  <span>
                    {value.status === "pending" && "Pending"}
                    {value.status === "pending" && (
                      <PendingIcon
                        style={{
                          width: "40px",
                          height: "40px",
                          marginLeft: "10px",
                          color: "orange",
                        }}
                      />
                    )}
                  </span>
                  <span>
                    {value.status === "delivered" && "Delivered"}
                    {value.status === "delivered" && (
                      <CheckCircleIcon
                        style={{
                          width: "40px",
                          height: "40px",
                          marginLeft: "10px",
                          color: "green",
                        }}
                      />
                    )}
                  </span>
                  <span>
                    {value.status === "ontheway" && "On The Way"}
                    {value.status === "ontheway" && (
                      <LocalShippingIcon
                        style={{
                          width: "40px",
                          height: "40px",
                          marginLeft: "10px",
                          color: "blue",
                        }}
                      />
                    )}
                  </span>
                </span>{" "}
              </h3>
              <h1 style={{ fontSize: "20px", textAlign: "center" }}>
                Total Price : Rs.
                {parseInt(
                  (value
                    ? Math.abs(parseInt(value.state) - parseInt(value.bstate))
                    : null) * 100
                ) + weightPrice}
              </h1>
              <h1>
                {value.isPaid === false ? (
                  <Payment
                    id={value._id}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    totalPrice={
                      parseInt(
                        (value
                          ? Math.abs(
                              parseInt(value.state) - parseInt(value.bstate)
                            )
                          : null) * 100
                      ) + weightPrice
                    }
                  />
                ) : null}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackCard;
