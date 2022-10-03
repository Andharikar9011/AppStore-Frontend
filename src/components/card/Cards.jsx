import React from "react";
import "./card.css";
import Avatar from "@mui/material/Avatar";

const Cards = () => {
  return (
    <div className="card_div">
      <Avatar
        alt="avatar"
        src="/images/avtar.png"
        sx={{ width: 56, height: 56 }}
      />
      <h1 className="card_h1">Lorem, ipsum.</h1>
      {/* <p className="card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla,
        dolores facere nostrum deleniti delectus velit rem nisi iste
        repellendus? Quaerat, distinctio pariatur ipsum est esse fugit nemo
        optio. Reprehenderit.
      </p> */}
      <div className="card_buttons">
        <a href="/">Read More</a>
        <a href="/">Buy</a>
      </div>
    </div>
  );
};

export default Cards;
