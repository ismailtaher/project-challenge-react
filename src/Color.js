import React from "react";

const Color = ({ color }) => {
  return (
    <div className="content" style={{ backgroundColor: color }}>
      <p>{color ? color : "Empty Value"}</p>
    </div>
  );
};

export default Color;
