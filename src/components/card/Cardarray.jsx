import React from "react";
import Card from "./Cards";
import "./cardarray.css";

const Cardarray = () => {
  return (
    <div>
      <section className="category_main">
        <h2>Category Name</h2>
        <div className="card_array">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Cardarray;
