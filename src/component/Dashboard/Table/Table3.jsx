import React, { useEffect, useState } from "react";

import axios from "axios";
import Table3Data from "./Table3Data";

const Table3 = () => {
  const [shipments, setShipments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/shipment");
      try {
        console.log(data);
        setShipments(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [refresh]);

  return (
    <>
      <table className="table main__secction1">
        <thead>
          <tr>
            <th scope="col">Sender Name</th>
            <th scope="col">Sender Location</th>

            <th scope="col">Receiver Name</th>

            <th scope="col">Receiver Location</th>

            <th scope="col">Weight(KG)</th>
            <th scope="col">Action</th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          {shipments.length === 0 && (
            <h6 style={{ fontWeight: "bold", margin: "10px 0px" }}>
              No Shipments Yet
            </h6>
          )}

          {shipments
            ? shipments.map((value) => {
                return (
                  <>
                    <Table3Data
                      value={value}
                      setRefresh={setRefresh}
                      refresh={refresh}
                    />
                  </>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

export default Table3;
