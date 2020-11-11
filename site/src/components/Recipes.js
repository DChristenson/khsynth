import React, { useState, useEffect } from "react";
import { url } from "../constants";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipe, setrecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url + "/recipes");
      const data = await res.json();
      setrecipe(data);
    };
    fetchData();
  }, []);

  const listStyle = { listStyleType: "none" };
  return (
    <>
      <ul>
        {recipe.map((item) => (
          <li style={listStyle} key={item.id}>
            <Link to={"/recipe/" + item.name}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipes;
