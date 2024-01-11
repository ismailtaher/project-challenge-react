import React from "react";

const Color = ({ color, hexValue, isDarkText }) => {
  return (
    <section
      className="content"
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#FFF",
      }}>
      <p>{color ? color : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Color.defaultProps = {
  color: "Empty Color Value",
};

export default Color;
