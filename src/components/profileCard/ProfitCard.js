import React from "react";
import "./ProfitCard.css";
import CircularProgress from "./CircularProgress";

const ProfitCard = ({ title, value, change, className, progress }) => {
  return (
    <div className={`container ${className}`}>
      <div className="title">{title}</div>
      <div className="percent-value">
        <div className="value">{value}</div>
        <div className="progress-circle">
          <CircularProgress value={progress} label="Goal Completed" />
        </div>
      </div>
      <div className="border-div">
        <div
          className="change"
          style={{ color: change.includes("-") ? "red" : "green" }}
        >
          {change}
        </div>
        <div className="sentence">*The value here has been rounded off.</div>
      </div>
    </div>
  );
};

export default ProfitCard;
