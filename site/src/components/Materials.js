import React, { useState, useEffect } from "react";
import { url } from "../constants";
import { Link } from "react-router-dom";

const Materials = () => {
  const [material, setmaterial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url + "/materials");
      const data = await res.json();
      setmaterial(data);
    };
    fetchData();
  }, []);

  const listStyle = { listStyleType: "none" };
  return (
    <>
      <ul>
        {material.map((item) => (
          <li style={listStyle} key={item.id}>
            <Link to={"/material/" + item.name}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Materials;
