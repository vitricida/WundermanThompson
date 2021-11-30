import React from "react";

function Card({ image, title, text }) {
  return (
    <div className="card">
      <div className="card-img">{image}</div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
}

export default Card;
