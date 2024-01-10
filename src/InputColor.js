import React from "react";

const InputColor = ({ color, setColor }) => {
  return (
    <form className="inputColor" onSubmit={(e) => e.preventDefault(e)}>
      <label htmlFor="inputColor">Add Color</label>
      <input
        type="text"
        id="inputColor"
        role="inputColor"
        placeholder="Add color name"
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default InputColor;
