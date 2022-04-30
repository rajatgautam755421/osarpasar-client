import React, { useEffect, useState } from "react";
import axios from "axios";
import Table2Data from "./Table2Data";

const Table = () => {
  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/newsletter"
      );
      try {
        console.log(data);
        setNews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [refresh]);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">SN</th>

            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {news
            ? news.length === 0 && (
                <h6 style={{ fontWeight: "bold", margin: "10px 0px" }}>
                  No Feedback Messages Yet
                </h6>
              )
            : null}
          {news
            ? news.map((value, index) => {
                return (
                  <>
                    <Table2Data
                      index={index}
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
