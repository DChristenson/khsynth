import React from "react";
import Recipes from "./Recipes";
import Materials from "./Materials";

const Home = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to KH Synth</h1>
        <p>
          Currently this site holds information for Kingdom Hearts Final Mix
          synthesis.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Recipes />
          <Materials />
        </div>
      </div>
    </>
  );
};

export default Home;
