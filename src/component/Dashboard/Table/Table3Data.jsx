import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import axios from "axios";
import { toast } from "react-hot-toast";

const Table3Data = ({ value, setRefresh, refresh }) => {
  const handleDelivered = async () => {
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/shipment/update/${
        value ? value._id : null
      }`,
      { status: "delivered" }
    );
    try {
      console.log(data);
      setRefresh(!refresh);
      toast.success("Update Performed Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePending = async () => {
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/shipment/update/${
        value ? value._id : null
      }`,
      { status: "pending" }
    );
    try {
      console.log(data);
      toast.success("Update Performed Successfully");

      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnTheWay = async () => {
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/shipment/update/${
        value ? value._id : null
      }`,
      { status: "ontheway" }
    );
    try {
      console.log(data);
      toast.success("Update Performed Successfully");

      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async () => {
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/shipment/delete/${value ? value._id : null}`
    );
    try {
      console.log(data);
      toast.success("Data Deleted Successfully");

      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <tr>
        <td>{value.sendername}</td>
        <td>{value.city}</td>
        <td>{value.recievername}</td>
        <td>{value.bcity}</td>
        <td>{value.totalWeight}</td>
        <td>
          <button>
            <CheckCircleIcon
              fontSize="small"
              style={{ color: "green", marginLeft: "15px" }}
              onClick={handleDelivered}
            />
          </button>
          <button>
            <PendingIcon
              fontSize="small"
              style={{ color: "orange", marginLeft: "15px" }}
              onClick={handlePending}
            />
          </button>{" "}
          <button>
            <LocalShippingIcon
              fontSize="small"
              style={{ color: "#21779c", marginLeft: "15px" }}
              onClick={handleOnTheWay}
            />
          </button>
          <button>
            <DeleteIcon
              fontSize="small"
              style={{ color: "#d11a2a", marginLeft: "15px" }}
              onClick={handleDelete}
            />
          </button>
        </td>
        {value.status === "pending" ? (
          <td>
            {" "}
            <PendingIcon
              fontSize="small"
              style={{ color: "orange", marginLeft: "15px" }}
            />
          </td>
        ) : null}
        {value.status === "delivered" ? (
          <td>
            {" "}
            <CheckCircleIcon
              fontSize="small"
              style={{ color: "green", marginLeft: "15px" }}
            />
          </td>
        ) : null}
        {value.status === "ontheway" ? (
          <td>
            {" "}
            <LocalShippingIcon
              fontSize="small"
              style={{ color: "#21779c", marginLeft: "15px" }}
            />
          </td>
        ) : null}
      </tr>
    </>
  );
};

export default Table3Data;
