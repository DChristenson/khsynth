import React, { useState, useEffect } from "react";
import { url } from "../constants";
import Recipes from "./Recipes";

const SingleRecipe = () => {


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url + "/recipes/" + );
      const data = await res.json();
      setrecipe(data);
    };
    fetchData();
  }, []);
  return "Oi prick";
};

export default SingleRecipe;
