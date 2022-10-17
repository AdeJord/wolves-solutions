import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="main">
      <div className="image">
        <img
          alt={props.alt}
          src={props.imgSrc}
          style={{
            borderRadius: "50px",
            height: "300px",
            width: "auto",
            // paddingTop: "20px",
          }}
        />

      </div>
      <div className="header" style={{ paddingTop: '10px'}} >{props.header}</div>
      <div className="content" style={{ paddingLeft: '10px', paddingRight: '10px'}}>{props.content}</div>
    </div>
  );
};

export default Card;
