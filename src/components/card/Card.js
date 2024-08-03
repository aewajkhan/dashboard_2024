import React from "react";
import "./Card.css";

const Card = ({
  title,
  value,
  change,
  className,
  icon,
  backgroundColor,
  color,
  changeColor,
}) => {
  return (
    <div className={`card-container ${className}`}>
      <div className="icon" style={{ backgroundColor, color }}>
        {icon}
      </div>
      <picture className="card-title">{title}</picture>
      <div className="value-percent">
        <div className="card-value">{value}</div>
        <div
          className="card-change"
          style={{
            color: change.includes("-") ? "red" : "green",
            color: changeColor,
          }}
        >
          {change}
        </div>
      </div>
    </div>
  );
};

export default Card;
