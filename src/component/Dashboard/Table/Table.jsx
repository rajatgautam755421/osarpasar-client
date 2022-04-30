import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactTableData from "./ContactTableData";

const Table = () => {
  const [contacts, setContacts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/contact/all"
      );
      try {
        console.log(data);
        setContacts(data);
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Feedback</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            ? contacts.length === 0 && (
                <h6 style={{ fontWeight: "bold", margin: "10px 0px" }}>
                  No Feedback Messages Yet
                </h6>
              )
            : null}
          {contacts
            ? contacts.map((value) => {
                return (
                  <>
                    <ContactTableData
                      value={value}
                      refresh={refresh}
                      setRefresh={setRefresh}
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

export default Table;
