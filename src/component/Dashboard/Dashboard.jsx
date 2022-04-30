import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Table from "./Table/Table";
import Table2 from "./Table2/Table2";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Table3 from "./Table/Table3";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const { pathname } = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [pathname]);

  return (
    <>
      {user ? (
        user.email === "admin@gmail.com" ? (
          <>
            <div className="container-fluid">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "#0C488C",
                  padding: "40px",
                }}
              >
                <DashboardIcon fontSize="large" style={{ color: "#0C488C" }} />{" "}
                <b>Dashboard</b>
              </h1>
              <div className="row">
                <div className="col-md-6 col-12 box ">
                  <h4
                    style={{
                      textAlign: "center",
                      color: "#0C488C",
                      padding: "40px",
                    }}
                  >
                    <ChatBubbleIcon
                      fontSize="large"
                      style={{ color: "#390081" }}
                    />{" "}
                    <b>Feedbacks</b>
                  </h4>
                  <Table />
                </div>
                <div className="col-md-6 col-12 box ">
                  <h4
                    style={{
                      textAlign: "center",
                      color: "#0C488C",
                      padding: "40px",
                    }}
                  >
                    <UnsubscribeIcon
                      fontSize="large"
                      style={{ color: "#390081" }}
                    />{" "}
                    <b>NewsLetter</b>
                  </h4>
                  <Table2 />
                </div>
              </div>
              <div className="row">
                <div className="track_table col-md-12">
                  <h4
                    style={{
                      textAlign: "center",
                      color: "#0C488C",
                      padding: "40px",
                    }}
                  >
                    <AutoGraphIcon
                      fontSize="large"
                      style={{ fontSize: "40px", color: "#390081" }}
                    />{" "}
                    <b>Tracking</b>
                  </h4>
                  <div className="detail">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">
                            <CheckCircleIcon
                              fontSize="small"
                              style={{ color: "green", marginLeft: "15px" }}
                            />
                          </th>

                          <th scope="col">
                            {" "}
                            <PendingIcon
                              fontSize="small"
                              style={{ color: "orange", marginLeft: "15px" }}
                            />
                          </th>
                          <th scope="col">
                            {" "}
                            <LocalShippingIcon
                              fontSize="small"
                              style={{ color: "#21779c", marginLeft: "15px" }}
                            />
                          </th>
                          <th scope="col">
                            {" "}
                            <DeleteIcon
                              fontSize="small"
                              style={{ color: "#d11a2a", marginLeft: "15px" }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Delivered</td>
                          <td>Pending</td>
                          <td>Shipped</td> <td>Discard</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Table3 />
                </div>
              </div>
              <br />
            </div>
          </>
        ) : (
          <h1
            style={{
              fontSize: "20px",
              textAlign: "center",
              margin: "20px 0px",
            }}
          >
            Bring Me Your Admin
          </h1>
        )
      ) : null}
    </>
  );
};

export default Dashboard;
