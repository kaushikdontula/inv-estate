import React, { useState, useEffect } from "react";
import '../App.css';

export const PropVal = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/hello")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log("Response data:", data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="propval-container">
      <p>{data.message}</p>
    </div>
  );
};
