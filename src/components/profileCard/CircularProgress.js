import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ value, label }) => {
  return (
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <CircularProgressbar
        value={value}
        styles={buildStyles({
            
          pathColor: value >= 50 ? "#7195f4" : "red",
          textColor: value >= 50 ? "green" : "red",
        })}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >{`${value}%`}</div>
        <div style={{ fontSize: "12px",color:"gray" }}>{label}</div>
      </div>
    </div>
  );
};

export default CircularProgress;
