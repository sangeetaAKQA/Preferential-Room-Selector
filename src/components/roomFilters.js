import React, { useState, useEffect } from "react";
function Filters() {
  const [data, setData] = useState("");
  useEffect(() => {
    const url = "http://localhost:3000/profile";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json.name);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    ///
    const postData = async () => {
      try {
        const rawResponse = await fetch("http://localhost:3000/profile", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name1: "AKQA1" }),
        });
        const content = await rawResponse.json();

        console.log(content);
      } catch (error) {
        console.log("error", error);
      }
    };

    postData();
    ///
  }, []);
  return (
    <>
      {/* {state.map((d) => (
        <div>{d}</div>
      ))} */}
      <div>{data}</div>
    </>
  );
}
export default Filters;
