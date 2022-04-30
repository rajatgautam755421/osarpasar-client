import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-hot-toast";
const Table2Data = ({ value, setRefresh, refresh, index }) => {
  console.log(refresh);
  const handleDelete = async () => {
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/newsletter/delete/${
        value ? value._id : null
      }`
    );
    try {
      console.log(data);
      setRefresh(!refresh);
      toast.success("Data Deleted Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{value.email}</td>
        <td>
          {" "}
          <button>
            {" "}
            <DeleteIcon
              fontSize="small"
              style={{ color: "#d11a2a", marginLeft: "15px" }}
              onClick={handleDelete}
            />
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

export default Table2Data;
